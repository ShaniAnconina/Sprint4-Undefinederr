import { ReviewRate } from "./review-rate"

export function ReviewPreview({ review }) {
    return <article className="review-preview flex ">
        <img src={review.imgUrl} alt="" />
        <div className="review-container flex column">
            <span>
                <p className="fullname bold">{review.fullname}</p>
                <p className="country">{review.country}</p>
                {//TODO: add the flag for the review} 
                }
            </span>

            <span className="review-rate flex align-center" >
                <span className="flex"><ReviewRate rate={review.rate} />
                </span>
                <p className="separator">|</p>
                <span className="time">{review.reviewedAt}</span>
            </span>
            <p className="txt">{review.review}</p>
        </div>
    </article>
}