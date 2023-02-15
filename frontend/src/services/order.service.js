import { httpService } from "./http.service"

const BASE_URL = 'order/'

export const orderService = {
    save,
    getEmptyOrder
}

function save(order) {
    if (order._id) {
        return httpService.put(BASE_URL + order._id, order)
    } else {
        return httpService.post(BASE_URL, order)
    }
}

function getEmptyOrder() {
    return {
        buyer: null,
        seller: null,
        gig: {
            _id: '',
            name: '',
            price: 0
        },
        status: "pending"
    }
}