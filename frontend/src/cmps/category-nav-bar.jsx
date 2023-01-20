import { useState } from 'react'
import { getCategories } from '../services/categories-data.js'

export function CategoryNav() {
    const categories = getCategories()
    const titles = []
    const [scroll, setScroll] = useState(false)
    const changeScroll = () => {
        if (window.scrollY > 100) setScroll(true)
        else setScroll(false)
    }
    window.addEventListener('scroll', changeScroll)

    for (let key in categories) {
        titles.push(key)
    }

    function OnSelectCatogery(title) {
        console.log("selected", title)
    }

    return (
        <ul className={(!scroll && window.location.hash === '#/') ? 'categories-navbar before-scroll-hide' : 'categories-navbar'}>
            {titles.map((title) => <li key={title}><a onClick={() => { OnSelectCatogery(title) }}>{title}</a></li>)}
        </ul>
    )
}