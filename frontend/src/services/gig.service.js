import { storageService } from "./async-storage.service"
import { utilService } from "./util.service"


const STORAGE_KEY = "gig_DB"
_createGigs()


export const gigService = {
    query,
    get,
    save,
    remove,
    getDefaultFilter,
    getEmptyGig,
    addToWishlist
}

async function query(filterBy) {
    try {
        let gigs = await storageService.query(STORAGE_KEY)
        if (!filterBy) {
            console.error("filterBy object is missing")
            return gigs
        }

        //filter by free text
        if (filterBy.txt) {
            const regex = new RegExp(filterBy.txt, "ig")
            gigs = gigs.filter((gig) => regex.test(gig.title) || regex.test(gig.description))
        }

        //filter by tags
        if (filterBy.tags) {
            gigs = gigs.filter((gig) => gig.tags.includes(filterBy.tags))
        }

        //filter by budget
        if (filterBy.budget && filterBy.budget.min && filterBy.budget.max) {
            gigs = gigs.filter((gig) => gig.price >= filterBy.budget.min && gig.price <= filterBy.budget.max)
        } else {
            console.warn("filterBy.budget is missing or invalid")
        }

        //filter by time range
        if (filterBy.daysToMake && filterBy.daysToMake.min && filterBy.daysToMake.max) {
            gigs = gigs.filter((gig) => gig.daysToMake >= filterBy.daysToMake.min && gig.daysToMake <= filterBy.daysToMake.max)
        } else {
            console.warn("filterBy.daysToMake is missing or invalid")
        }

        //filter by is saved
        if (filterBy.isSaved) {
            gigs = gigs.filter((gig) => gig.isSaved === true)
        }
        return gigs
    } catch (err) {
        console.log("could not retrieve gigs from service")
        throw err
    }
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

function remove(gigId) {
    return storageService.remove(STORAGE_KEY, gigId)
}

function addToWishlist(gigId) {

    console.log('gigId - service:', gigId)
    console.log("gigId - service:", gigId)
}

function getEmptyGig() {
    return {
        title: "",
        description: "",
        price: 0,
        daysToMake: "",
        // imgUrl: "",
        tags: [],
        owner: {
            _id: "u101",
            fullname: "Dudu Da",
            username: "Dududa",
            imgUrl: "url",
            level: "basic",
            rate: 4
        },
        likedByUsers: []
    }
}

function _createGigs() {
    let Gigs = utilService.loadFromStorage(STORAGE_KEY)
    if (!Gigs || !Gigs.length) {
        Gigs = []
        let GigsData = require('../Data/gigs.json')
        console.log(GigsData)
        GigsData.forEach(gig => {
            gig.reviews = [
                {
                    id: utilService.makeId(),
                    txt: utilService.makeLorem(5),
                    rate: utilService.getRandomIntInclusive(1, 5),
                    by: {
                        _id: "u102",
                        fullname: "user2",
                        imgUrl: "https://i.pinimg.com/280x280_RS/2e/45/66/2e4566fd829bcf9eb11ccdb5f252b02f.jpg"
                    }
                },
                {
                    id: utilService.makeId(),
                    txt: utilService.makeLorem(12),
                    rate: utilService.getRandomIntInclusive(1, 5),
                    by: {
                        _id: "u102",
                        fullname: "user2",
                        imgUrl: "https://i.pinimg.com/280x280_RS/2e/45/66/2e4566fd829bcf9eb11ccdb5f252b02f.jpg"
                    }
                },
                {
                    id: utilService.makeId(),
                    txt: utilService.makeLorem(7),

                    rate: utilService.getRandomIntInclusive(1, 5),
                    by: {
                        _id: "mumui",
                        fullname: "momi2",
                        imgUrl: "https://i.pinimg.com/280x280_RS/2e/45/66/2e4566fd829bcf9eb11ccdb5f252b02f.jpg"
                    }
                }

            ]
        let gigImgnum = utilService.getRandomIntInclusive(1,20)
        let gigImgCategory = gig.tags[0]
        console.log(gigImgCategory)
        let gigImgUrl = `src/assets/img/demogig/${gigImgCategory}/${gigImgnum}.png`
        Gigs.push(_createGig(gig.title, gig.tags, gig.description,gigImgUrl, gig.reviews))
        })
        utilService.saveToStorage(STORAGE_KEY, Gigs)
    }
    return Gigs
}

function _createGig(title, tags, description = "Lorem ipsum dolor", imgUrl = "https://assets.entrepreneur.com/content/3x2/2000/20170801121054-graphicstock-workspace-with-laptop-male-hands-notebookeyeglasses-sketchbook-black-wooden-desk-with-bamboo-leaf-flat-lay-top-view-office-table-desk-freelancer-working-place-ruvmpjwlol.jpg",reviews) {
    return {
        _id: utilService.makeId(),
        title,
        description,
        imgUrl,
        price: utilService.getRandomIntInclusive(10, 300),
        daysToMake: utilService.getRandomIntInclusive(1, 10),
        tags,
        likedByUsers: [],
        revisions: utilService.getRandomIntInclusive(1, 6),
        reviews,
        owner: {
            _id: "u101",
            fullname: "Dudu Da",
            username: "Dududa",
            // imgUrl: "https://i.pinimg.com/280x280_RS/2e/45/66/2e4566fd829bcf9eb11ccdb5f252b02f.jpg",
            imgUrl: "",
            level: "basic",
            rate: utilService.getRandomIntInclusive(1, 5)
        },
        isSaved: false
    }
}

function getDefaultFilter() {
    return { txt: "", tags: "", budget: { min: 0, max: Infinity }, daysToMake: { min: 0, max: Infinity }, isSaved: false }
}

