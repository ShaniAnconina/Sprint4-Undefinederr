
import { SlArrowRight } from "react-icons/sl"
import { useNavigate, useParams } from "react-router-dom"
import { useRef, useState } from "react"
import { useEffect } from "react"
import { gigService } from "../services/gig.service"
import { showErrorMsg } from "../services/event-bus.service"
import { DetailsSidebar } from "../cmps/details-sidebar"
import { OwnerRate } from "../cmps/owner-rate"
import { Reviews } from "../cmps/reviews"

export function GigDetails() {
    const navigate = useNavigate()
    const { gigId } = useParams()
    const [gig, setGig] = useState(null)

    const elOverview = useRef(null)
    const elDescription = useRef(null)
    const elAboutTheSeller = useRef(null)
    const elReviews = useRef(null)


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

    if (!gig) return <p>Loading...</p> //TODO: loader will be here!

    return (
        <section className="gig-details ">
            <div className="details-nav main-layout full">
                <ul className="flex">

                    <li onClick={() => scrollTo('overview')}>
                        Overview
                    </li>
                    <li onClick={() => scrollTo('description')}>
                        description
                    </li>
                    <li onClick={() => scrollTo('aboutTheSeller')}>
                        aboutTheSeller
                    </li>
                    <li onClick={() => scrollTo('reviews')}>
                        reviews
                    </li>
                </ul>
            </div>

            <section className="gig-details-container flex">

                <div className="details-layout flex">

                    <section className="main">
                        <div className="breadcrumds flex align-center" >
                            <button className='open-btn category' >Category</button>
                            <SlArrowRight size="10px" />
                            <button className='open-btn subcategory' >Subcategory</button>
                        </div>
                        <h1>{gig.title}</h1>

                        <div ref={elOverview} className="mini-owner flex">
                            <img className="owner-img" src="https://i.pinimg.com/280x280_RS/2e/45/66/2e4566fd829bcf9eb11ccdb5f252b02f.jpg" />
                            <p className="owner-name">{gig.owner.fullname}</p>
                            <p className="owner-level">{gig.owner.level}</p>
                            <div className="owner-rate flex"> <OwnerRate rate={gig.owner.rate} /> </div>
                        </div>
                        {/* //TODO:photos gallery (carosela) + mini photos */}
                        <div className="img-container">
                            <img className="main-img" src={gig.imgUrl} />
                        </div>

                        <div className="reviews-snippet">
                            <header className="flex space-between">
                                <h2>What people loved about this seller</h2>
                                <button className='open-btn' onClick={() => scrollTo('reviews')}>See all reviews</button>
                            </header>
                            <div className="reviews-carousel">
                                {/* //TODO: reviews-carousel!!! */}
                            </div>

                        </div>

                        {/* //TODO: about the gig */}
                        <div ref={elDescription} className="about">

                            <h2>About This Gig</h2>
                            <p>{gig.description}</p>
                            <p>Please message me before ordering :)</p>
                            <p>As an experienced, published writer I have a real eye for words and grammar.</p>
                            <p>I will proofread, grammar check and edit your cover letter so that it is personal to you and the job you are applying for. It will make you stand out from the crowd and give you the best chance of getting an interview and landing your dream role!</p>
                            <p>I am also very flexible and understand the importance of deadlines. </p>
                        </div>

                        {/* //TODO: about the seller (img, name, mini-des, rate, contact chat link) */}
                        <div ref={elAboutTheSeller} className="owner-profile">
                            <h2>About The Seller</h2>

                            <div className="profile-info flex">

                                <img className="owner-img" src="https://i.pinimg.com/280x280_RS/2e/45/66/2e4566fd829bcf9eb11ccdb5f252b02f.jpg" />

                                <div className="flex column ">
                                    <p className="owner-name">{gig.owner.fullname}</p>
                                    <div className="owner-rate flex"> <OwnerRate rate={gig.owner.rate} /> </div>
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

                        <span ref={elReviews}> <Reviews gig={gig} /> </span>

                    </section>

                    <DetailsSidebar gig={gig} />
                </div>

            </section>
        </section>
    )
}