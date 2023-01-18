import { Link } from "react-router-dom";

export function DetailsSidebar({gig}){
    return  <section className="sidebar-content-container">
        <header>
            <h3 className="flex">
                <b className="title">Package name</b>
                <div className="price-container">
                    <span>{gig.price}$</span>
                </div>
            </h3>
            <p>{gig.title}</p>
        </header>
        <article>
            <div className="additional-info flex">
                <div className="delivery-info">
                    <p>{gig.daysToMake} Days Delivery</p>
                </div>
                <div className="revisions-info">
                    <p>{gig.revisions} Revisions</p>
                </div>
            </div>

        </article>
        <Link to={`/gig/payment/${gig._id}`} ><button className="Continue-btn">Continue</button></Link>

        <button className="contact-seller">Contact Seller</button>
    </section>
}