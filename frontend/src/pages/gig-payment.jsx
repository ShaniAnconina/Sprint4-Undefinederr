import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { openJoinModal, showErrorMsg, showSuccessMsg } from "../services/event-bus.service"
import { gigService } from "../services/gig.service"
import { orderService } from "../services/order.service"

export function GigPayment() {
    const { gigId } = useParams()
    const navigate = useNavigate()
    const [order, setOrder] = useState(orderService.getEmptyOrder())
    const { loggedinUser } = useSelector((storeState) => storeState.userModule)
    const [gig, setGig] = useState(null)

    useEffect(() => {
        loadGig()
        console.log(loggedinUser);
    }, [])

    async function loadGig() {
        try {
           const gigToOrder = await gigService.get(gigId)
            setGig(gigToOrder)
        } catch (error) {
            console.log(error)
            showErrorMsg('Had issues please try again...')
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
            navigate(-1) //Maby to another path
        } catch (error) {
            console.log(error)
            showErrorMsg('Had issues please try again... 1')
        }
    }

    return <section className="gig-payment-container flex">

        <section className="payment-details">
            <h6>Payment Options</h6>
            <p>Credit & Debit Cards <span></span></p>
            <article className="form-container">
                <div className="card-details">

                    <label htmlFor="card-number">Card Number</label>
                    <input type="text"
                        id="card-number"
                        className="card-number"
                        value="5555 4444 3333 2222"
                        onChange={handelChange}
                    />

                    <label htmlFor="card-expiration">Expiration Date</label>
                    <input type="txt"
                        id="card-expiration"
                        className="card-expiration"
                        value="11/12"
                        onChange={handelChange}
                    />

                    <label htmlFor="card-cvv">Security Code</label>
                    <input type="number"
                        id="card-cvv"
                        className="card-cvv"
                        value="123"
                        onChange={handelChange}
                    />

                </div>

                <div className="buyer-details">

                    <label htmlFor="first-name">First Name</label>
                    <input type="text"
                        id="first-name"
                        className="first-name"
                        value="Puki"
                        onChange={handelChange}
                    />

                    <label htmlFor="last-name">Last Name</label>
                    <input type="text"
                        id="last-name"
                        className="last-name"
                        value="Pukauv"
                        onChange={handelChange}
                    />

                </div>
            </article>
        </section>

        <aside className="purchase-details">
            <section className="order">

            </section>

            <section className="summery">

                <button onClick={onConfirm}>Confirm & Pay</button>
            </section>
        </aside>

    </section>
}