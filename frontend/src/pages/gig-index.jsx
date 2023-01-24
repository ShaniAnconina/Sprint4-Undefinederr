import { useEffect } from "react"
import { useSelector } from "react-redux"

import { ExploreFilter } from "../cmps/explore/explore-filter"
import { GigList } from "../cmps/explore/gig-list"
import { loadGigs, saveGig } from "../store/gig/gig.action"

import { openJoinModal, showErrorMsg, showSuccessMsg } from "../services/event-bus.service"
import { gigService } from "../services/gig.service"

export function GigIndex({ elApp }) {
    const gigs = useSelector((storeState) => storeState.gigModule.gigs)
    const filterBy = useSelector((storeState) => storeState.gigModule.filterBy)
    const loggedinUser = useSelector((storeState) => storeState.userModule.loggedinUser)

    useEffect(() => {
        loadGigs(filterBy)
    }, [filterBy])

    async function onAddToWishlist(ev, gig) {
        try {
            ev.preventDefault()
            if (!loggedinUser) return openJoinModal()
            gig.isSaved = !gig.isSaved
            gigService.addToWishlist(gig._id)
            await saveGig(gig)
            showSuccessMsg('The item saved to your wishlist')
        } catch (err) {
            showErrorMsg()
        }
    }



    return (
        <section className="gig-index main-layout">
            {/* {!filterBy.tags && <h1>All</h1>} */}
            {filterBy.tags.length === 0 && <h1>All</h1>}
            {filterBy.tags.length > 0 && <h1>{filterBy.tags[0].replace('and', '&')}</h1>}
            <ExploreFilter gigs={gigs} filterBy={filterBy} elApp={elApp} />
            <GigList gigs={gigs} onAddToWishlist={onAddToWishlist} />
        </section>
    )
}