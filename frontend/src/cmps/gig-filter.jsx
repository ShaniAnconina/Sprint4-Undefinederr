//TODO Adjust to our needs
//TODO create filter template in service

import { useEffect, useRef, useState } from "react"

import { gigService } from "../services/gig.service.js"
import { utilService } from "../services/util.service.js"
import { setfilter } from "../store/gig/gig.action.js"
import { store } from "../store/gig/store.js"
import { useNavigate } from "react-router-dom"
import { SearchBar } from "./search-bar.jsx"
import { AiOutlineSearch } from "react-icons/ai"
import { Fragment } from "react"


export function GigFilter({ suggestShown = true }) {

    const [filterByToEdit, setFilterByToEdit] = useState(gigService.getDefaultFilter())
    const navigate = useNavigate()

    useEffect(() => {
        if (!filterByToEdit.tags) return
        setfilter(filterByToEdit)
        navigate('/gig')
    }, [filterByToEdit])


    function onChange({ target }) {
        const { name: field, value } = target
        setFilterByToEdit((prev) => { return { ...prev, [field]: value } })
    }

    function onClickSuggest(value) {
        setFilterByToEdit((prev) => { return { ...prev, tags: value, txt: '' } })
        console.log("onclick ", filterByToEdit)
        setfilter(filterByToEdit)
        navigate('/gig')


    }

    function onFilterSubmit(ev) {

        ev?.preventDefault()
        setfilter(filterByToEdit)
        //TODO add only if user loged in
        navigate('/gig')
        // setFilterByToEdit(gigService.getDefaultFilter())

    }

    return <Fragment>
        {/* <SearchBar onChange ={onChange} onFilterSubmit={onFilterSubmit} filterByToEdit={filterByToEdit}/> */}
        <form className="filter-form" onSubmit={onFilterSubmit}>
            {/* <div className="filters-container flex"> */}
            <input
                className="search-bar"
                type="text"
                id="txt"
                name="txt"
                placeholder="What service are you looking for today?"
                value={filterByToEdit.txt}
                onChange={onChange}
            />
            <button className="search-bar-btn"><AiOutlineSearch /></button>
            {/* </div> */}
        </form>
        <div className="popular-btn flex" style={{ display: suggestShown ? 'block' : 'none' }}>
            <p>popular:</p>
            <button type='button' className="search-suggestion" onClick={() => onClickSuggest("websiteDesign")}>Website Design</button>
            <button type='button' className="search-suggestion" onClick={() => onClickSuggest("wordpress")}>Wordpress</button>
            <button type='button' className="search-suggestion" onClick={() => onClickSuggest("logoDesign")}>logo Design</button>
            <button type='button' className="search-suggestion" onClick={() => onClickSuggest("logoDesign")}>video Editing</button>
        </div>
        </Fragment>
}