import { BudgetModal } from "./budget-modal"
import { DeliveryTimeModal } from "./delivery-time-modal"
import { ServicesOptionsModal } from "./services-options-modal"

export function FilterModal({ modalType }) {

    let type

    switch (modalType) {
        case 'servicesOptions':
            type = <ServicesOptionsModal />
            break
        case 'budget':
            type = <BudgetModal />
            break
        case 'deliveryTime':
            type = <DeliveryTimeModal />
            break

        default:
            break
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