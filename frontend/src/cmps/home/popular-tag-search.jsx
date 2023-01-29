import { useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom"


import { setfilter } from "../../store/gig/gig.action.js"
import { gigService } from '../../services/gig.service.js'
import { useState } from 'react'

export function PopularTagSearch() {

    const [filterBy,setFilterBy] = useState(gigService.getDefaultFilter())
    const navigate = useNavigate()

    function OnSelectCatogery(tag) {
        let tags = filterBy.tags
        tags.push(tag)
        let filterByToEdit = { ...filterBy, tags: tags }
        setfilter(filterByToEdit)
        navigate(`/gig?tags=${tag}`)
    }

    return (
        <div className="popular-tag-search ">
            <p>Popular:  </p>
            <div className="popular-btns">
                <button className="search-suggestion" onClick={() => OnSelectCatogery("Graphics and Design")}><a>Website Design</a></button>
                <button className="search-suggestion" onClick={() => OnSelectCatogery("Programming and Tech")}><a>Wordpress</a></button>
                <button className="search-suggestion" onClick={() => OnSelectCatogery("Graphics and Design")}><a>Logo Design</a></button>
                <button className="search-suggestion" onClick={() => OnSelectCatogery("Video and Animation")}><a>Video Editing</a></button>
            </div>
        </div>
    )
}