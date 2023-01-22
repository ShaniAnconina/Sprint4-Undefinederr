import React from 'react'

import { GigPreview } from "./gig-preview"

export function GigList({ gigs, onAddToWishlist }) {
    return (
        <section className="gig-list">
            {gigs.map(gig =>
                <GigPreview key={gig._id} gig={gig} onAddToWishlist={onAddToWishlist} />
            )}
        </section >
    )
}