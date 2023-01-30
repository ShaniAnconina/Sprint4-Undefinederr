import { useOutletContext } from "react-router-dom";
import { StatusModal } from "./status-modal"


export function DynamicTable() {
    const [setStatusModal, statusModal, userType, user] = useOutletContext()


    let items
    switch (userType) {
        case 'buyer':
            items = user.purchases
            break
        case 'seller':
            items = user.orders
            break
    }
    function toggleStatusModal(order) {
        setStatusModal(order)
        if (statusModal === order) setStatusModal(null)
    }

    return <article className="dynamic-table">
        <table>
            <thead>
                <tr>
                    {userType === 'buyer' && <th>Seller</th>}
                    {userType === 'seller' && <th>Buyer</th>}
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
                            <img src={userType === 'buyer' ? item.seller.imgUrl : item.buyer.imgUrl} />
                            <p>{userType === 'buyer' ? item.seller.fullname : item.buyer.fullname}</p>
                        </td>
                        <td className="gig-title"><p>{item.gig.title}</p></td>
                        <td>{item.gig.package}</td>
                        {item.gig.package === 'basic' && <td>{item.gig.daysToMake} days</td>}
                        {item.gig.package === 'standard' && <td>{item.gig.daysToMake - 1} days</td>}
                        {item.gig.package === 'premium' && <td>{item.gig.daysToMake - 2} days</td>}

                        {item.gig.package === 'basic' && <td>US${item.gig.price.toFixed(0)}</td>}
                        {item.gig.package === 'standard' && <td>US${(item.gig.price * 1.1).toFixed(0)}</td>}
                        {item.gig.package === 'premium' && <td>US${(item.gig.price * 1.5).toFixed(0)}</td>}

                        {userType === 'buyer' && <td className={`status-item ${item.status}`}>{item.status}</td>}
                        {userType === 'seller' && <td> <button onClick={() => toggleStatusModal(item)} className={`status-item ${item.status}`}>{item.status}</button></td>}
                    </tr>
                })}
                {statusModal && <StatusModal order={statusModal} setStatusModal={setStatusModal} />}
            </tbody>
        </table>
    </article>
}