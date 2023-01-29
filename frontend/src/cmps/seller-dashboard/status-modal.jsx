import { orderService } from "../../services/order.service"

export function StatusModal({ order ,setStatusModal }) {
    function updateStatua(status) {
        order.status = status
        orderService.save(order)
        setStatusModal(null)
    }
    return <div className="status-modal">
        <button onClick={() => updateStatua('pending')} className="pending">Pending</button>
        <button onClick={() => updateStatua('in-process')} className="in-process">In process</button>
        <button onClick={() => updateStatua('completed')} className="completed">Completed</button>
        <button onClick={() => updateStatua('rejected')} className="rejected">Rejected</button>
    </div>
}