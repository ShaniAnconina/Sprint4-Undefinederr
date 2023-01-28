//this file is used in home / text filter
import { useEffect, useState } from "react"
import { useNavigate,useParams,useSearchParams } from "react-router-dom"

import { CgSearch } from "react-icons/cg"

import { setfilter } from "../store/gig/gig.action.js"
import { gigService } from "../services/gig.service.js"

export function GigFilter({ searchBtnContent, placeholderTxt, inHomeHero = false }) {
    const navigate = useNavigate()
    const [searchParams, setSearchParams] = useState(null)
    const [filterByToEdit, setFilterByToEdit] = useState(gigService.getDefaultFilter())

    useEffect(() => {
        if (filterByToEdit.tags.length === 0) return
        setfilter(filterByToEdit)
        // navigate('/gig')
    }, [filterByToEdit])

    function onChange({ target }) {
        const { name: field, value } = target
        setFilterByToEdit((prev) => { return { ...prev, [field]: value } })
    }

    function onFilterSubmit(ev) {
        ev?.preventDefault()
        setfilter(filterByToEdit)
        setSearchParams({txt: filterByToEdit.txt,tags:filterByToEdit.tags,budget_min:filterByToEdit.budget.min,budget_max:filterByToEdit.budget.max,daysToMake:filterByToEdit.daysToMake,isSaved:filterByToEdit.isSaved,sortBy:filterByToEdit.sortBy})
        navigate({pathname:'/gig',search:  `?txt=${filterByToEdit.txt}&tags=${filterByToEdit.tags}&budget_min=${filterByToEdit.budget.min}&budget_max=${filterByToEdit.budget.max}&daysToMake=${filterByToEdit.daysToMake}&isSaved=${filterByToEdit.isSaved}&sortBy=${filterByToEdit.sortBy}`})
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