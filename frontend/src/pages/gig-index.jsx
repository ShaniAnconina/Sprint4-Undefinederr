import { useEffect } from "react"
import { useSelector } from "react-redux"
import { GigList } from "../cmps/gig-list"
import { loadGigs } from "../store/gig/gig.action"

export function GigIndex() {
    const gigs = useSelector((storeState) => storeState.gigModule.gigs)

    // DONE: create gigs on local storage
    // DONE: get (query) the gigs (load gigs)
    // DONE: render list
    // DONE: render preview
    // TODO: pixel prefect gig
    // TODO: line length

    useEffect(()=> {
        loadGigs()
    }, [])


    return (
        <section className="gig-index">
            <GigList gigs={gigs} />
        </section>
    )
}