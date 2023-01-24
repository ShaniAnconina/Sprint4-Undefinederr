import { useRef, useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"

import { Link } from "react-scroll"

import { DetailsSidebar } from "../cmps/details/details-sidebar"
import { OwnerRate } from "../cmps/details/owner-rate"
import { Reviews } from "../cmps/details/reviews"
import { OwnerProfile } from "../cmps/details/owner-profile"

import { FaHeart } from "react-icons/fa"

import { gigService } from "../services/gig.service"
import { showErrorMsg } from "../services/event-bus.service"
import { useSelector } from "react-redux"
import { Breadcrumds } from "../cmps/breadcrumds"

export function GigDetails({ elApp }) {
    const navigate = useNavigate()
    const { gigId } = useParams()
    const [gig, setGig] = useState(null)
    const { filterBy } = useSelector((storeState) => storeState.gigModule)

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

    if (!gig) return <p>Loading...</p>

    return (
        <section className="gig-details ">

            <div className="details-nav main-layout full">

                <div className="flex space-between">

                    <ul className="flex">

                        <li>
                            <Link activeClass="active" smooth spy to="overview" offset={-50} >
                                Overview
                            </Link>
                        </li >

                        <li>
                            <Link activeClass="active" smooth spy to="description" offset={-50} >
                                Description
                            </Link>
                        </li >

                        <li>
                            <Link activeClass="active" smooth spy to="aboutTheSeller" offset={-50} >
                                About The Seller

                            </Link>
                        </li >

                        {gig.reviews.length && <li>
                            <Link activeClass="active" smooth spy to="reviews" offset={-50}>
                                Reviews
                            </Link>
                        </li>}

                    </ul>

                    <div className="wish-list flex align-center">
                        <button className="add-wishlist"> <FaHeart /> </button>
                        <span className="count-wishlist">14</span>
                    </div>
                </div>

            </div>

            <section className="gig-details-container flex">

                <div className="details-layout flex">


                    <section className="main">
                        <span id="overview">

                            <Breadcrumds filterBy={filterBy} />

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
                                    <Link smooth spy to="reviews" offset={-50}>
                                        <button className='open-btn'>See all reviews</button>
                                    </Link>

                                </header>

                                <div className="reviews-carousel">
                                    {/* //TODO: reviews-carousel!!! */}
                                </div>

                            </div>}

                        </span>

                        <div id="description" className="about">

                            <h2>About This Gig</h2>
                            <p>{gig.description}</p>
                            <p>Please message me before ordering :</p>
                            <p>As an experienced, published writer I have a real eye for words and grammar.</p>
                            <p>I will proofread, grammar check and edit your cover letter so that it is personal to you and the job you are applying for. It will make you stand out from the crowd and give you the best chance of getting an interview and landing your dream role!</p>
                            <p>I am also very flexible and understand the importance of deadlines. </p>
                        </div>

                        <span id="aboutTheSeller"><OwnerProfile gig={gig} /></span>

                        {gig.reviews.length && <span id="reviews" ><Reviews elApp={elApp} gig={gig} /></span>}

                    </section>

                    <DetailsSidebar gig={gig} />
                </div>

            </section>

        </section>
    )
}