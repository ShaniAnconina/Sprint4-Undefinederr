import { Link, useNavigate, useParams } from "react-router-dom"
import { useRef, useState } from "react"
import { useEffect } from "react"
import { gigService } from "../services/gig.service"
import { showErrorMsg } from "../services/event-bus.service"
import { DetailsSidebar } from "../cmps/details-sidebar"

export function GigDetails() {
    const navigate = useNavigate()
    const [gig, setGig] = useState(null)
    const { gigId } = useParams()
    const elReview = useRef(null)

    useEffect(() => {
        loadGig()
    }, [])

    async function loadGig() {
        try {
            const gig = await gigService.get(gigId)
            setGig(gig)
        } catch (err) {
            showErrorMsg('eror msg from details, need to thing about txt...')
            navigate('/gig')
        }
    }

    function goToReview() {
        elReview.current.scrollIntoView({ behavior: "smooth" })
    }

    if (!gig) return <p></p> //TODO: loader will be here!

    return (
        <section className="gig-details flex">

            <section className="main">

            //TODO:navlink breadcrumds
            
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing.</h1>
        //TODO:mini user: photo, name, miniInfo(level..) , rate(stars+ reviewsCount) , langs...
                <div className="mini-user"> Lorem ipsum dolor sit amet.</div>
        //TODO:photos gallery (carosela) + mini photos

                //TODO: carosela mini-review (drag-drop support)
                <br />
                <h2>What people loved about this seller</h2>

                <button className='open-btn' onClick={goToReview}>See all reviews</button>
                {/* <a href="#reviews">See all reviews</a> */}


        //TODO: about the gig
                <h2>About This Gig</h2>
                <p>{gig.description}</p>

                <p>I will design a creative and unique webpage for you. The best website design gig on Fiverr!
                    I can create any page be it homepage for a new website, inner page, designing a landing page, or redesigning an existing webpage</p>

                <strong>What you will get:</strong>

                <u>Basic $10 gig:</u>


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

                <div ref={elReview} id='reviews'>reviews!!!!!!!!!!!!!!</div>

            </section>

            <DetailsSidebar gig={gig} />
        </section>
    )
}