//This filter file is used for modals in gig page
import { useEffect, useState } from "react"
import { useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom"

import { BudgetModal } from "./budget-modal"
import { DeliveryTimeModal } from "./delivery-time-modal"
import { ServicesOptionsModal } from "./services-options-modal"

import { setfilter } from "../../store/gig/gig.action.js"
import { gigService } from "../../services/gig.service"

export function FilterModal({ setModalType, modalType, modalLocation, toggleFilterModal }) {

    const navigate = useNavigate()
    const { filterBy } = useSelector((storeState) => storeState.gigModule)
    const [filterByToEdit, setFilterByToEdit] = useState(filterBy)
    let type

    useEffect(() => {
        console.log("got to use effect of filter modal")
        setfilter(filterByToEdit)
        navigate('/gig')
    }, [filterByToEdit])

    switch (modalType) {
        case 'servicesOptions':
            type = <ServicesOptionsModal onSubmit={onSubmit} />
            break
        case 'budget':
            type = <BudgetModal onSubmit={onSubmit} />
            break
        case 'deliveryTime':
            type = <DeliveryTimeModal onSubmit={onSubmit} />
            break

        default:
            break
    }

    function onSubmit(ev, value) {
        ev?.preventDefault()
        console.log(`submitted ${ev.target.name} with ${value}`)
        let field = ev.target.name
        setFilterByToEdit({ ...filterBy, [field]: value })
        toggleFilterModal()
    }

    function onClearAll() {
        setFilterByToEdit(gigService.getDefaultFilter())
        toggleFilterModal()
    }

    return (<>
        <div onClick={() => setModalType(null)} className="screen-modal"></div>
        <section className="filter-modal" style={{ left: modalLocation }}>
            {/* <section onClick={(ev) => ev.stopPropagation()} className="filter-modal"> */}
            {type}
            <div className="filters-footer">
                <button className="clear" type="button" onClick={onClearAll}>Clear All</button>
                <button className="apply" form="filters" type="submit">Apply</button>
            </div>
        </section>
    </>
    )
}