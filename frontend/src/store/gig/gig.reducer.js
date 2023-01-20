import { gigService } from "../../services/gig.service"

export const SET_GIGS = 'SET_GIGS'
export const ADD_GIG = 'ADD_GIG'
export const UPDATE_GIG = 'UPDATE_GIG'
export const REMOVE_GIG = 'REMOVE_GIG'
export const SET_FILTER = 'SET_FILTER'
export const SET_LOGGEDIN_USER = 'SET_LOGGEDIN_USER'

const initialState = {
    gigs: [],
    loggedinUser: null,
    filterBy: gigService.getDefaultFilter()
}

export function gigReducer(state = initialState, action) {
    let gigs

    switch (action.type) {
        case SET_GIGS:
            return { ...state, gigs: action.gigs }
        case ADD_GIG:
            gigs = [...state.gigs, action.gig]
            return { ...state, gigs }
        case UPDATE_GIG:
            gigs = state.gigs.map(gig => gig._id === action.gig._id ? action.gig : gig)
            return { ...state, gigs }
        case REMOVE_GIG:
            gigs = state.gigs.filter(gig => gig._id !== action.gigId)
            return { ...state.gigs, gigs }
        case SET_FILTER:
            return { ...state, filterBy: action.filterBy }
        case SET_LOGGEDIN_USER:
            return { ...state, loggedinUser: action.loggedinUser }


        default:
            return state
    }
}

