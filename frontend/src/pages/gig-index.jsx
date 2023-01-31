import { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { useLocation } from "react-router-dom"

import { ExploreFilter } from "../cmps/explore/explore-filter"
import { GigList } from "../cmps/explore/gig-list"
import { loadGigs, saveGig } from "../store/gig/gig.action"
import { Loader } from "../cmps/home/loader"
import { setfilter } from "../store/gig/gig.action.js"


import { openJoinModal, showErrorMsg, showSuccessMsg } from "../services/event-bus.service"
import { gigService } from "../services/gig.service"

export function GigIndex() {
    let gigs = useSelector((storeState) => storeState.gigModule.gigs)
    const filterBy = useSelector((storeState) => storeState.gigModule.filterBy)
    const loggedinUser = useSelector((storeState) => storeState.userModule.loggedinUser)
    const location = useLocation()
    const [isLoaderOn, setIsLoaderOn] = useState(true)
    const [searchParams, setSearchParams] = useState(new URLSearchParams(location.search))

    useEffect(() => {
        setIsLoaderOn(true)
        // console.log("reading params: ", searchParams)
        const tags = searchParams.get('tags')
        console.log("search params tags: ", tags)
        const txt = searchParams.get('txt')
        console.log("search params txt: ", txt)
        const defaultFilter = gigService.getDefaultFilter()
        // if(tags) {console.log("showing gigs with QP tags: ",tags);loadGigs({...defaultFilter,tags:[tags]})}
        // else if (txt) {console.log("showing gigs with QP txt: ",txt);loadGigs({...defaultFilter,txt:txt})}
        // else {console.log("filtering from store: ", filterBy);loadGigs(filterBy)}
        loadGigs(filterBy)
        // return setfilter(gigService.getDefaultFilter())
    }, [filterBy, searchParams]
    )


    useEffect(() => {
        if (gigs.length > 0) {
            setIsLoaderOn(false)
        }
    }, [gigs])



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
            {(filterBy.tags.length === 0 && !filterBy.txt) && <h1>All</h1>}
            {(filterBy.txt && filterBy.tags.length === 0) && <h1>Search results for: {filterBy.txt}</h1>}
            {(filterBy.tags.length > 0 && !filterBy.txt) && <h1>{filterBy.tags[0].replace('and', '&')}</h1>}
            <ExploreFilter gigs={gigs} filterBy={filterBy} />
            {isLoaderOn && <Loader />}
            <GigList gigs={gigs} onAddToWishlist={onAddToWishlist} />
        </section>
    )
}