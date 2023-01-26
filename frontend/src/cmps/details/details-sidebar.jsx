import { Link } from "react-router-dom"

import { GoClock } from "react-icons/go"
import { TbRefresh } from "react-icons/tb"
import { BsCheckLg } from "react-icons/bs"
import { useState } from "react"
import { gigService } from "../../services/gig.service"

export function DetailsSidebar({ gig }) {
    const [packageType, setPackageType] = useState('basic')
    const features = gigService.getFeatures()

    return <section className="sidebar-content-container">

        <nav className="packageTypes-btn flex">
            <button className={packageType === 'basic' ? 'active bold' : 'bold'} onClick={() => setPackageType('basic')}>Basic</button>
            <button className={packageType === 'standard' ? 'active bold' : 'bold'} onClick={() => setPackageType('standard')}>Standard</button>
            <button className={packageType === 'premium' ? 'active bold' : 'bold'} onClick={() => setPackageType('premium')}>Premium</button>
        </nav>

        <article>
            <h3 >
                {packageType === 'basic' && <span className="price-container bold">US${gig.price.toFixed(0)}</span>}
                {packageType === 'standard' && <span className="price-container bold">US${(gig.price * 1.1).toFixed(0)}</span>}
                {packageType === 'premium' && <span className="price-container bold">US${(gig.price * 1.5).toFixed(0)}</span>}
            </h3>
            <p className="gig-title">{gig.title}</p>

            <div className="additional-info flex">

                {packageType === 'basic' && <p className="delivery-info flex"><GoClock color="#62646a" size="18px" /><span>{gig.daysToMake}  Days Delivery</span></p>}
                {packageType === 'standard' && <p className="delivery-info flex"><GoClock color="#62646a" size="18px" /><span>{gig.daysToMake - 1}  Days Delivery</span></p>}
                {packageType === 'premium' && <p className="delivery-info flex"><GoClock color="#62646a" size="18px" /><span>{gig.daysToMake - 2}  Days Delivery</span></p>}

                {packageType === 'basic' && <p className="revisions-info flex"><TbRefresh color="#62646a" size="20px" /> <span>{gig.revisions}  Revisions</span></p>}
                {packageType === 'standard' && <p className="revisions-info flex"><TbRefresh color="#62646a" size="20px" /> <span>{gig.revisions + 3}  Revisions</span></p>}
                {packageType === 'premium' && <p className="revisions-info flex"><TbRefresh color="#62646a" size="20px" /> <span>Unlimited Revisions</span></p>}
            </div>

            <div className="features-list">

                {features.map(feature => <p key={feature.id} className="feature flex align-center">
                    {packageType === 'basic' && <BsCheckLg color={Math.random() > 0.7 ? "#1dbf73" : "#95979d"} />}
                    {packageType === 'standard' && <BsCheckLg color={Math.random() > 0.3 ? "#1dbf73" : "#95979d"} />}
                    {packageType === 'premium' && <BsCheckLg color="#1dbf73" />}
                    <span>{feature.txt}</span>
                </p>)}


            </div>
            {packageType === 'basic' &&<Link to={`/gig/payment/${gig._id}?packageType=basic`}> <button className="Continue-btn">Continue ({`US$${gig.price.toFixed(0)}`})</button></Link>}
            {packageType === 'standard' &&<Link to={`/gig/payment/${gig._id}?packageType=standard`}> <button className="Continue-btn">Continue ({`US$${(gig.price * 1.1).toFixed(0)}`})</button></Link>}
            {packageType === 'premium' &&<Link to={`/gig/payment/${gig._id}?packageType=premium`}> <button className="Continue-btn">Continue ({`US$${(gig.price * 1.5).toFixed(0)}`})</button></Link>}
        </article>
        <div className="contact-seller">
            <button>Contact Seller</button>
        </div>
    </section>
}