import { useNavigate, useParams } from "react-router-dom"
import { useRef, useState } from "react"
import { useEffect } from "react"
import { gigService } from "../services/gig.service"
import { showErrorMsg } from "../services/event-bus.service"
import { DetailsSidebar } from "../cmps/details-sidebar"
import { AiFillStar } from "react-icons/ai"

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
        switch (element) {
            case 'overview':
                elOverview.current.scrollIntoView({ behavior: "smooth" })
                break;
            case 'description':
                elDescription.current.scrollIntoView({ behavior: "smooth" })
                break;
            case 'aboutTheSeller':
                elAboutTheSeller.current.scrollIntoView({ behavior: "smooth" })
                break;
                case 'reviews':
                    elReviews.current.scrollIntoView({ behavior: "smooth" })
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

                    <div ref={elOverview} className="mini-owner flex">
                        <img className="owner-img" src="https://i.pinimg.com/280x280_RS/2e/45/66/2e4566fd829bcf9eb11ccdb5f252b02f.jpg" />
                        <p className="owner-name">{gig.owner.fullname}</p>
                        <p className="owner-level">{gig.owner.level}</p>
                        {/* <p className="owner-rate">{<AiFillStar size="15px"/>.repeat(gig.owner.rate)gig.owner.rate}(37)</p> */}
                        <p className="owner-rate"><AiFillStar size="15px" /> {gig.owner.rate} (37)</p>

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
                                <p className="owner-rate"><AiFillStar size="15px" /> {gig.owner.rate}(37)</p>
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