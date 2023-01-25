



export function OrderList({orders}) {


     return (
        <table className="orders-table">
            <thead>
                <tr>
                    <th>BUYER</th>
                    <th>GIG</th>
                    <th>DUE ON</th>
                    <th>DELIVERED AT</th>
                    <th>TOTAL</th>
                    <th>STATUS</th>
                </tr>
            </thead>
            <tbody>
                {orders.map((order) => {
                    return <tr>
                    <td className="row-buyer flex space-around">    
                        <img src={order.buyerImg} />
                        <h4>{order.buyer}</h4>
                    </td>
                    <td>{order.gig}</td>
                    <td>{order.dueDate}</td>
                    <td>{order.deliveredDate}</td>
                    <td>{order.price}$</td>
                    <td>{order.status}</td>
                </tr>
                                })}
            </tbody>
        </table>
    );

}