import { useEffect, useRef, useState } from 'react'

import { FilterModal } from './filter-modal'

import { MdKeyboardArrowDown } from 'react-icons/md'

export function ExploreFilter({ gigs, filterBy, elApp }) {
    const [modalType, setModalType] = useState(null)
    const [sortModal, setSortModal] = useState(false)
    const [filtersClassname, setFiltersClassname] = useState('')
    const [value, setValue] = useState('Recommended')
    const elNav = useRef(null)

    useEffect(() => {
        const navObserver = new IntersectionObserver(onNavObserved, {rootMargin: "-100px 0px 0px"})
        navObserver.observe(elNav.current)
        function onNavObserved(entries) {
            entries.forEach((entry) => {
                if (entry.isIntersecting) setFiltersClassname('')
                else if (!entry.isIntersecting) setFiltersClassname('sticky')
            })
        }
    }, [])

    function toggleFilterModal(type) {
        setModalType(type)
        // elApp.current.addEventListener('click', onCloseModal)
        if (modalType === type) setModalType(null)
    }
    function toggleSortModal() {
        // elApp.current.addEventListener('click', onCloseModal)
        if (!sortModal) setSortModal(true)
        else setSortModal(false)
    }

    function onCloseModal() {
        setModalType(null)
        setSortModal(false)
        // elApp.current.removeEventListener('click')
    }

    return (
        <>
            <div ref={elNav} className={`explore-filter main-layout full ${filtersClassname}`}>
            {/* <div onClick={(ev) => ev.preventDefault()} ref={elNav} className={`explore-filter main-layout full ${filtersClassname}`}> */}
                <div className="filters-container main-layout">
                    <div className="filters">
                        {filterBy.tags.length === 0 && <button className='filter-btn' onClick={() => toggleFilterModal('servicesOptions')}><div><p>Service Options</p><MdKeyboardArrowDown /></div></button>}
                        <button className='filter-btn' onClick={() => toggleFilterModal('budget')}><div><p>Budget</p><MdKeyboardArrowDown /></div></button>
                        <button className='filter-btn' onClick={() => toggleFilterModal('deliveryTime')}><div><p>Delivery Time</p><MdKeyboardArrowDown /></div></button>
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
                <div className='sort-by'>
                    <p>Sort By <button onClick={toggleSortModal}><p>{value}</p><MdKeyboardArrowDown /></button></p>
                    {sortModal && <div className='sort-modal'>
                        {value !== 'top' && <button value="top">Top Rated</button>}
                        {value !== 'price' && <button value="price">Best Price</button>}
                        {value !== 'delivery' && <button value="delivery">Delivery Time</button>}
                    </div>}
                </div>
            </div>
        </>
    )
}