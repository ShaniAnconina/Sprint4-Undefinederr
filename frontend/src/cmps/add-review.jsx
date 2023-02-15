import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { AiFillStar } from "react-icons/ai"

import { reviewService } from "../services/review.service.js"

export function AddReview({ setIsAddReview, elApp }) {
    const [reviewToAdd, setReviewToAdd] = useState(reviewService.getEmptyReview())
    const [rateToAdd, setRateToAdd] = useState(0)
    const { loggedinUser } = useSelector((storeState) => storeState.userModule)

    useEffect(() => {
        disableScroll(true)
        if (loggedinUser) {
            const by = {}
            by.fullname = loggedinUser.fullname
            setReviewToAdd(prev => ({ ...prev, by }))
        }
    }, [])

    function onCloseModal() {
        setIsAddReview(null)
        disableScroll(false)
    }

    function handleChange({ target }) {
        let { name: field, value } = target
        setReviewToAdd((prev) => ({ ...prev, [field]: value }))
    }

    function onSubmit(ev) {
        ev.preventDefault()
        setReviewToAdd((prev) => ({ ...prev, rate: rateToAdd }))
    }

    function disableScroll(status) {
        if (status) {
            elApp.current.style.overflow = 'hidden'
            elApp.current.style.maxHeight = '100vh'
        }
        else {
            elApp.current.style.overflow = 'visible '
            elApp.current.style.maxHeight = 'none'
        }
    }

    return <section onClick={onCloseModal} className="add-review-screen flex column">
        <article onClick={(ev) => ev.stopPropagation()} className="add-review">
            <form onSubmit={onSubmit}>
                <div className="main-container">
                    <div className="header">
                        <h2>How was your experience?</h2>
                    </div>
                    <div className="txt-review flex space-between">
                        <label className="flex column" htmlFor="txt-review">
                            <p className="bold">Your Review</p>
                            <small>Enter you'r review about this gig and the Seller</small>
                        </label>
                        <textarea type="text"
                            name="txt"
                            id="txt-review"
                            placeholder="This gig..."
                            onChange={handleChange}
                            value={reviewToAdd.txt} />
                    </div>
                    <div className="footer flex space-between">
                        <div className="fullname flex column">
                            <label htmlFor="fullname">
                                <p className="bold">Your Name</p>
                            </label>
                            <input type="text"
                                name="fullname"
                                id="fullname"
                                onChange={handleChange}
                                value={reviewToAdd.fullname} />
                        </div>
                        <div className="country flex column">
                            <label htmlFor="country">
                                <p className="bold">Your Country</p>
                            </label>
                            <input type="text"
                                name="country"
                                id="country"
                                onChange={handleChange}
                                value={reviewToAdd.country} />
                        </div>
                        <div className="rate flex column">
                            <p className="bold">Rate</p>
                            <div className="rate-stars flex">
                                <span onClick={() => setRateToAdd(1)} className={rateToAdd > 0 ? 'gold' : ''}>
                                    <AiFillStar size="18px" />
                                </span>
                                <span onClick={() => setRateToAdd(2)} className={rateToAdd > 1 ? 'gold' : ''}>
                                    <AiFillStar size="18px" />
                                </span>
                                <span onClick={() => setRateToAdd(3)} className={rateToAdd > 2 ? 'gold' : ''}>
                                    <AiFillStar size="18px" />
                                </span>
                                <span onClick={() => setRateToAdd(4)} className={rateToAdd > 3 ? 'gold' : ''}>
                                    <AiFillStar size="18px" />
                                </span>
                                <span onClick={() => setRateToAdd(5)} className={rateToAdd > 4 ? 'gold' : ''}>
                                    <AiFillStar size="18px" />
                                </span>
                                <p>{rateToAdd}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="btn-container flex space-between">
                    <button type="button" className="cancel" onClick={onCloseModal}>Cancel</button>
                    <button className="save">Send Your Review</button>
                </div>
            </form>
        </article>
    </section>
}