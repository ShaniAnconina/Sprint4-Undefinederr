import React from 'react'
import { Link } from "react-router-dom";
import { GigPreview } from "./gig-preview"
import { FaHeart } from "react-icons/fa"

export function GigList({ gigs }) {

    return (
        <ul className="gig-list">
            {gigs.map(gig =>
                <li className="card" key={gig._id}>
                    <Link to={`/gig/${gig._id}`}>
                        <GigPreview gig={gig} />
                        <div className="card-footer">
                            <p className="save"><FaHeart /></p>
                            <div className="price">
                                <p>STARTING AT</p>
                                <span>₪{gig.price}</span>
                            </div>
                        </div>
                    </Link>
                </li>)}
        </ul >
    )
}