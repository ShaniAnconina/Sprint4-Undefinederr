import { GigPreview } from "./gig-preview";

export function GigList({ gigs }) {


    return (
        <ul className="gig-list">
            {gigs.map(gig =>
                <li className="toy-preview" key={gig._id}>
                    <GigPreview gig={gig} />
                    <div className="card-bottom">
                        <p>heart</p>
                        <div className="price">
                            <p>STARTING AT</p>
                            <span>₪{gig.price}</span>
                        </div>
                    </div>
                </li>)}
        </ul>
    )
}
