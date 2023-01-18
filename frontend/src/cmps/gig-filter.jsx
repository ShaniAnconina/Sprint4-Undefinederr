//TODO Adjust to our needs
//TODO create filter template in service

import { useEffect, useRef, useState } from "react"

import { gigService } from "../services/gig.service.js"
import { utilService } from "../services/util.service.js"


export function GigFilter({ onSetFilterBy }) {

    const [filterByToEdit, setFilterByToEdit] = useState(gigService.getDefaultFilter())
    const [selectedOptions, setSelectedOptions] = useState();

function onChange({target}){
    // console.log(target.value)
    setFilterByToEdit(target.value)
}

    function onFilterSubmit({target}){
        console.log(target.text.value)
    }

    return <form className="filter-form" onSubmit={onFilterSubmit}>
            <div className="filters-container flex">
                    <input 
                    className="search-bar"
                    type="text"
                        id="text"
                        name="text"
                        placeholder="Try 'building mobile app'"
                        value={filterByToEdit.text}
                        onChange={onChange}
                    />
                    <button className="search-bar-btn">search</button>
            </div>
            <div className="flex">
                <p>popular:</p>
                <button className="search-suggestion" onClick={onFilterSubmit}>Website Design</button>
                <button className="search-suggestion" onClick={onFilterSubmit}>Wordpress</button>
                <button className="search-suggestion" onClick={onFilterSubmit}>logo Design</button>
                <button className="search-suggestion" onClick={onFilterSubmit}>video Editing</button>
            </div>
        </form>

}