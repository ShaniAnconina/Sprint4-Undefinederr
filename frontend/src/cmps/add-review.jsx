import { useEffect, useState } from "react"
import { AiFillStar } from "react-icons/ai"

import { GrClose } from "react-icons/gr"
import { useSelector } from "react-redux"
import { reviewService } from "../services/review.service"

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

        console.log(reviewToAdd)

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

            <div className="header flex space-between">
                <h2>Review & Rate</h2>
                <button onClick={onCloseModal}><GrClose /></button>
            </div>

            <div className="main">

                <form onSubmit={onSubmit}>

                    <div className="txt-review flex space-between">

                        <label className="flex column" htmlFor="txt-review">
                            <b>Your Review</b>
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
                                <b>Your Name</b>
                            </label>

                            <input type="text"
                                name="fullname"
                                id="fullname"
                                placeholder="Enter yoy'r name"
                                onChange={handleChange}
                                value={reviewToAdd.by.fullname} />

                        </div>


                        <div className="rate flex column">
                            <b>Rate</b>

                            <div className="rate-stars flex">

                                <span onClick={() => setRateToAdd(1)} className={rateToAdd >= 0 ? 'gold' : ''}>
                                    <AiFillStar size="15px" />
                                </span>

                                <span onClick={() => setRateToAdd(2)} className={rateToAdd >= 1 ? 'gold' : ''}>
                                    <AiFillStar size="15px" />
                                </span>

                                <span onClick={() => setRateToAdd(3)} className={rateToAdd >= 2 ? 'gold' : ''}>
                                    <AiFillStar size="15px" />
                                </span>

                                <span onClick={() => setRateToAdd(4)} className={rateToAdd >= 3 ? 'gold' : ''}>
                                    <AiFillStar size="15px" />
                                </span>

                                <span onClick={() => setRateToAdd(5)} className={rateToAdd >= 4 ? 'gold' : ''}>
                                    <AiFillStar size="15px" />
                                </span>

                                <p>(rate)</p>

                            </div>
                        </div>
                    </div>

                    <button>Send Your Review</button>

                </form>

            </div>






        </article>

    </section>
}