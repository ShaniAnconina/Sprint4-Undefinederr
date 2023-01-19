import React from 'react'
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa"
import { AiFillStar } from "react-icons/ai"

export function GigPreview({ gig, onAddToWishlist }) {

    return (
        <Link to={`/gig/${gig._id}`} className="gig-preview">
            <img className="gig-img" src={gig.imgUrl} />
            <div className="user">
                <img className="user-img" src="https://i.pinimg.com/280x280_RS/2e/45/66/2e4566fd829bcf9eb11ccdb5f252b02f.jpg" />
                <div className="user-info">
                    <p className="username">username</p>
                    <p className="level">seller level</p>
                </div>
            </div>
            <h3>{gig.title}</h3>
            <span className="rate"><AiFillStar size="15px" /> {gig.owner.rate}<span className="rates-count">(5)</span></span>
            <div className="card-footer">
                <div className={gig.isSaved ? 'whishlist saved' : 'whishlist'} onClick={(ev) => onAddToWishlist(ev, gig)}><FaHeart /></div>
                <div className="price">
                    <p>STARTING AT</p>
                    <span>₪{gig.price}</span>
                </div>
            </div>
        </Link>
    )
}

