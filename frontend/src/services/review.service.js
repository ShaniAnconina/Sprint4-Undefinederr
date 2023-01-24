import { storageService } from "./async-storage.service"
import { utilService } from "./util.service"


export const reviewService = {
    getEmptyReview,
}

function getEmptyReview() {
    return {
        txt: '',
        rate: 1,
        reviewedAt: '',
        by: {
            name: '',
            country: '',
            flag: ''
        }
    }
}

