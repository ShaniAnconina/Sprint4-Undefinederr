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
        console.log("trying to query with filterBy: ", filterBy)
        let gigs = await storageService.query(STORAGE_KEY)
        console.log("from gigs:", gigs)

        getAvgRate(gigs)
        utilService.saveToStorage(STORAGE_KEY, gigs)

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
        return gigs
    } catch (err) {
        console.log("could not retrieve gigs from service")
        throw err
    }
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
}

function getEmptyGig() {
    const usersData = require('../Data/users-for-review.json')
    const users = usersData.results
    const genUsersIdx = utilService.getRandomIntInclusive(1, 50)

    return {
        title: "",
        description: "",
        price: 0,
        daysToMake: "",
        tags: [],
        owner: {
            _id: "u101",
            fullname: `${users[genUsersIdx].name.first} ${users[genUsersIdx].name.last}`,
            username: users[genUsersIdx].login.username,
            imgUrl: users[genUsersIdx].picture.thumbnail,
            level: "basic",
            rate: utilService.getRandomIntInclusive(1, 5)
        },
        likedByUsers: []
    }
}

function _createGigs() {
    let Gigs = utilService.loadFromStorage(STORAGE_KEY)
    if (!Gigs || !Gigs.length) {
        Gigs = []
        let gigsData = require('../Data/gigs.json')
        let gigsUrl = require('../assets/img/demogig/cloudinaryURL.json')
        let usersData = require('../Data/users-for-review.json')
        let users = usersData.results
        let reviewText = require('../Data/review-text.json')
        console.log(gigsUrl)
        gigsData.forEach(gig => {
            const genUsersIdx = [utilService.getRandomIntInclusive(1, 50), utilService.getRandomIntInclusive(1, 50), utilService.getRandomIntInclusive(1, 50), utilService.getRandomIntInclusive(1, 50), utilService.getRandomIntInclusive(1, 50), utilService.getRandomIntInclusive(1, 50)]
            const imgUrls = [utilService.getRandomIntInclusive(1, 20),utilService.getRandomIntInclusive(1, 20),utilService.getRandomIntInclusive(1, 20)]
            gig.reviews = [
                {
                    id: utilService.makeId(),
                    txt: reviewText[genUsersIdx[1]].txt,
                    rate: reviewText[genUsersIdx[1]].rate,
                    by: {
                        _id: "u102",
                        fullname: `${users[genUsersIdx[1]].name.first} ${users[genUsersIdx[1]].name.last}`,
                        imgUrl: users[genUsersIdx[1]].picture.thumbnail
                    }
                },
                {
                    id: utilService.makeId(),
                    txt: reviewText[genUsersIdx[2]].txt,
                    rate: reviewText[genUsersIdx[2]].rate,
                    by: {
                        _id: "u102",
                        fullname: `${users[genUsersIdx[2]].name.first} ${users[genUsersIdx[2]].name.last}`,
                        imgUrl: users[genUsersIdx[2]].picture.thumbnail
                    }
                },
                {
                    id: utilService.makeId(),
                    txt: reviewText[genUsersIdx[3]].txt,
                    rate: reviewText[genUsersIdx[3]].rate,
                    by: {
                        _id: "u102",
                        fullname: `${users[genUsersIdx[3]].name.first} ${users[genUsersIdx[3]].name.last}`,
                        imgUrl: users[genUsersIdx[3]].picture.thumbnail
                    }
                },
                {
                    id: utilService.makeId(),
                    txt: reviewText[genUsersIdx[4]].txt,
                    rate: reviewText[genUsersIdx[4]].rate,
                    by: {
                        _id: "u102",
                        fullname: `${users[genUsersIdx[4]].name.first} ${users[genUsersIdx[4]].name.last}`,
                        imgUrl: users[genUsersIdx[4]].picture.thumbnail
                    }
                },
                {
                    id: utilService.makeId(),
                    txt: reviewText[genUsersIdx[5]].txt,
                    rate: reviewText[genUsersIdx[5]].rate,
                    by: {
                        _id: "u102",
                        fullname: `${users[genUsersIdx[5]].name.first} ${users[genUsersIdx[5]].name.last}`,
                        imgUrl: users[genUsersIdx[5]].picture.thumbnail
                    }
                }



            ]
            let gigImgIdx = utilService.getRandomIntInclusive(1, 20)
            let gigImgCategory = gig.tags[0]
            let gigImgUrl = gigsUrl[gigImgCategory][gigImgIdx]
            Gigs.push(_createGig(gig.title, gig.tags, gig.description, imgUrls, gig.reviews, users[genUsersIdx[0]]))
        })
        utilService.saveToStorage(STORAGE_KEY, Gigs)
    }
    return Gigs
}

function _createGig(title, tags, description = "Lorem ipsum dolor", imgUrl = "https://assets.entrepreneur.com/content/3x2/2000/20170801121054-graphicstock-workspace-with-laptop-male-hands-notebookeyeglasses-sketchbook-black-wooden-desk-with-bamboo-leaf-flat-lay-top-view-office-table-desk-freelancer-working-place-ruvmpjwlol.jpg", reviews, owner) {
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
            fullname: `${owner.name.first} ${owner.name.last}`,
            username: owner.login.username,
            // imgUrl: "https://i.pinimg.com/280x280_RS/2e/45/66/2e4566fd829bcf9eb11ccdb5f252b02f.jpg",
            imgUrl: owner.picture.thumbnail,
            level: "basic",
            rate: utilService.getRandomIntInclusive(1, 5)
        },
        isSaved: false
    }
}

function getDefaultFilter() {
    return { txt: "", tags: [], budget: { min: 0, max: Infinity }, daysToMake: Infinity, isSaved: false }
}

