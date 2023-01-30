import { useEffect, useState } from "react"
import { MdLocalActivity } from "react-icons/md"
import { useOutletContext } from "react-router-dom"
import { socketService } from "../../services/socket.service"
import { StatusModal } from "./status-modal"

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

    function toggleStatusModal(order) {
        setStatusModal(order)
        if (statusModal === order) setStatusModal(null)
    }

    return <article className="dynamic-table">
        <table>
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

                        {viewType === 'buyer' && <td><div className={`status-item ${item.status}`}>{item.status}</div></td>}
                        {viewType === 'seller' && <td> <button onClick={() => toggleStatusModal(item)} className={`status-item ${item.status}`}>{item.status}</button></td>}
                    </tr>
                })}
                {statusModal && <StatusModal order={statusModal} setStatusModal={setStatusModal} />}
            </tbody>
        </table>
    </article>
}