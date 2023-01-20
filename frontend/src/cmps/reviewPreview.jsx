import { ReviewRate } from "./review-rate";

export function ReviewPreview({ review }) {
    return <article className="review-preview flex ">
        <img src={review.by.imgUrl} alt="" />

        <div className="review-container flex column">
            
            <p>{review.by.fullname}</p>
            <p>United States</p>

            <p className="review-rate flex" ><ReviewRate rate={review.rate} /> <span>|</span> <span>2 weeks ago</span></p>
            <p>{review.txt}</p>
        </div>

    </article>
}