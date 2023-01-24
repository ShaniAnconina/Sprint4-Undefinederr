import { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { useSelector } from 'react-redux'

import { setfilter } from "../store/gig/gig.action.js"
import { getCategories } from '../Data/categories-data.js'

export function CategoryNav() {
    const navigate = useNavigate()
    const filterBy = useSelector(storeState => storeState.gigModule.filterBy)
    const [scroll, setScroll] = useState(false)
    const categories = getCategories()
    const titles = []

    const changeScroll = () => {
        if (window.scrollY > 100) setScroll(true)
        else setScroll(false)
    }
    window.addEventListener('scroll', changeScroll)

    for (let key in categories) {
        titles.push(key)
    }

    function OnSelectCatogery(tag) {
        let tagsToEdit = []
        tagsToEdit.push(tag) 
        let filterByToEdit = { ...filterBy, tags: tagsToEdit }
        console.log(filterByToEdit)
        setfilter(filterByToEdit)
        navigate('/gig')
    }

    return (
        <ul className={(!scroll && window.location.hash === '#/') ? 'categories-navbar before-scroll-hide' : 'categories-navbar'}>
            {titles.map((title) => <li key={title}><a onClick={() => { OnSelectCatogery(title.replace('&', 'and')) }}>{title}</a></li>)}
        </ul>
    )
}