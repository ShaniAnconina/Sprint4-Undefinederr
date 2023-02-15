import { orderService } from "../../services/order.service.js"

export function StatusModal({ order ,setStatusModal }) {
    function updateStatus(status) {
        order.status = status
        orderService.save(order)
        setStatusModal(null)
    }
    return <div className="status-modal">
        <button onClick={() => updateStatus('pending')} className="pending">Pending</button>
        <button onClick={() => updateStatus('in-process')} className="in-process">In process</button>
        <button onClick={() => updateStatus('completed')} className="completed">Completed</button>
        <button onClick={() => updateStatus('rejected')} className="rejected">Rejected</button>
    </div>
}