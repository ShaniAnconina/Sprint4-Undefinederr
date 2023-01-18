import { gigService } from '../../services/gig.service.js'
import { SET_FILTER, SET_GIGS } from './gig.reducer.js'
import { store } from './store.js'


export async function loadGigs(filterBy) {
    try {
        const gigs = await gigService.query(filterBy)
        console.log("in action at loading ", filterBy)
        store.dispatch({ type: SET_GIGS, gigs })
        return gigs
    } catch (err) {
        console.log('ERROR', err)
        throw err
    }
}

export function setfilter(filterBy){
    console.log("in action ",filterBy )
        store.dispatch({type:SET_FILTER, filterBy})
}