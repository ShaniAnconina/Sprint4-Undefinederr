import { useEffect, useState } from "react"
import { useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom"

import { BudgetModal } from "./budget-modal"
import { DeliveryTimeModal } from "./delivery-time-modal"
import { ServicesOptionsModal } from "./services-options-modal"

import { setfilter } from "../../store/gig/gig.action.js"

export function FilterModal({ modalType }) {

    const navigate = useNavigate()
    const {filterBy} = useSelector((storeState)=>storeState.gigModule)
    const [filterByToEdit, setFilterByToEdit] = useState(filterBy)
    let type

    useEffect(() => {
        setfilter(filterByToEdit)
        navigate('/gig')
    }, [filterByToEdit])

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
        console.log(ev.target.name)
        setFilterByToEdit({...filterBy, [field]:value})
    }

    return (
        <section className="filter-modal">
        {/* <section onClick={(ev) => ev.stopPropagation()} className="filter-modal"> */}
            {type}
            <div className="filters-footer">
                <button className="clear" type="button">Clear All</button>
                <button className="apply" form="filters" type="submit">Apply</button>
            </div>
        </section>
    )
}