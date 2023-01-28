export const SET_USER = 'SET_USER'

const initialState = {
    loggedinUser: null //place back after profile dev
    // loggedinUser: {
    //     fullname: "Eliasi the king!",
    //     imgUrl: "https://randomuser.me/api/portraits/men/20.jpg",
    //     password: "ohad",
    //     isSeller: true,
    //     memberSince:"May, 2019",
    //     username: "ohad",
    //     _id: "xH6r9",
    //     miniOrders: [{
    //         _id: "order1234",
    //         buyer: "yovel nehmady",
    //         buyerImg: "https://randomuser.me/api/portraits/women/42.jpg",
    //         gig:"I will design beautiful webiste",
    //         price: 172,
    //         dueDate: "31-Jan-2023",
    //         deliveredDate: "27-Jan-2023",
    //         status: "pending"
    //     },
    //     {
    //         _id: "order1235",
    //         buyer: "mira dolgshtain",
    //         buyerImg: "https://randomuser.me/api/portraits/women/41.jpg",
    //         gig:"I will write the best content for your blog",
    //         price: 211,
    //         dueDate: "5-Fab-2023",
    //         deliveredDate: "",
    //         status: "in process"
    //     }
    // ],
    //     miniPurchases: [{
    //         _id: "order1134",
    //         buyer: "shimi twillo",
    //         buyerImg: "https://randomuser.me/api/portraits/women/39.jpg",
    //         gig:"I will generate annual ROI report for the business",
    //         price: 150,
    //         dueDate: "25-Jan-2023",
    //         deliveredDate: "21-Jan-2023",
    //         status: "Done"
    //     },
    //     {
    //         _id: "order1135",
    //         buyer: "moral twitto",
    //         buyerImg: "https://randomuser.me/api/portraits/women/42.jpg",
    //         gig:"I will create a superstar video of your wedding",
    //         price: 600,
    //         dueDate: "20-Jan-2023",
    //         deliveredDate: "20-Jan-2023",
    //         status: "Deny"
    //     }
    // ]
    // }
}


export function userReducer(state = initialState, action) {
    switch (action.type) {
        case SET_USER:
            return { ...state, loggedinUser: action.loggedinUser }
        default:
            return state
    }
}