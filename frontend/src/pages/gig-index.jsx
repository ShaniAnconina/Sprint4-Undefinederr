import { useEffect } from "react"
import { useSelector } from "react-redux"
import { ExploreFilter } from "../cmps/explore-filter"
import { GigList } from "../cmps/gig-list"
import { loadGigs, saveGig } from "../store/gig/gig.action"

export function GigIndex() {
    const gigs = useSelector((storeState) => storeState.gigModule.gigs)
    const filterBy = useSelector((storeState) => storeState.gigModule.filterBy)

    // TODO: create cards slider
    // TODO: sort by popularity

    useEffect(() => {
        loadGigs(filterBy)
    }, [filterBy])

    function onAddToWishlist(ev, gig) {
        ev.preventDefault()
        gig.isSaved = !gig.isSaved
        // gigService.addToWishlist(gig._id)
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