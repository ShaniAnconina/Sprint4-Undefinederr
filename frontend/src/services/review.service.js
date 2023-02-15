export const reviewService = {
    getEmptyReview,
}
//TODO: add functions, full crad!

function getEmptyReview() {
    return {
        txt: '',
        rate: 1,
        reviewedAt: '',
        fullname: '',
        country: '',
        flag: ''

    }
}