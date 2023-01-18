import { gigService } from "../../services/gig.service"

export const SET_GIGS = 'SET_GIGS'
export const SET_FILTER = 'SET_FILTER'

const initialState = {
    gigs: [],
    filterBy: gigService.getDefaultFilter()
}

export function gigReducer(state = initialState, action) {
    let gigs
    
    switch (action.type) {
        case SET_GIGS:
            return { ...state, gigs: action.gigs }
        case SET_FILTER:
            return { ...state, filterBy: action.filterBy }

        default:
            return state
    }
}

