import { useParams } from "react-router-dom"

export function GigDetails() {
    const { gigId } = useParams()

    return (
        <section className="gig-details">
            //TODO:navlink breadcrumds
            //TODO:mini user: photo, name, miniInfo(level..) , rate(stars+ reviewsCount) , langs...
            //TODO:photos gallery (carosela) + mini photos
            //TODO: carosela mini-review (drag-drop support)
            //TODO: about the gig
            //TODO: about the seller (img, name, mini-des, rate, contact chat link)
            //TODO: about the seller div border()

        </section>
    )
}