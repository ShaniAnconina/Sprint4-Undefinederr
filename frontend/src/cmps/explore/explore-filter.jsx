import { useEffect, useRef, useState } from 'react'

import { FilterModal } from './filter-modal'
import { SwitchBtn } from './switch-btn'

import { MdKeyboardArrowDown } from 'react-icons/md'

export function ExploreFilter({ gigs, filterBy }) {
    const [modalType, setModalType] = useState(false)
    const [filtersClassname, setFiltersClassname] = useState('')
    const elNav = useRef(null)

    useEffect(() => {

        const navObserver = new IntersectionObserver(onNavObserved, {
            rootMargin: "-100px 0px 0px"
        })

        navObserver.observe(elNav.current)

        function onNavObserved(entries) {
            entries.forEach((entry) => {
                console.log('entry:', entry)
                if (entry.isIntersecting) setFiltersClassname('')
                else if (!entry.isIntersecting) setFiltersClassname('sticky')
            })
        }
    }, [])


    function toggleModal(type) {
        setModalType(type)
        if (modalType === type) setModalType(false)
    }

    return (
        <>
            <div ref={elNav} className={`explore-filter main-layout full ${filtersClassname}`}>
                <div className="filters-container main-layout">
                    <div className="filters">
                        {filterBy.tags.length === 0 && <button className='filter-btn' onClick={() => toggleModal('servicesOptions')}><div><p>Service Options</p><MdKeyboardArrowDown /></div></button>}
                        {/* <button className='filter-btn' onClick={() => toggleModal('sellerDetails')}><div><p>Seller Details</p><MdKeyboardArrowDown /></div></button> */}
                        <button className='filter-btn' onClick={() => toggleModal('budget')}><div><p>Budget</p><MdKeyboardArrowDown /></div></button>
                        <button className='filter-btn' onClick={() => toggleModal('deliveryTime')}><div><p>Delivery Time</p><MdKeyboardArrowDown /></div></button>
                        {modalType && <FilterModal modalType={modalType} />}
                    </div>
                    {/* <div className="right-filters">
                    <SwitchBtn />
                    <p>Pro services</p>
                </div> */}
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
        </>
    )
}