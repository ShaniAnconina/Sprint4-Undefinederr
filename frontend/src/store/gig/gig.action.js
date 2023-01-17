import { gigService } from '../../services/gig.service.js'
import { SET_GIGS } from './gig.reducer.js'
import { store } from './store.js'


export async function loadGigs() {
    try {
        const gigs = await gigService.query()
        store.dispatch({ type: SET_GIGS, gigs })
        return gigs
    } catch (err) {
        console.log('ERROR', err)
        throw err
    }
}