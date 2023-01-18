import { useEffect } from "react"
import { useSelector } from "react-redux"
import { GigList } from "../cmps/gig-list"
import { loadGigs } from "../store/gig/gig.action"
import { store } from "../store/gig/store"

export function GigIndex() {
    const gigs = useSelector((storeState) => storeState.gigModule.gigs)
    const filterBy = useSelector((storeState) => storeState.gigModule.filterBy)
    // DONE: create gigs on local storage
    // DONE: get (query) the gigs (load gigs)
    // DONE: render list
    // DONE: render preview
    // TODO: pixel prefect gig
    // TODO: line length

    useEffect(() => {
        loadGigs(filterBy)
    }, [filterBy])


    return (
        <section className="gig-index">
            <h1>test: txt - {filterBy.txt}, label - {filterBy.label}</h1>
            <GigList gigs={gigs} />
        </section>
    )
}