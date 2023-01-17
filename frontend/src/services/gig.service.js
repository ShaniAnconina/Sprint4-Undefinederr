import { storageService } from "./async-storage.service"
import { utilService } from "./util.service"

const STORAGE_KEY = 'gig_DB'
_createGigs()


export const GigService = {
    query,
}

function query() {
    return storageService.query(STORAGE_KEY)
}

function _createGigs() {
    let Gigs = utilService.loadFromStorage(STORAGE_KEY)
    if (!Gigs || !Gigs.length) {
        Gigs = []
        Gigs.push(_createGig('Doll'))
        utilService.saveToStorage(STORAGE_KEY, Gigs)
    }
    return Gigs
}

function _createGig(name = 'New Gig') {
    return {
        _id: utilService.makeId(),
        name,
        price: utilService.getRandomIntInclusive(10, 100),
        labels: ['Doll', 'Battery Powered', 'Baby'],
        createdAt: Date.now(),
        inStock: 'true'
    }
}