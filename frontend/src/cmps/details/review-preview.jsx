import { ReviewRate } from "./review-rate"

export function ReviewPreview({ review }) {

    return <article className="review-preview flex ">
        <img src={review.by.imgUrl} alt="" />

        <div className="review-container flex column">
            <span>
                <p className="fullname bold">{review.by.fullname}</p>
                <p className="country">United States</p>
            </span>

            <span className="review-rate flex align-center" >
                <span className="flex"><ReviewRate rate={review.rate} />
                </span>
                <p className="separator">|</p>
                <span className="time">2 weeks ago</span>
            </span>

            <p className="txt">{review.txt}</p>
        </div>

    </article>
}