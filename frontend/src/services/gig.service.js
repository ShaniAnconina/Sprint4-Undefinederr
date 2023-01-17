import { storageService } from "./async-storage.service"
import { utilService } from "./util.service"

const STORAGE_KEY = 'gig_DB'
_createGigs()


export const gigService = {
    query,
}

function query() {
    return storageService.query(STORAGE_KEY)
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

function _createGig(title, imgUrl = '../assets/img/freelancer.jpg') {
    return {
        _id: utilService.makeId(),
        title,
        description: 'Lorem ipsum dolor',
        imgUrl,
        price: utilService.getRandomIntInclusive(10, 300),
        daysToMake: utilService.getRandomIntInclusive(1, 10),
        tags: ['logo-design', 'artisitic', 'proffesional', 'accessible'],
        likedByUsers: []
    }
}

