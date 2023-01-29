import { StatusModal } from "./status-modal"

export function DynamicTable({ setStatusModal, statusModal, type, user }) {
    let items
    switch (type) {
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
                    {type === 'buyer' && <th>Seller</th>}
                    {type === 'seller' && <th>Buyer</th>}
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
                        <td className="client flex">
                            <img src={type === 'buyer' ? item.seller.imgUrl : item.buyer.imgUrl} />
                            <h4>{type === 'buyer' ? item.seller.fullname : item.buyer.fullname}</h4>
                        </td>
                        <td>{item.gig.title}</td>
                        <td>{item.gig.package}</td>
                        {item.gig.package === 'basic' && <td>{item.gig.daysToMake} days</td>}
                        {item.gig.package === 'standard' && <td>{item.gig.daysToMake - 1} days</td>}
                        {item.gig.package === 'premium' && <td>{item.gig.daysToMake - 2} days</td>}

                        {item.gig.package === 'basic' && <td>US${item.gig.price.toFixed(0)}</td>}
                        {item.gig.package === 'standard' && <td>US${(item.gig.price * 1.1).toFixed(0)}</td>}
                        {item.gig.package === 'premium' && <td>US${(item.gig.price * 1.5).toFixed(0)}</td>}

                        {type === 'buyer' && <td className={`status-item ${item.status}`}>{item.status}</td>}
                        {type === 'seller' && <td onClick={() => toggleStatusModal(item)} className={`status-item ${item.status}`}>{item.status}</td>}
                    </tr>
                })}
                {statusModal && <StatusModal order={statusModal} setStatusModal={setStatusModal} />}
            </tbody>
        </table>
    </article>
}