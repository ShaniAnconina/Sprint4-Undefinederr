import { useState } from 'react'

import { FilterModal } from './filter-modal'
import { SwitchBtn } from './switch-btn'

import { MdKeyboardArrowDown } from 'react-icons/md'

export function ExploreFilter({ gigs, filterBy }) {
    const [modalType, setModalType] = useState(false)

    console.log(filterBy)

    function toggleModal(type) {
        setModalType(type)
        if (modalType === type) setModalType(false)
    }
    return (
        <section >
            <div className="explore-filter">
                <div className="left-filters">
                    {filterBy.tags.length === 0 && <button onClick={() => toggleModal('servicesOptions')}><div><p>Service Options</p><MdKeyboardArrowDown /></div></button>}
                    {/* <button onClick={() => toggleModal('servicesOptions')}><div><p>Service Options</p><MdKeyboardArrowDown /></div></button>} */}
                    {/* <button onClick={() => toggleModal('sellerDetails')}><div><p>Seller Details</p><MdKeyboardArrowDown /></div></button> */}
                    <button onClick={() => toggleModal('budget')}><div><p>Budget</p><MdKeyboardArrowDown /></div></button>
                    <button onClick={() => toggleModal('deliveryTime')}><div><p>Delivery Time</p><MdKeyboardArrowDown /></div></button>
                </div>
                {modalType && <FilterModal modalType={modalType} />}
                <div className="right-filters">
                    {/* <SwitchBtn />
                    <p>Pro services</p> */}
                </div>
            </div>

            <div className="explore-count-sort">
                <div className='count'>{gigs.length} services available</div>
                <div className='sort'>
                    <p>Sort By</p>
                    <select name="sortBy" id="sort-by">
                        <option value="">Sort By</option>
                        <option value="top">Top Rated</option>
                        <option value="price">Best Price</option> {/* cheap to expensive */}
                    </select>
                </div>
            </div>
        </section>
    )
}