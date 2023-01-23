import { useEffect } from "react"
import { useSelector } from "react-redux"

import { ExploreFilter } from "../cmps/explore/explore-filter"
import { GigList } from "../cmps/explore/gig-list"
import { loadGigs, saveGig } from "../store/gig/gig.action"

import { openJoinModal } from "../services/event-bus.service"
import { gigService } from "../services/gig.service"

export function GigIndex() {
    const gigs = useSelector((storeState) => storeState.gigModule.gigs)
    const filterBy = useSelector((storeState) => storeState.gigModule.filterBy)
    const loggedinUser = useSelector((storeState) => storeState.userModule.loggedinUser)

    useEffect(() => {
        loadGigs(filterBy)
    }, [filterBy])

    function onAddToWishlist(ev, gig) {
        //TODO: ASYNC 
        //TODO: MSGS
        ev.preventDefault()
        if (!loggedinUser) return openJoinModal()
        gig.isSaved = !gig.isSaved
        gigService.addToWishlist(gig._id)
        saveGig(gig)
    }

    return (
        <section className="gig-index main-layout">
            {!filterBy.txt && <h1>All</h1>}
            {filterBy.txt && <h1>{filterBy.txt}</h1>}
            <div className="main-layout">
                <ExploreFilter />
                <GigList gigs={gigs} onAddToWishlist={onAddToWishlist} />
            </div>
        </section>
    )
}