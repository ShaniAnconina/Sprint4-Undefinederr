import { BudgetModal } from "./budget-modal"
import { DeliveryTimeModal } from "./delivery-time-modal"
import { ServicesOptionsModal } from "./services-options-modal"
import { useEffect, useState } from "react"
import { useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom"
import { setfilter } from "../../store/gig/gig.action.js"
import { store } from '../../store/store.js'
import { gigService } from "../../services/gig.service"



export function FilterModal({ modalType }) {

    const navigate = useNavigate()
    const {filterBy} = useSelector((storeState)=>storeState.gigModule)
    const [filterByToEdit, setFilterByToEdit] = useState(filterBy)


    useEffect(() => {
        setfilter(filterByToEdit)
        console.log("setting filters: ", filterByToEdit)
        navigate('/gig')
    }, [filterByToEdit])


    let type

    switch (modalType) {
        case 'servicesOptions':
            type = <ServicesOptionsModal onSubmit={onSubmit}/>
            break
        case 'budget':
            type = <BudgetModal onSubmit={onSubmit}/>
            break
        case 'deliveryTime':
            type = <DeliveryTimeModal onSubmit={onSubmit}/>
            break

        default:
            break
    }


    function onSubmit(ev, value){
        ev?.preventDefault()
        let field = ev.target.name
        console.log("event: ",ev)
        console.log(ev.target.name)
        console.log("value:", value)
        setFilterByToEdit({...filterBy, [field]:value})
    }

    return (
        <section className="filter-modal">
            {type}
            <div className="filters-footer">
                <button type="button">Clear All</button>
                <button form="filters" type="submit">Apply</button>
            </div>
        </section>
    )
}