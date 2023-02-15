import { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'

import { FilterModal } from './filter-modal'
import { setfilter } from "../../store/gig/gig.action.js"

import { MdKeyboardArrowDown } from 'react-icons/md'

export function ExploreFilter({ gigs, filterBy }) {
    const [modalType, setModalType] = useState(null)
    const [sortModal, setSortModal] = useState(false)
    const [modalLocation, setModalLocation] = useState(0)
    const [filtersClassname, setFiltersClassname] = useState('')
    const [filterByToEdit, setFilterByToEdit] = useState(useSelector((globalStore) => globalStore.gigModule.filterBy))
    const [sortvalue, setSortValue] = useState('topRated')
    const elNav = useRef(null)

    const sortOptions = { 'topRated': 'Top Rated', 'price': 'Best Price', 'daysToMake': 'Delivery Time' }

    useEffect(() => {
        setfilter(filterByToEdit)

        const navObserver = new IntersectionObserver(onNavObserved, { rootMargin: "-100px 0px 0px" })
        navObserver.observe(elNav.current)
        function onNavObserved(entries) {
            entries.forEach((entry) => {
                if (entry.isIntersecting) setFiltersClassname('')
                else if (!entry.isIntersecting) setFiltersClassname('sticky')
            })
        }
    }, [filterByToEdit])

    function toggleFilterModal(ev, type) {
        setModalType(type)
        if (modalType === type) setModalType(null)
        else {
            setModalType(type)
            const left = ev.currentTarget.offsetLeft
            setModalLocation(left)
        }
    }

    function toggleSortModal() {
        if (!sortModal) setSortModal(true)
        else setSortModal(false)
    }

    function onSelectSort(value) {
        setSortValue(value)
        setFilterByToEdit((prevFilter) => { return { ...prevFilter, sortBy: value } })
        toggleSortModal()
    }

    return (
        <>
            <div ref={elNav} className={`explore-filter main-layout full ${filtersClassname}`}>
                <div className="filters-container main-layout">
                    <div className="filters">
                        {filterBy.tags.length === 0 && <button className='filter-btn' onClick={(ev) => toggleFilterModal(ev, 'servicesOptions')}><div><p>Service Options</p><MdKeyboardArrowDown /></div></button>}
                        <button className='filter-btn' onClick={(ev) => toggleFilterModal(ev, 'budget')}><div><p>Budget</p><MdKeyboardArrowDown /></div></button>
                        <button className='filter-btn' onClick={(ev) => toggleFilterModal(ev, 'deliveryTime')}><div><p>Delivery Time</p><MdKeyboardArrowDown /></div></button>
                        {modalType && <FilterModal modalType={modalType} modalLocation={modalLocation} toggleFilterModal={toggleFilterModal} setModalType={setModalType} setfilter={setfilter} setFilterByToEdit={setFilterByToEdit}/>}
                    </div>
                </div>
            </div>

            <div className="explore-count-sort">
                <div className='count'>{gigs.length} services available</div>
                <div className='sort-by'>
                    <p>Sort By <button onClick={toggleSortModal}><p>{sortOptions[sortvalue]}</p><MdKeyboardArrowDown /></button></p>
                    {sortModal && <> <div onClick={() => setSortModal(false)} className="screen-modal"></div>
                        <div className='sort-modal'>
                            {sortvalue !== 'topRated' && <button onClick={() => onSelectSort("topRated")}>Top Rated</button>}
                            {sortvalue !== 'price' && <button onClick={() => onSelectSort("price")}>Best Price</button>}
                            {sortvalue !== 'daysToMake' && <button onClick={() => onSelectSort("daysToMake")}>Delivery Time</button>}
                        </div>
                    </>}
                </div>
            </div>
        </>
    )
}