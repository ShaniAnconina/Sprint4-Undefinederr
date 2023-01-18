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

    function scrollTo(element) {
        switch (element) {
            case 'reviews':
                elReview.current.scrollIntoView({ behavior: "smooth" })
                break;

            default:
                break;
        }
    }

    if (!gig) return <p></p> //TODO: loader will be here!

    return (
        <section className="gig-details flex">
            <div className="details-layout flex">
                {/* //TODO:nav in the page in the comps */}


                <section className="main">
                    {/* //TODO:navlink breadcrumds */}
                    <h1>{gig.title}</h1>

                    <div className="mini-owner">
                        <img className="owner-img" src="https://i.pinimg.com/280x280_RS/2e/45/66/2e4566fd829bcf9eb11ccdb5f252b02f.jpg" />
                        <p>Username Levi</p>
                        <p>seller level</p>
                        <p>{'⭐'.repeat(5)}(37)</p>

                    </div>
                    {/* //TODO:photos gallery (carosela) + mini photos */}
                    <div className="img-container">
                        {/* <img className="main-img" src={gig.imgUrl} /> */}
                    </div>

                    <div className="reviews-snippet">
                        <header className="flex">
                            <h2>What people loved about this seller</h2>
                            <button className='open-btn' onClick={() => scrollTo('reviews')}>See all reviews</button>
                        </header>
                        <div className="reviews-carousel">
                    //TODO: reviews-carousel!!!
                        </div>

                    </div>

                    {/* //TODO: about the gig */}
                    <div className="about">

                        <h2>About This Gig</h2>
                        <p>{gig.description}</p>
                        <p>I will design a creative and unique webpage for you. The best website design gig on Fiverr!
                            I can create any page be it homepage for a new website, inner page, designing a landing page, or redesigning an existing webpage</p>

                        <strong>What you will get:</strong>
                        <u>Basic $10 gig:</u>
                    </div>

                    {/* //TODO: about the seller (img, name, mini-des, rate, contact chat link) */}
                    <div className="owner-profile">
                        <h2>About The Seller</h2>

                        <div className="profile-info flex">
                            <img className="owner-img" src="https://i.pinimg.com/280x280_RS/2e/45/66/2e4566fd829bcf9eb11ccdb5f252b02f.jpg" />
                            <div>
                                <p>Username Levi</p>
                                <p>seller Lorem, ipsum dolor.</p>
                                <p>{'⭐'.repeat(5)}(37)</p>
                                <button>Contact Me</button>
                            </div>
                        </div>
                    </div>

                    {/* //TODO: full reviews (load more...)
                //TODO: count of reviews, 'reviews of this gig', rate(stars)
                //TODO: filter reviews by stars (count)
                //TODO: search reviews
                //TODO: sort reviews
                //TODO: filter, checkBox (reviews with imgs)
                //TODO: photo, name || country and name || stars , date || body || review for the review(helpful?yes/no) */}

                    {/* <div ref={elReview} id='reviews'>reviews!!!!!!!!!!!!!!</div> */}

                </section>

                <DetailsSidebar gig={gig} />
            </div>

        </section>
    )
}