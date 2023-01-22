import { useEffect } from "react"
import { useSelector } from "react-redux"
import { ExploreFilter } from "../cmps/explore/explore-filter"
import { GigList } from "../cmps/explore/gig-list"
import { openJoinModal } from "../services/event-bus.service"
import { gigService } from "../services/gig.service" 
import { loadGigs, saveGig } from "../store/gig/gig.action"

export function GigIndex() {
    const gigs = useSelector((storeState) => storeState.gigModule.gigs)
    const filterBy = useSelector((storeState) => storeState.gigModule.filterBy)
    const loggedinUser = useSelector((storeState) => storeState.userModule.loggedinUser)


    useEffect(() => {
        loadGigs(filterBy)
    }, [filterBy])

    function onAddToWishlist(ev, gig) {
        ev.preventDefault()
        if (!loggedinUser) return openJoinModal()
        gig.isSaved = !gig.isSaved
        gigService.addToWishlist(gig._id)
        saveGig(gig)
    }

    return (
        <section className="gig-index">
            {filterBy.txt && <h1>Showing results for: "{filterBy.txt}"</h1>}
            <div className="main-layout">
                <ExploreFilter />
                <GigList gigs={gigs} onAddToWishlist={onAddToWishlist} />
            </div>
        </section>
    )
}