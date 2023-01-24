import { Link } from "react-router-dom"

import { GoClock } from "react-icons/go"
import { TbRefresh } from "react-icons/tb"
import { BsCheckLg } from "react-icons/bs"
import { useState } from "react"

export function DetailsSidebar({ gig }) {
    const [Package, setPackage] = useState('basic')

    return <section className="sidebar-content-container">

        <nav className="packages-btn flex">
            <button className={Package === 'basic' ? 'active bold' : 'bold'} onClick={() => setPackage('basic')}>Basic</button>
            <button className={Package === 'standard' ? 'active bold' : 'bold'} onClick={() => setPackage('standard')}>Standard</button>
            <button className={Package === 'premium' ? 'active bold' : 'bold'} onClick={() => setPackage('premium')}>Premium</button>
        </nav>

        <article>
            <h3 >
                {Package === 'basic' && <span className="price-container bold">US${gig.price.toFixed(0)}</span>}
                {Package === 'standard' && <span className="price-container bold">US${(gig.price * 1.1).toFixed(0)}</span>}
                {Package === 'premium' && <span className="price-container bold">US${(gig.price * 1.5).toFixed(0)}</span>}
            </h3>
            <p className="gig-title">{gig.title}</p>

            <div className="additional-info flex">

                {Package === 'basic' && <p className="delivery-info flex"><GoClock color="#62646a" size="18px" /><span>{gig.daysToMake}  Days Delivery</span></p>}
                {Package === 'standard' && <p className="delivery-info flex"><GoClock color="#62646a" size="18px" /><span>{gig.daysToMake - 1}  Days Delivery</span></p>}
                {Package === 'premium' && <p className="delivery-info flex"><GoClock color="#62646a" size="18px" /><span>{gig.daysToMake - 2}  Days Delivery</span></p>}

                {Package === 'basic' && <p className="revisions-info flex"><TbRefresh color="#62646a" size="20px" /> <span>{gig.revisions}  Revisions</span></p>}
                {Package === 'standard' && <p className="revisions-info flex"><TbRefresh color="#62646a" size="20px" /> <span>{gig.revisions + 3}  Revisions</span></p>}
                {Package === 'premium' && <p className="revisions-info flex"><TbRefresh color="#62646a" size="20px" /> <span>Unlimited Revisions</span></p>}
            </div>

            <div className="features-list">

                    //TODO: after the demo data
                {/* {gig.features.map(feature => <p key={feature.id} className="feature flex align-center">
                    {Package === 'basic' && <BsCheckLg color={Math.random() > 0.7 ? "#1dbf73" : "#95979d"} />}
                    {Package === 'standard' && <BsCheckLg color={Math.random() > 0.3 ? "#1dbf73" : "#95979d"} />}
                    {Package === 'premium' && <BsCheckLg color="#1dbf73" />}
                    <span>{feature.txt}</span>
                </p>)} */}
                                        //delete after the demo data
                <p className="feature flex align-center"><BsCheckLg color="#1dbf73" /><span>Lorem ipsum</span></p>

            </div>
            {Package === 'basic' &&<Link to={`/gig/payment/${gig._id}?Package=basic`}> <button className="Continue-btn">Continue ({`US$${gig.price.toFixed(0)}`})</button></Link>}
            {Package === 'standard' &&<Link to={`/gig/payment/${gig._id}?Package=standard`}> <button className="Continue-btn">Continue ({`US$${(gig.price * 1.1).toFixed(0)}`})</button></Link>}
            {Package === 'premium' &&<Link to={`/gig/payment/${gig._id}?Package=premium`}> <button className="Continue-btn">Continue ({`US$${(gig.price * 1.5).toFixed(0)}`})</button></Link>}
        </article>
        <div className="contact-seller">
            <button>Contact Seller</button>
        </div>
    </section>
}