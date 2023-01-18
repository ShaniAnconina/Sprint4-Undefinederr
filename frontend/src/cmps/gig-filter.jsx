//TODO Adjust to our needs
//TODO create filter template in service

import { useEffect, useRef, useState } from "react"
import Select from "react-select";

import { gigService } from "../services/gig.service.js"
import { utilService } from "../services/util.service.js"


export function GigFilter({ onSetFilterBy }) {

    const [filterByToEdit, setFilterByToEdit] = useState(gigService.getDefaultFilter())
    const [selectedOptions, setSelectedOptions] = useState();

    onSetFilterBy = useRef(utilService.debounce(onSetFilterBy, 500))

    useEffect(() => {
        onSetFilterBy.current(filterByToEdit)
    }, [filterByToEdit])


    function onSubmit(){}
    
    return <section className="gigs-filter">
        <h2>Filter Them: </h2>
        <form className="filter-form">
            <div className="filters-container">
                    <input type="text"
                        id="name"
                        name="name"
                        placeholder="By Text"
                        value={filterByToEdit.name}
                    />
    
            </div>
            <hr />
            <h2>Sort Them:</h2>
            <div className="sort-container">

                <label htmlFor="sort">Sort By:
                    <select id="sort" name="sortBy" onChange={handleChange} value={filterByToEdit.sortBy}>
                        <option value="">Choose</option>
                        <option value="name">Name</option>
                        <option value="created">Created At</option>
                        <option value="price">Price</option>
                    </select>
                </label>
                <label htmlFor="desc">Descending:
                    <input name="desc" id="desc" type="checkbox" value={filterByToEdit.desc} onChange={handleChange} />
                </label>
            </div>

        </form>

    </section>
}