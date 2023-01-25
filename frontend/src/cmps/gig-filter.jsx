import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import { CgSearch } from "react-icons/cg"

import { setfilter } from "../store/gig/gig.action.js"
import { gigService } from "../services/gig.service.js"

export function GigFilter({ searchBtnContent, placeholderTxt, inHomeHero = false }) {
    const navigate = useNavigate()
    const [filterByToEdit, setFilterByToEdit] = useState(gigService.getDefaultFilter())

    useEffect(() => {
        if (filterByToEdit.tags.length === 0) return
        setfilter(filterByToEdit)
        navigate('/gig')
    }, [filterByToEdit])

    function onChange({ target }) {
        const { name: field, value } = target
        setFilterByToEdit((prev) => { return { ...prev, [field]: value } })
    }

    function onFilterSubmit(ev) {
        ev?.preventDefault()
        setfilter(filterByToEdit)
        navigate('/gig')
    }

    return <form className='filter-form' onSubmit={onFilterSubmit}>
        {inHomeHero && <div className="search-icon-container">{<CgSearch />}</div>}
        <input
            className="search-bar"
            type="text"
            id="txt"
            name="txt"
            placeholder={placeholderTxt}
            value={filterByToEdit.txt}
            onChange={onChange}
        />
        <button className="search-bar-btn">{searchBtnContent}</button>
    </form>
}