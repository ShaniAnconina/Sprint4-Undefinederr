import { useState } from 'react'
import { getCategories } from '../Data/categories-data.js'
import { setfilter } from "../store/gig/gig.action.js"
import { useNavigate } from "react-router-dom"
import { useSelector } from 'react-redux'


export function CategoryNav() {
    const categories = getCategories()
    const navigate = useNavigate()
    const titles = []
    const [scroll, setScroll] = useState(false)
    const filterBy = useSelector(storeState=>storeState.gigModule.filterBy)
    
    const changeScroll = () => {
        if (window.scrollY > 100) setScroll(true)
        else setScroll(false)
    }
    window.addEventListener('scroll', changeScroll)

    for (let key in categories) {
        titles.push(key)
    }

    function OnSelectCatogery(tag) {
        console.log("selected", tag)
        let filterByToEdit = {...filterBy, tags: tag}
        setfilter(filterByToEdit)
        navigate('/gig')
    }

    return (
        <ul className={(!scroll && window.location.hash === '#/') ? 'categories-navbar before-scroll-hide' : 'categories-navbar'}>
            {titles.map((title) => <li key={title}><a onClick={() => { OnSelectCatogery(title) }}>{title}</a></li>)}
        </ul>
    )
}