import { Link } from "react-router-dom";
import { AiOutlineCheck , AiOutlineClockCircle } from "react-icons/ai"
import { BiRefresh } from "react-icons/bi"

export function DetailsSidebar({ gig }) {
    return <section className="sidebar-content-container">
        <article>
            <h3 className="flex space-between">
                <b className="title">Basic</b>
                <span className="price-container">{gig.price}$</span>
            </h3>
            <p className="gig-title">{gig.title}</p>
            <div className="additional-info flex">
                <p className="delivery-info"><AiOutlineClockCircle color="gray" />  {gig.daysToMake}  Days Delivery </p>
                <p className="revisions-info"><BiRefresh color="gray" />  {gig.revisions}  Revisions</p>
            </div>
            <div className="features-list">
                <p><AiOutlineCheck color="green" />Lorem ipsum</p>
                <p><AiOutlineCheck color="green" />Lorem ipsum</p>
                <p><AiOutlineCheck color="green" />Lorem ipsum</p>
                <p><AiOutlineCheck color="green" />Lorem ipsum</p>
                <p><AiOutlineCheck color="green" />Lorem ipsum</p>
            </div>
            <button className="Continue-btn"><Link to={`/gig/payment/${gig._id}`} >Continue</Link></button>
        </article>
        <div className="contact-seller">
            <button>Contact Seller</button>
        </div>
    </section>
}