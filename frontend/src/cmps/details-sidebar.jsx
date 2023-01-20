import { Link } from "react-router-dom";
import { AiOutlineCheck, AiOutlineClockCircle } from "react-icons/ai"
import { BiRefresh } from "react-icons/bi"

export function DetailsSidebar({ gig }) {
    return <section className="sidebar-content-container">
        <article>
            <h3 className="flex space-between">
                <b className="title">Basic</b>
                <span className="price-container">{gig.price}$</span>
            </h3>
            <p className="gig-title">{gig.title} Lorem ipsum dolor sit amet.</p>

            <div className="additional-info flex">
                <p className="delivery-info flex"><AiOutlineClockCircle color="gray" size="18px" /><span>{gig.daysToMake}  Days Delivery</span></p>
                <p className="revisions-info flex"><BiRefresh color="gray" size="20px" /> <span>{gig.revisions}  Revisions</span></p>
            </div>

            <div className="features-list">
                <p className="flex"><AiOutlineCheck color="green" /><span>Lorem ipsum</span></p>
                <p className="flex"><AiOutlineCheck color="green" /><span>Lorem ipsum</span></p>
                {/* <p><AiOutlineCheck color="green" />Lorem ipsum</p>
                <p><AiOutlineCheck color="green" />Lorem ipsum</p>
                <p><AiOutlineCheck color="green" />Lorem ipsum</p> */}
            </div>
            <Link to={`/gig/payment/${gig._id}`}> <button className="Continue-btn">Continue</button></Link>
        </article>
        <div className="contact-seller">
            <button>Contact Seller</button>
        </div>
    </section>
}