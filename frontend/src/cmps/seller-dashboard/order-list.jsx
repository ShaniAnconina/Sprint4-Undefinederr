import { useState } from 'react'


import { MdKeyboardArrowDown } from 'react-icons/md'


export function OrderList({ orders }) {

    const [sortModal, setStatusModal] = useState(false)
    const [value, setValue] = useState('Deny')



    function toggleStatusModal(){
        if (!sortModal) setStatusModal(true)
        else setStatusModal(false)
    }

    function onSetValue({target}){
        setValue(target.value)
        toggleStatusModal()
    }

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
                        <td className='status-modal-cell'><button onClick={toggleStatusModal}><p>{value}</p><MdKeyboardArrowDown /></button>
                            {sortModal && <div className='status-modal'>
                                {value !== 'Pending' && <button value="Pending" onClick={onSetValue}>Pending</button>}
                                {value !== 'In process' && <button value="In process" onClick={onSetValue}>In process</button>}
                                {value !== 'Done' && <button value="Done" onClick={onSetValue}>Done</button>}
                                {value !== 'Deny' && <button value="Deny" onClick={onSetValue}>Deny</button>}
                            </div>
                            }
                        </td>
                    </tr>
                })}
            </tbody>
        </table>
    );

}