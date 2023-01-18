import { storageService } from "./async-storage.service"
import { utilService } from "./util.service"

const STORAGE_KEY = 'gig_DB'
_createGigs()


export const gigService = {
    query,
    get,
    save,
    getDefaultFilter,
    // getPopulatGigs,
    addToWishlist
}

function query() {
    return storageService.query(STORAGE_KEY)
}

function get(gigId) {
    return storageService.get(STORAGE_KEY, gigId)
}

function save(gig) {
    if (gig._id) {
        return storageService.put(STORAGE_KEY, gig)
    } else {
        return storageService.post(STORAGE_KEY, gig)
    }
}

function addToWishlist(gigId) {
    console.log('gigId - service:', gigId)
}
// function getPopulatGigs(gigs) {
//     return gigs.filter(gig => gig.owner.rate === 5)
// }

function _createGigs() {
    let Gigs = utilService.loadFromStorage(STORAGE_KEY)
    if (!Gigs || !Gigs.length) {
        Gigs = []
        Gigs.push(_createGig('I will be your social media marketing manager'))
        Gigs.push(_createGig('I will setup modern wordpress website design or blog design'))
        Gigs.push(_createGig('I will be your social media manager and personal assistant'))
        Gigs.push(_createGig('I will create cool beer packaging, craft beer, beer label'))
        Gigs.push(_createGig('I will create your winning candidate resume, cover letter, and linkedin profile'))
        Gigs.push(_createGig('I will create a successful resume or cover letter'))
        Gigs.push(_createGig('I will illustrate childrens book pages for you'))
        Gigs.push(_createGig('I will design the labels for your beer or beverage can'))
        Gigs.push(_createGig('I will mix and master your music as charting german audio engineer'))
        Gigs.push(_createGig('I will draw children story book illustration'))
        utilService.saveToStorage(STORAGE_KEY, Gigs)
    }
    return Gigs
}

function _createGig(title, imgUrl = 'https://assets.entrepreneur.com/content/3x2/2000/20170801121054-graphicstock-workspace-with-laptop-male-hands-notebookeyeglasses-sketchbook-black-wooden-desk-with-bamboo-leaf-flat-lay-top-view-office-table-desk-freelancer-working-place-ruvmpjwlol.jpg') {
    return {
        _id: utilService.makeId(),
        title,
        description: 'Lorem ipsum dolor',
        imgUrl,
        price: utilService.getRandomIntInclusive(10, 300),
        daysToMake: utilService.getRandomIntInclusive(1, 10),
        tags: ['logo-design', 'artisitic', 'proffesional', 'accessible'],
        likedByUsers: [],
        revisions: utilService.getRandomIntInclusive(1, 6),
        owner: {
            _id: 'u101',
            fullname: 'Dudu Da',
            imgUrl: "url",
            level: "basic/premium",
            rate: utilService.getRandomIntInclusive(1, 5)
        },
        isSaved: false
    }
}

function getDefaultFilter() {
    return { txt: '', label: '' }
}

