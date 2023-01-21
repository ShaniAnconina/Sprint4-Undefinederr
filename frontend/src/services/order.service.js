import { storageService } from "./async-storage.service"

export const orderService = {
    save,
    getEmptyOrder
}

function save(order) {
    if (order._id) {
        return storageService.put('order', order)
    } else {
        return storageService.post('order', order)
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