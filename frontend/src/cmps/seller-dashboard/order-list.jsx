//TODO generate orders list from query 
import { useState, useEffect } from 'react'


import { MdKeyboardArrowDown } from 'react-icons/md'


export function OrderList({ orders }) {

    const [statusModal, setStatusModal] = useState({})
    const [openModal, setOpenModal] = useState(false)
    // const [statusValue, setStatusValue] = useState({})






    // function toggleStatusModal() {
    //     if (!statusModal) setStatusModal(true)
    //     else setStatusModal(false)


    function onSetStatusValue(value) {
        console.log("clicked ", value)

    }

    function onOpenModal(order, ev) {
        setStatusModal({ order, ev })
        setOpenModal((prev) => !prev)
        DynamicModal()
        console.log("orderID: ", order._id)
    }

    function DynamicModal() {
        const { order, ev } = statusModal
        let y = ev.pageY + 'px'
        let x = ev.pageX + 'px'
        console.log("ev pagey ", y)
        return <div className='status-modal' style={{ top: y, left: x }}>
            {order.status !== 'Pending' && <button value="Pending" onClick={() => onSetStatusValue("Pending")}>Pending</button>}
            {order.status !== 'In process' && <button value="In process" onClick={() => onSetStatusValue("In process")}>In process</button>}
            {order.status !== 'Done' && <button value="Done" onClick={() => onSetStatusValue("Done")}>Completed</button>}
            {order.status !== 'Deny' && <button value="Deny" onClick={() => onSetStatusValue("Deny")}>Rejected</button>}
        </div>


    }

    return (
        <table className="orders-table">
            <thead>
                <tr>
                    <th>BUYER</th>
                    <th>GIG</th>
                    <th>DUE ON</th>
                    <th>DELIVERED</th>
                    <th>TOTAL</th>
                    <th>STATUS</th>
                </tr>
            </thead>
            <tbody>
                {orders?.map((order) => {
                    return <tr key={order._id}>
                        <td className="row-buyer flex space-between">
                            <img src={order.buyerImg} />
                            <h4>{order.buyer}</h4>
                        </td>
                        <td>{order.gig}</td>
                        <td>{order.dueDate}</td>
                        <td>{order.deliveredDate}</td>
                        <td>{order.price}$</td>
                        <td className='status-modal-cell'><button onClick={(ev) => {
                            console.log(ev)
                            onOpenModal(order, ev)
                        }}><p>{order.status}</p><MdKeyboardArrowDown />
                        </button>
                            {/* {statusModal && <DynamicModal order={order}/>} */}
                        </td>
                    </tr>
                })}
            </tbody>
            {openModal && <DynamicModal />}
        </table>
    );
}