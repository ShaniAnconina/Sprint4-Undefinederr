import { useEffect, useState } from "react"
import { useOutletContext } from "react-router-dom"

import { StatusModal } from "./status-modal"

import { socketService } from "../../services/socket.service.js"

export function DynamicTable() {
    const [setStatusModal, statusModal, viewType, user] = useOutletContext()
    const [items, setItems] = useState(null)

    useEffect(() => {
        switch (viewType) {
            case 'buyer':
                setItems(user.purchases)
                break
            case 'seller':
                setItems(user.orders)
                break
        }
    }, [viewType])


    useEffect(() => {
        socketService.on('on-change-status-order', (data) => {
            if (items) updateStatus(data)
        })
    }, [items])

    function updateStatus(data) {
        const newOrder = items.map(item => {
            if (item._id === data._id) item.status = data.status
            return item
        })
        setItems(newOrder)
    }

    function getStatus(value) {
        let status
        switch (value) {
            case "in-process":
                status = "In process"
                break
            case "pending":
                status = "Pending"
                break
            case "completed":
                status = "Completed"
                break
            case "rejected":
                status = "Rejected"
                break
        }
        return status
    }

    function toggleStatusModal(order) {
        setStatusModal(order)
        if (statusModal === order) setStatusModal(null)
    }

    if (!items) return <span></span>
    return <article className="dynamic-table">

        {/* DESKTOP */}
        <table className="table-desktop">
            <thead>
                <tr>
                    {viewType === 'buyer' && <th>Seller</th>}
                    {viewType === 'seller' && <th>Buyer</th>}
                    <th>Gig</th>
                    <th>Package</th>
                    <th>Days to make</th>
                    <th>Price</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {items?.map((item) => {
                    return <tr key={item._id}>
                        <td className="client">
                            <img src={viewType === 'buyer' ? item.seller.imgUrl : item.buyer.imgUrl} />
                            <p>{viewType === 'buyer' ? item.seller.fullname : item.buyer.fullname}</p>
                        </td>
                        <td className="gig-title"><p>{item.gig.title}</p></td>
                        <td>{item.gig.package}</td>
                        {item.gig.package === 'basic' && <td>{item.gig.daysToMake} days</td>}
                        {item.gig.package === 'standard' && <td>{item.gig.daysToMake - 1} days</td>}
                        {item.gig.package === 'premium' && <td>{item.gig.daysToMake - 2} days</td>}

                        {item.gig.package === 'basic' && <td>US${item.gig.price.toFixed(0)}</td>}
                        {item.gig.package === 'standard' && <td>US${(item.gig.price * 1.1).toFixed(0)}</td>}
                        {item.gig.package === 'premium' && <td>US${(item.gig.price * 1.5).toFixed(0)}</td>}

                        {viewType === 'buyer' && <td><p className={`status-item ${item.status}`}>{getStatus(item.status)}</p></td>}
                        {viewType === 'seller' && <td> <button onClick={() => toggleStatusModal(item)} className={`status-item ${item.status}`}>{getStatus(item.status)}</button></td>}
                    </tr>
                })}
                {statusModal && <StatusModal order={statusModal} setStatusModal={setStatusModal} />}
            </tbody>
        </table>

        {/* MOBILE */}
        <section className="table-mobile">
            {items?.map((item) => {
                return <div className="item" key={item._id}>
                    <div className="top">
                        <div className="client">
                            <img src={viewType === 'buyer' ? item.seller.imgUrl : item.buyer.imgUrl} />
                            <p>{viewType === 'buyer' ? (item.seller.fullname.charAt(0).toUpperCase() + item.seller.fullname.slice(1)) : (item.buyer.fullname.charAt(0).toUpperCase() + item.buyer.fullname.slice(1))}</p>
                        </div>

                        <div className="package">{item.gig.package.charAt(0).toUpperCase() + item.gig.package.slice(1)}</div>

                        <div className="price">
                            {item.gig.package === 'basic' && <p>US${item.gig.price.toFixed(0)}</p>}
                            {item.gig.package === 'standard' && <p>US${(item.gig.price * 1.1).toFixed(0)}</p>}
                            {item.gig.package === 'premium' && <p>US${(item.gig.price * 1.5).toFixed(0)}</p>}
                        </div>
                    </div>
                    <div className="title"><p>{item.gig.title}</p></div>

                    {viewType === 'buyer' && <p className={`status-item ${item.status}`}>{getStatus(item.status)}</p>}
                    {viewType === 'seller' && <button onClick={() => toggleStatusModal(item)} className={`status-item ${item.status}`}>{getStatus(item.status)}</button>}
                </div>
            })}
            {statusModal && <StatusModal order={statusModal} setStatusModal={setStatusModal} />}
        </section>
    </article>
}