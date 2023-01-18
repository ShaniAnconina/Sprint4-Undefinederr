import React from 'react'
import { useNavigate } from "react-router-dom";
import { GigPreview } from "./gig-preview"
import { FaHeart } from "react-icons/fa"

export function GigList({ gigs }) {
    const navigate = useNavigate()

    return (
        <ul className="gig-list">
            {gigs.map(gig =>
                <li className="card" key={gig._id} onClick={navigate(`/gig/${gig._id}`)}>
                    <GigPreview gig={gig} />
                    <div className="card-footer">
                        <p className="save"><FaHeart /></p>
                        <div className="price">
                            <p>STARTING AT</p>
                            <span>₪{gig.price}</span>
                        </div>
                    </div>
                </li>)}
        </ul>
    )
}