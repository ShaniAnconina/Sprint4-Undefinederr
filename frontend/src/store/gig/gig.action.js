import { gigService } from '../../services/gig.service.js'
import { ADD_GIG, REMOVE_GIG, SET_FILTER, SET_GIGS, UPDATE_GIG } from './gig.reducer.js'
import { store } from './store.js'


export async function loadGigs(filterBy) {
    try {
        let gigs = await gigService.query(filterBy)
        if (filterBy.txt) {
            const regex = new RegExp(filterBy.txt, 'ig')
            gigs = gigs.filter((gig) => regex.test(gig.title) || regex.test(gig.description) || gig.tags.some((tag) => regex.test(tag)))
        }
        if (filterBy.tags) {
            gigs = gigs.filter((gig) => gig.tags.includes(filterBy.tag))
        }

        store.dispatch({ type: SET_GIGS, gigs })
        return gigs
    } catch (err) {
        console.log('ERROR', err)
        throw err
    }
}

export async function saveGig(gig) {
    const type = (gig._id) ? UPDATE_GIG : ADD_GIG
    try {
        const savedGig = await gigService.save(gig)
        store.dispatch({ type, gig: savedGig })
        return savedGig
    } catch (err) {
        console.error('Cannot save gig:', err)
        throw err
    }
}

export async function removeGig(gigId) {
    try {
        store.dispatch({ type: REMOVE_GIG, gigId })
        await gigService.remove(gigId)
    } catch (err) {
        console.log('Had issues Removing gig', err)
        throw err
    }
}

export function setfilter(filterBy) {
    store.dispatch({ type: SET_FILTER, filterBy })
}
