import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"

import { CreditCards } from "../cmps/details/credit-cards"

import { openJoinModal, showErrorMsg, showSuccessMsg } from "../services/event-bus.service"
import { gigService } from "../services/gig.service"
import { orderService } from "../services/order.service"

import { BsCheckLg } from "react-icons/bs"

export function GigPayment() {
    const navigate = useNavigate()
    const { gigId } = useParams()
    const [gig, setGig] = useState(null)
    const [order, setOrder] = useState(orderService.getEmptyOrder())
    const { loggedinUser } = useSelector((storeState) => storeState.userModule)

    useEffect(() => {
        loadGig()
    }, [])

    async function loadGig() {
        try {
            const gigToOrder = await gigService.get(gigId)
            setGig(gigToOrder)
            //TODO: MsG
        } catch (error) {
            console.log(error)
            showErrorMsg()
            navigate(-1)
        }
    }

    function handelChange() { }

    async function onConfirm() {
        try {
            if (!loggedinUser) return openJoinModal()
            const buyer = { _id: loggedinUser._id, fullname: loggedinUser.fullname, username: loggedinUser.username }
            const seller = { fullname: gig.owner.fullname, _id: gig.owner._id }
            const gigToSave = { _id: gigId, title: gig.title, price: gig.price }
            order.buyer = buyer
            order.seller = seller
            order.gig = gigToSave
            const newOrder = await orderService.save(order)
            console.log('newOrder', newOrder)
            showSuccessMsg('Your order send')
            //TODO check if we need to add to the buyer some data??!?!@?#
            navigate(-1) //Maby to another path
        } catch (error) {
            showErrorMsg()
        }
    }

    if (!gig) return <p>loading...</p>
    return <section className="gig-payment-screen  main-layout">

        <div className="gig-payment-container flex">

            <section className="payment-details">
                <h6>Payment Options</h6>
                <p className="credit-cards-container flex">Credit & Debit Cards <CreditCards /></p>

                <article className="form-container bold">

                    <div className="card-details flex">

                        <div className="card-number-container flex column">
                            <label htmlFor="card-number">Card Number</label>
                            <input type="text"
                                id="card-number"
                                className="card-number"
                                value="5555 4444 3333 2222"
                                onChange={handelChange}
                            />
                        </div>

                        <div className="card-expiration-container flex column">
                            <label htmlFor="card-expiration">Expiration Date</label>
                            <input type="txt"
                                id="card-expiration"
                                className="card-expiration"
                                value="11/12"
                                onChange={handelChange}
                            />
                        </div>

                        <div className="card-cvv-container flex column">
                            <label htmlFor="card-cvv">Security Code</label>
                            <input type="number"
                                id="card-cvv"
                                className="card-cvv"
                                value="123"
                                onChange={handelChange}
                            />
                        </div>

                    </div>

                    <div className="buyer-details flex">

                        <div className="first-name-container flex column">
                            <label htmlFor="first-name">First Name</label>
                            <input type="text"
                                id="first-name"
                                className="first-name"
                                value="Puki"
                                onChange={handelChange}
                            />
                        </div>
                        <div className="last-name-container flex column">
                            <label htmlFor="last-name">Last Name</label>
                            <input type="text"
                                id="last-name"
                                className="last-name"
                                value="Pukauv"
                                onChange={handelChange}
                            />
                        </div>
                    </div>
                </article>
            </section>

            <aside className="purchase-details">

                <section className="order">

                    <div className="header flex bold">
                        <img src={gig.imgUrl} />
                        <h3>{gig.title}</h3>
                    </div>

                    <div className="services-container flex column">

                        <div className="title flex space-between">
                            <span className="bold">Services</span>
                            <span>{gig.price}$</span>
                        </div>

                        <div className="services">
                            <p className="flex align-center"> <BsCheckLg color="#1dbf73" /><span >Review & edit</span></p>
                            <p className="flex align-center"> <BsCheckLg color="#1dbf73" /> <span >1 targeted cover letter</span></p>
                            <p className="flex align-center"> <BsCheckLg color="#1dbf73" /> <span >{gig.revisions}  Revisions</span></p>
                        </div>

                    </div>

                </section>

                <section className="summery">
                    
                    <div className="price flex space-between bold">
                        <span>Total</span>
                        <span>{gig.price}$</span>
                    </div>

                    <div className="delivery flex space-between">
                        <span>Total delivery time</span>
                        <span>{gig.daysToMake} days</span>
                    </div>

                    <button className="bold" onClick={onConfirm}>Confirm & Pay</button>

                </section>

            </aside>
        </div>
    </section>
}