import { useEffect } from "react";
import { GigList } from "../cmps/gig-list";

export function GigIndex() {

    // TODO: create gigs on local storage
    // TODO: get (query) the gigs (load gigs)
    // TODO: render list
    // TODO: render preview
    // TODO: pixel prefect gig
    // TODO: line length

    // useEffect(()=> {
    //     loadGigs()
    // }, [])



    return (
        <section className="gig-index">
            <h1>hello from gig index yovel !</h1>
            <GigList />
        </section>
    )
}