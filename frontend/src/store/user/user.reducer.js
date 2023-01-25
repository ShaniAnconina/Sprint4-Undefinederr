export const SET_USER = 'SET_USER'

const initialState = {
    // loggedinUser: null //place back after profile dev
    loggedinUser: {
        fullname: "Eliasi the king!",
        imgUrl: "https://randomuser.me/api/portraits/men/20.jpg",
        password: "ohad",
        username: "ohad",
        _id: "xH6r9",
        miniOrders: [{
            _id: "order1234",
            buyer: "yovel nehmady",
            buyerImg: "https://randomuser.me/api/portraits/women/42.jpg",
            gig:"I will design beautiful webiste",
            price: 172,
            dueDate: Date(1677801600000),
            deliveredDate: Date(1677456000000),
            // dueDate: Date.UTC(2023, 1, 31),
            // deliveredDate: Date.UTC(2023, 1, 27),
            status: "pending"
        }]
    }
}


export function userReducer(state = initialState, action) {
    switch (action.type) {
        case SET_USER:
            return { ...state, loggedinUser: action.loggedinUser }
        default:
            return state
    }
}