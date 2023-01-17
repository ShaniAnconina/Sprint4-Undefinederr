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

    function handleChange({ target }) {
        let { value, name: field, type, checked } = target
        value = (type === 'number') ? +value : value
        value = (type === 'checkbox' && field === 'inStock') ? checked : value
        value = (type === 'checkbox' && field === 'desc') ? (checked ? -1 : 1) : value
        // value = (type === 'checkbox' && field === 'inStock') ? (checked ? true : false) : value
        if (!checked) value = ''
        setFilterByToEdit((prevFilter) => {
            return { ...prevFilter, [field]: value }
        })
    }

    function handleSelect(labels) {
        setSelectedOptions(labels)
        const labelsToSet = labels.length ? labels.map(i => i.value) : []
        console.log(labelsToSet)
        setFilterByToEdit((prevFilter) => ({ ...prevFilter, label: labelsToSet }))
    }

    return <section className="gigs-filter">
        <h2>Filter Them: </h2>
        <form className="filter-form">
            <div className="filters-container">
                <label htmlFor="name">By Name:
                    <input type="text"
                        id="name"
                        name="name"
                        placeholder="By Text"
                        value={filterByToEdit.name}
                        onChange={handleChange}
                    />
                </label>

                <label htmlFor="inStock">In Stock:
                    <input type="checkbox" name="inStock" id="inStock" onChange={handleChange} value={filterByToEdit.inStock} />
                </label>

                <Select
                    options={gigService.getgigLabels().map((label) => ({ value: label, label }))}
                    placeholder="Select labels"
                    value={selectedOptions}
                    onChange={handleSelect}
                    isMulti={true}
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