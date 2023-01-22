import { ReviewRate } from "./review-rate"

export function ReviewPreview({ review }) {

    return <article className="review-preview flex ">
        <img src={review.by.imgUrl} alt="" />

        <div className="review-container flex column">
            <span>
                <p>{review.by.fullname}</p>
                <p>United States</p>
            </span>

            <span className="review-rate flex align-center" >
                <span className="flex"><ReviewRate rate={review.rate} />
                </span>
                <span>|</span>
                <span>2 weeks ago</span>
            </span>

            <p>{review.txt}</p>
        </div>

    </article>
}