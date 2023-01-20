import { ReviewRate } from "./review-rate";
import { ReviewPreview } from "./reviewPreview";

export function Reviews({ gig }) {



    return <section className="reviews">
        <h2>Reviews</h2>
        <span className="flex" >{gig.reviews.length} reviews for this Gig <ReviewRate rate={4} /></span>
        {/* <ReviewSearch /> */}
        <ul className="none-list-style">
            {gig.reviews.map(review => {
                return <li key={review.id}>
                    <ReviewPreview review={review} />
                </li>
            })}
        </ul>

    </section>
}