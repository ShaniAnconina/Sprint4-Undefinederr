import { useState } from 'react'

import { FilterModal } from './filter-modal'
import { SwitchBtn } from './switch-btn'

import { MdKeyboardArrowDown } from 'react-icons/md'

export function ExploreFilter() {
    const [modalType, setModalType] = useState(false)

    function toggleModal(type) {
        setModalType(type)
        if (modalType === type) setModalType(false)
    }

    return (
        <section className="explore-filter">
            <div className="left-filters">
                <button onClick={() => toggleModal('servicesOptions')}><div><p>Service Options</p><MdKeyboardArrowDown /></div></button>
                {/* <button onClick={() => toggleModal('sellerDetails')}><div><p>Seller Details</p><MdKeyboardArrowDown /></div></button> */}
                <button onClick={() => toggleModal('budget')}><div><p>Budget</p><MdKeyboardArrowDown /></div></button>
                <button onClick={() => toggleModal('deliveryTime')}><div><p>Delivery Time</p><MdKeyboardArrowDown /></div></button>
            </div>
            {modalType && <FilterModal modalType={modalType} />}
            <div className="right-filters">
                <SwitchBtn />
                <p>Pro services</p>
            </div>
        </section>
    )
}