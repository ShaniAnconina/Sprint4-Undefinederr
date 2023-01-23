import { BudgetModal } from "./budget-modal"
import { DeliveryTimeModal } from "./delivery-time-modal"
import { ServicesOptionsModal } from "./services-options-modal"

export function FilterModal({ modalType }) {

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


    function onSubmit(ev){
        ev?.preventDefault()
        console.log("clicked apply")

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