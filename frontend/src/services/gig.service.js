import { storageService } from "./async-storage.service"
import { utilService } from "./util.service"

const STORAGE_KEY = 'gig_DB'
_createGigs()


export const gigService = {
    query,
    get
}

function query() {
    return storageService.query(STORAGE_KEY)
}

function get(gigId) {
    return storageService.get(STORAGE_KEY, gigId)
}

function _createGigs() {
    let Gigs = utilService.loadFromStorage(STORAGE_KEY)
    if (!Gigs || !Gigs.length) {
        Gigs = []
        Gigs.push(_createGig('I will be your social media marketing manager'))
        Gigs.push(_createGig('I will setup modern wordpress website design or blog design'))
        Gigs.push(_createGig('I will be your social media manager and personal assistant'))
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
        revisions: utilService.getRandomIntInclusive(1,6)
    }
}

