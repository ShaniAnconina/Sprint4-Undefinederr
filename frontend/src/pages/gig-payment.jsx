import { useParams } from "react-router-dom"

export function GigPayment() {
    const { gigId } = useParams()

    return <section className="gig-payment">
        <h1>Hello from gig payment {gigId}</h1>
    </section>
}