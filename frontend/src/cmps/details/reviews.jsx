import { useState } from "react"

import { ReviewRate } from "./review-rate"
import { ReviewPreview } from "./review-preview"
import { AddReview } from "../../pages/add-review"

export function Reviews({ elApp, gig }) {
    const [isAddReview, setIsAddReview] = useState(false)


    return <section className="reviews">
        <h2>Reviews</h2>

        <button onClick={()=>setIsAddReview(true)}>Add Review</button>

        <span className="flex" >{gig.reviews.length} reviews for this Gig <ReviewRate rate={gig.rate} /></span>
        {/* <ReviewSearch /> */}
        <ul className="none-list-style">
            {gig.reviews.map(review => {
                return <li key={review.id}>
                    <ReviewPreview review={review} />
                </li>
            })}
        </ul>

        {isAddReview && <AddReview elApp={elApp} /> }

    </section>
}