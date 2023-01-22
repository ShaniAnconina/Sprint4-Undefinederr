import { Link } from "react-router-dom"

import { GoClock } from "react-icons/go"
import { TbRefresh } from "react-icons/tb"
import { BsCheckLg } from "react-icons/bs"

export function DetailsSidebar({ gig }) {
    return <section className="sidebar-content-container">
        <article>
            <h3 className="flex space-between">
                <b className="title">Basic</b>
                <span className="price-container">{gig.price}$</span>
            </h3>
            <p className="gig-title">{gig.title} Lorem ipsum dolor sit amet.</p>

            <div className="additional-info flex">
                <p className="delivery-info flex"><GoClock color="#62646a" size="18px" /><span>{gig.daysToMake}  Days Delivery</span></p>
                <p className="revisions-info flex"><TbRefresh color="#62646a" size="20px" /> <span>{gig.revisions}  Revisions</span></p>
            </div>

            <div className="features-list">
                <p className="feature flex align-center"><BsCheckLg color="#1dbf73" /><span>Lorem ipsum</span></p>
                <p className="feature flex align-center"><BsCheckLg color="#1dbf73" /><span>Lorem ipsum</span></p>

            </div>
            <Link to={`/gig/payment/${gig._id}`}> <button className="Continue-btn">Continue ({`${gig.price}$`})</button></Link>
        </article>
        <div className="contact-seller">
            <button>Contact Seller</button>
        </div>
    </section>
}