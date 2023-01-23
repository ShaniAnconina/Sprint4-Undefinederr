import { useRef, useState, useEffect } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"

import { DetailsSidebar } from "../cmps/details/details-sidebar"
import { OwnerRate } from "../cmps/details/owner-rate"
import { Reviews } from "../cmps/details/reviews"
import { OwnerProfile } from "../cmps/details/owner-profile"

import { FaHeart } from "react-icons/fa"
import { SlArrowRight } from "react-icons/sl"

import { gigService } from "../services/gig.service"
import { showErrorMsg } from "../services/event-bus.service"
import { useSelector } from "react-redux"

export function GigDetails({ elApp }) {
    const navigate = useNavigate()
    const { gigId } = useParams()
    const [gig, setGig] = useState(null)
    const { filterBy } = useSelector((storeState) => storeState.gigModule)

    const elOverview = useRef(null)
    const elDescription = useRef(null)
    const elAboutTheSeller = useRef(null)
    const elReviews = useRef(null)
    const elReviewNav = useRef(null)




    // useEffect(() => {
    //     if (!elReviews.current) return
    //     const headerObserver = new IntersectionObserver(onHeaderObserved, {
    //           rootMargin: "100px 0px 0px",
    //     });

    //     headerObserver.observe(elReviews.current)

    //     function onHeaderObserved(entries) {
    //         entries.forEach((entry) => {

    //             console.log('helllooo')
    //             // elReviewNav.classList.toggle('active') = entry.isIntersecting ? 'static' : 'fixed';
    //             if (entry.isIntersecting) elReviewNav.current.classList.toggle('active')

    //         })
    //     }
    // }, [elReviews.current])

    useEffect(() => {
        loadGig()
    }, [])

    async function loadGig() {
        try {
            const gig = await gigService.get(gigId)
            setGig(gig)
            //TODO:add msg
        } catch (err) {
            showErrorMsg()
            navigate('/gig')
        }
    }

    function scrollTo(element) {
        let elSection
        switch (element) {
            case 'overview':
                elSection = elOverview
                break
            case 'description':
                elSection = elDescription
                break
            case 'aboutTheSeller':
                elSection = elAboutTheSeller
                break
            case 'reviews':
                elSection = elReviews
                break
        }
        elSection.current.scrollIntoView({ behavior: "smooth" })
    }

    if (!gig) return <p>Loading...</p>

    return (
        <section className="gig-details ">

            <div className="details-nav main-layout full">
                <div className="flex space-between">

                    <ul className="flex">
                        <li onClick={() => scrollTo('overview')}>
                            Overview
                        </li>
                        <li onClick={() => scrollTo('description')}>
                            Description
                        </li>
                        <li onClick={() => scrollTo('aboutTheSeller')}>
                            About The Seller
                        </li >
                        {gig.reviews.length && <li ref={elReviewNav} onClick={() => scrollTo('reviews')}>
                            Reviews
                        </li>}
                    </ul>

                    <div className="wish-list flex align-center">
                        <button className="add-wishlist"> <FaHeart /> </button>
                        <span className="count-wishlist">14</span>
                    </div>
                </div>

            </div>

            <section className="gig-details-container flex">

                <div ref={elOverview} className="details-layout flex">

                    <section className="main">
                        <div className="breadcrumds flex align-center" >
                            <Link to={'/'} > <button className='open-btn category' >Home Page</button> </Link>
                            <span><SlArrowRight size="10px" /></span>
                            <Link to={'/gig'}> <button className='open-btn subcategory' >All Gigs</button> </Link>
                            {filterBy.tags && <span><SlArrowRight size="10px" /></span>}
                            {filterBy.tags && <Link to={`/gig?filterBy=${filterBy.tags}`}> <button className='open-btn category'>{filterBy.tags}</button> </Link>}
                        </div>

                        <h1>{gig.title}</h1>

                        <div className="mini-owner flex">
                            <img className="owner-img" src={gig.owner.imgUrl} />
                            <div className=" flex">

                                <p className="owner-name">{gig.owner.username}</p>
                                <p className="owner-level">{gig.owner.level}</p>
                                <p className="separator">|</p>
                                <div className="owner-rate flex align-center"><OwnerRate count={gig.reviews.length} rate={gig.rate} /> </div>
                            </div>
                        </div>

                        <div className="img-container">
                            <img className="main-img" src={gig.imgUrl} />
                        </div>

                        {gig.reviews.length && <div className="reviews-snippet">
                            <header className="flex space-between">
                                <h2>What people loved about this seller</h2>
                                <button className='open-btn' onClick={() => scrollTo('reviews')}>See all reviews</button>
                            </header>
                            <div className="reviews-carousel">
                                {/* //TODO: reviews-carousel!!! */}
                            </div>

                        </div>}

                        <div ref={elDescription} className="about">

                            <h2>About This Gig</h2>
                            <p>{gig.description}</p>
                            <p>Please message me before ordering :</p>
                            <p>As an experienced, published writer I have a real eye for words and grammar.</p>
                            <p>I will proofread, grammar check and edit your cover letter so that it is personal to you and the job you are applying for. It will make you stand out from the crowd and give you the best chance of getting an interview and landing your dream role!</p>
                            <p>I am also very flexible and understand the importance of deadlines. </p>
                        </div>

                        <span ref={elAboutTheSeller}><OwnerProfile gig={gig} /></span>
                        {gig.reviews.length && <span ref={elReviews}><Reviews elApp={elApp} gig={gig} /></span>}
                    </section>

                    <DetailsSidebar gig={gig} />
                </div>

            </section>

        </section>
    )
}