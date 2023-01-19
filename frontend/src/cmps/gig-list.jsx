import React from 'react'
import { Link } from "react-router-dom";
import { GigPreview } from "./gig-preview"
import { FaHeart } from "react-icons/fa"
import { gigService } from '../services/gig.service';

export function GigList({ gigs, onAddToWishlist }) {

    return (
        <ul className="gig-list">
            {gigs.map(gig =>
                <li className="card" key={gig._id}>
                    <Link to={`/gig/${gig._id}`}>
                        <GigPreview gig={gig} onAddToWishlist={onAddToWishlist} />
                    </Link>
                </li>)}
        </ul >
    )

    // return (
    //     <ul className="gig-list">
    //         {gigs.map(gig =>
    //             <li className="card" key={gig._id}>
    //                 <Link to={`/gig/${gig._id}`}>
    //                     <GigPreview gig={gig} />
    //                     <div className="card-footer">
    //                         <div className={gig.isSaved ? 'whishlist saved' : 'whishlist'} onClick={(ev) => onAddToWishlist(ev, gig)}><FaHeart /></div>
    //                         <div className="price">
    //                             <p>STARTING AT</p>
    //                             <span>₪{gig.price}</span>
    //                         </div>
    //                     </div>
    //                 </Link>
    //             </li>)}
    //     </ul >
    // )
}