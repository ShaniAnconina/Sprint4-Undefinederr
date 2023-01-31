import { useEffect, useState } from "react"
import { Link, useNavigate, useOutletContext, useParams } from "react-router-dom"
import { showErrorMsg } from "../../services/event-bus.service"
import { gigService } from "../../services/gig.service"
import { SimpleSlider } from "../explore/img-slider"

export function Gigs() {
    const [setStatusModal, statusModal, viewType, user] = useOutletContext()
    const { userId } = useParams()
    const navigate = useNavigate()
    const [gigs, setGigs] = useState([])

    useEffect(() => {
        if (viewType !== 'seller')
            navigate(`/user/${user._id}/order`)
        loadGigs()
    }, [])

    async function loadGigs() {
        try {
            const gigs = await gigService.getGigsByUser(userId)
            setGigs(gigs)

        } catch (error) {
            navigate('/')
            showErrorMsg()
        }
    }

    return <section className="gigs">
        <h2>Gigs</h2>
        <section className="gig-list">
            {gigs.map(gig =>
                <Link to={`/gig/${gig._id}`} className="gig-preview" key={gig._id}>
                    <SimpleSlider gig={gig} />
                    <h3>{gig.title}</h3>
                    <div className="card-footer">
                        <div className="price basic-price">
                            <p>BASIC</p>
                            <span>US${gig.price}</span>
                        </div>
                        <div className="price basic-price">
                            <p>STANDARD</p>
                            <span>US${(gig.price * 1.1).toFixed(0)}</span>
                        </div>
                        <div className="price basic-price">
                            <p>PREMIUM</p>
                            <span>US${(gig.price * 1.5).toFixed(0)}</span>
                        </div>
                    </div>
                </Link>
            )}
        </section >
    </section>
}