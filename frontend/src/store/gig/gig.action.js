import { gigService } from '../../services/gig.service.js'
import { ADD_GIG, REMOVE_GIG, SET_FILTER, SET_GIGS, UPDATE_GIG } from './gig.reducer.js'
import { store } from '../store.js'
import { showErrorMsg } from '../../services/event-bus.service.js'

export async function loadGigs(filterBy) {
    try {
        let gigs = await gigService.query(filterBy)
        store.dispatch({ type: SET_GIGS, gigs })
        return gigs
    } catch (err) {
        showErrorMsg()
    }
}

export async function saveGig(gig) {
    const type = (gig._id) ? UPDATE_GIG : ADD_GIG
    try {
        const savedGig = await gigService.save(gig)
        store.dispatch({ type, gig: savedGig })
        return savedGig
    } catch (err) {
        throw err
    }
}

export async function removeGig(gigId) {
    try {
        store.dispatch({ type: REMOVE_GIG, gigId })
        await gigService.remove(gigId)
    } catch (err) {
        throw err
    }
}

export function setfilter(filterBy) {
    store.dispatch({ type: SET_FILTER, filterBy })
}
