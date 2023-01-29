export const SET_USER = 'SET_USER'

const initialState = {
    loggedinUser: null //place back after profile dev
}


export function userReducer(state = initialState, action) {
    switch (action.type) {
        case SET_USER:
            return { ...state, loggedinUser: action.loggedinUser }
        default:
            return state
    }
}