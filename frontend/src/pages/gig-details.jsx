import { useParams } from "react-router-dom"
import { useRef } from "react"
import { useEffect } from "react"

export function GigDetails() {
    const { gigId } = useParams()
    const elReview = useRef(null)

    useEffect(() => {
        loadGig()
    }, [])
    async function loadGig(){
        
    }

    function goToReview() {
        const revewPlace = elReview.current.scrollIntoView({ behavior: "smooth" })
        // revewPlace.scrollIntoView({ behavior: "smooth" })
    }

    return (
        <section className="gig-details">

            //TODO:stiky buying&&contect(chet)
            <section className="pay-chat-container">
                <article className="pay"></article>
                <button className="contact-seller">Contact Seller</button>
            </section>

            //TODO:navlink breadcrumds
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing.</h1>
        //TODO:mini user: photo, name, miniInfo(level..) , rate(stars+ reviewsCount) , langs...
            <div className="mini-user"> Lorem ipsum dolor sit amet.</div>
        //TODO:photos gallery (carosela) + mini photos

            //TODO: carosela mini-review (drag-drop support)
            <br />
            <h2>What people loved about this seller</h2>
            <button className='open-btn' onClick={goToReview}>See all reviews</button>

        //TODO: about the gig
            <h2>About This Gig</h2>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem.</p>

            <strong>What you will get:</strong>

            //TODO: about the seller (img, name, mini-des, rate, contact chat link)
            //TODO: about the seller div border()
            //TODO: packeges 
            //TODO: FAQ
            //TODO: full reviews (load more...)
            //TODO: count of reviews, 'reviews of this gig', rate(stars)
            //TODO: filter reviews by stars (count)
            //TODO: search reviews
            //TODO: sort reviews
            //TODO: filter, checkBox (reviews with imgs)
            //TODO: photo, name || country and name || stars , date || body || review for the review(helpful?yes/no)

            <article ref={elReview} id='reviews'>reviews!!!!!!!!!!!!!!</article>

        </section>
    )
}