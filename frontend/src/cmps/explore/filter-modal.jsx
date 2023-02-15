import { useSelector } from 'react-redux'

import { BudgetModal } from "./budget-modal"
import { DeliveryTimeModal } from "./delivery-time-modal"
import { ServicesOptionsModal } from "./services-options-modal"

import { gigService } from "../../services/gig.service.js"

export function FilterModal({ setModalType, modalType, modalLocation, toggleFilterModal, setFilterByToEdit }) {

    const { filterBy } = useSelector((storeState) => storeState.gigModule)
    let type

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
    }

    function onSubmit(ev, value) {
        ev?.preventDefault()
        let field = ev.target.name
        setFilterByToEdit({ ...filterBy, [field]: value })
        toggleFilterModal(ev)
    }

    function onClearAll(ev) {
        setFilterByToEdit(gigService.getDefaultFilter())
        toggleFilterModal(ev)
    }

    return (
        <>
            <div onClick={() => setModalType(null)} className="screen-modal"></div>
            <section className="filter-modal" style={{ left: modalLocation }}>
                {type}
                <div className="filters-footer">
                    <button className="clear" type="button" onClick={onClearAll}>Clear All</button>
                    <button className="apply" form="filters" type="submit">Apply</button>
                </div>
            </section>
        </>
    )
}