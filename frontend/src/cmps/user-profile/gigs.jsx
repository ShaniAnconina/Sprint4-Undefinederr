import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { showErrorMsg } from "../../services/event-bus.service"
import { gigService } from "../../services/gig.service"
import { SimpleSlider } from "../explore/img-slider"

export function Gigs() {
    const { userId } = useParams()
    const navigate = useNavigate()
    const [gigs, setGigs] = useState([])

    useEffect(() => {
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
        <section className="gig-list">
            {gigs.map(gig =>
                <Link to={`/gig/${gig._id}`} className="gig-preview">
                    <SimpleSlider gig={gig} />
                    <div className="user">
                        <img className="user-img" src={gig.owner.imgUrl} />
                        <div className="user-info">
                            <p className="username">{gig.owner.fullname}</p>
                            <p className={gig.owner.level === 'Top Rated Seller' ? 'level top' : 'level'}>{gig.owner.level}</p>
                        </div>
                    </div>
                    <h3>{gig.title}</h3>
                    <div className="card-footer">
                        <div className="price">
                            <p>STARTING AT</p>
                            <span>US${gig.price}</span>
                        </div>
                    </div>
                </Link>
            )}
        </section >
    </section>
}