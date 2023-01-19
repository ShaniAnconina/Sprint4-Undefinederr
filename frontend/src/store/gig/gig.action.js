import { gigService } from '../../services/gig.service.js'
import { SET_FILTER, SET_GIGS } from './gig.reducer.js'
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

export function setfilter(filterBy) {
    store.dispatch({ type: SET_FILTER, filterBy })
}
