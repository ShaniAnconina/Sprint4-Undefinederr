export const SET_GIGS = 'SET_GIGS'

const initialState = {
    gigs: [],
}

export function gigReducer(state = initialState, action) {
    let gigs
    
    switch (action.type) {
        case SET_GIGS:
            return { ...state, gigs: action.gigs }

        default:
            return state
    }
}