// import { storageService } from "./async-storage.service"
import { httpService } from "./http.service"
import { utilService } from "./util.service"

const BASE_URL = 'gig/'
// const STORAGE_KEY = "gig_DB"
// _createGigs()


export const gigService = {
  query,
  get,
  save,
  remove,
  getDefaultFilter,
  getEmptyGig,
  addToWishlist,
  getFeatures
}

function getFeatures() {
  return [
    { id: 101, txt: 'Grammar & spelling' },
    { id: 102, txt: 'Review & edit' },
    { id: 103, txt: 'Off-page strategy' },
    { id: 104, txt: 'Episode summary' },
  ]
}

async function query(filterBy) {
  // const queryParams = 
  // `?txt=${filterBy.txt}&tags=${filterBy.tags}&budget_min=${filterBy.budget.min}&budget_max=${filterBy.budget.max}&daysToMake=${filterBy.daysToMake}&isSaved=${filterBy.isSaved}&sortBy=${filterBy.sortBy}`
  // console.log(`requiring : ${BASE_URL + queryParams}`)

  try {
    let gigs = await httpService.get(BASE_URL)
    // let gigs = await storageService.query(STORAGE_KEY)

    gigs = getAvgRate(gigs)
    // utilService.saveToStorage(STORAGE_KEY, gigs)


    //filter by free text
    if (filterBy?.txt) {
      const regex = new RegExp(filterBy.txt, "ig")
      gigs = gigs.filter((gig) => regex.test(gig.title) || regex.test(gig.description))
    }

    //filter by tags
    if (filterBy?.tags) {
      gigs = gigs.filter((gig) => filterBy.tags.every((tag) => gig.tags.includes(tag)))
    }

    //filter by budget
    if (filterBy?.budget && filterBy?.budget.min && filterBy?.budget.max) {
      gigs = gigs.filter((gig) => gig.price >= filterBy.budget.min && gig.price <= filterBy.budget.max)
    }

    //filter by time range
    if (filterBy?.daysToMake) {
      gigs = gigs.filter((gig) => gig.daysToMake <= filterBy.daysToMake)
    }

    //filter by is saved
    if (filterBy?.isSaved) {
      gigs = gigs.filter((gig) => gig.isSaved === true)
    }

    //Sort by
    switch (filterBy.sortBy){
      case 'topRated':
        gigs.sort((a,b) => b.rate - a.rate)
        break
      case 'price':
        gigs.sort((a,b) => a.price - b.price)
        break
        case 'daysToMake':
        gigs.sort((a,b) => a.daysToMake - b.daysToMake)
    }
    return gigs
  } catch (err) {
    console.log("could not retrieve gigs from service")
    throw err
  }
}

function get(gigId) {
  // return storageService.get(STORAGE_KEY, gigId)
  return httpService.get(BASE_URL + gigId)
}

function save(gig) {
  if (gig._id) {
    // return storageService.put(STORAGE_KEY, gig)
    return httpService.put(BASE_URL + gig._id, gig)
  } else {
    // return storageService.post(STORAGE_KEY, gig)
    return httpService.post(BASE_URL, gig)
  }
}

function remove(gigId) {
  // return storageService.remove(STORAGE_KEY, gigId)
  return httpService.delete(BASE_URL + gigId)
}

function addToWishlist(gigId) {
  console.log('gigId - service:', gigId)
}

function getAvgRate(gigs) {
  gigs.forEach(gig => {
    let avg
    let sum = gig.reviews?.reduce(
      (acc, review) => {
        acc += review.rate
        return acc
      }, 0)
    avg = sum / gig.reviews?.length
    gig.rate = avg.toFixed(1)
  })
  return gigs
}

function getEmptyGig() {

  return {
    title: "",
    description: "",
    price: 0,
    daysToMake: "",
    tags: [],
    owner: {
      imgUrl: 'https://i.pinimg.com/280x280_RS/2e/45/66/2e4566fd829bcf9eb11ccdb5f252b02f.jpg',
    },
    likedByUsers: []
  }
}


function getDefaultFilter() {
  return { txt: "", tags: [], budget: { min: 0, max: Infinity }, daysToMake: Infinity, isSaved: false, sortBy:'topRated' }
}