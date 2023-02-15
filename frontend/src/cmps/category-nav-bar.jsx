import { useNavigate } from "react-router-dom"

import { setfilter } from "../store/gig/gig.action.js"
import { gigService } from '../services/gig.service.js'

export function CategoryNav() {
    const navigate = useNavigate()
    const titles = ['Graphics & Design','Digital Marketing','Writing & Translation','Video & Animation','Music & Audio','Programming & Tech','Business','Lifestyle','Trending']

    function OnSelectCatogery(tag) {
        let tagsToEdit = []
        tagsToEdit.push(tag)
        let filterBy = gigService.getDefaultFilter()
        let filterByToEdit = { ...filterBy, tags: tagsToEdit }
        setfilter(filterByToEdit)
        navigate('/gig')
    }

    return (
        <ul className='categories-navbar'>
            {titles.map((title) => <li key={title}><a onClick={() => { OnSelectCatogery(title.replace('&', 'and')) }}>{title}</a></li>)}
        </ul>
    )
}