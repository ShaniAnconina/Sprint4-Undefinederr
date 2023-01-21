import { gigService } from '../../services/gig.service.js'
import { ADD_GIG, REMOVE_GIG, SET_FILTER, SET_GIGS, UPDATE_GIG } from './gig.reducer.js'
import { store } from '../store.js'



export async function loadGigs(filterBy) {
    try {
        let gigs = await gigService.query(filterBy)
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
        console.log('gig:', gig)
        const savedGig = await gigService.save(gig)
        console.log('savedGig:', savedGig)
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
