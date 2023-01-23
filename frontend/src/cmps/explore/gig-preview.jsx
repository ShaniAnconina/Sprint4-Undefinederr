import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom"

import { FaHeart } from "react-icons/fa"
import { AiFillStar } from "react-icons/ai"

export function GigPreview({ gig, onAddToWishlist }) {
    const loggedinUser = useSelector((storeState) => storeState.userModule.loggedinUser)

    return (
        <Link to={`/gig/${gig._id}`} className="gig-preview">
            <img className="gig-img" src={gig.imgUrl} />
            <div className="user">
                <img className="user-img" src={gig.owner.imgUrl} />
                <div className="user-info">
                    <p className="username">{gig.owner.username}</p>
                    <p className="level">{gig.owner.level}</p>
                </div>
            </div>
            <h3>{gig.title}</h3>
            <span className="rate"><AiFillStar size="15px" /><p>{gig.rate}<span className="rates-count">({gig.reviews.length})</span></p></span>
            <div className="card-footer">
                <div className={(gig.isSaved && gig.likedByUsers.some(userId => userId === loggedinUser._id)) ? 'whishlist saved' : 'whishlist'} onClick={(ev) => onAddToWishlist(ev, gig)}><FaHeart /></div>
                <div className="price">
                    <p>STARTING AT</p>
                    <span>US${gig.price}</span>
                </div>
            </div>
        </Link>
    )
}

