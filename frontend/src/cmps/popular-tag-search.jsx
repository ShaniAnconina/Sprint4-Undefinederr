import { setfilter } from "../store/gig/gig.action.js"
import { useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom"



export function PopularTagSearch() {

    const filterBy = useSelector(storeState => storeState.gigModule.filterBy)
    const navigate = useNavigate()

    function OnSelectCatogery(tag) {
        console.log("selected", tag)
        let filterByToEdit = { ...filterBy, tags: tag }
        setfilter(filterByToEdit)
        navigate('/gig')
    }


    // return  <div className="popular-btns flex" style={{ display: suggestShown ? 'block' : 'none' }}>
    return <div className="popular-btns flex space-between">
        <div>Popular:  </div>
        <button className="search-suggestion" onClick={() => OnSelectCatogery("Graphics & Design")}>Website Design</button>
        <button className="search-suggestion" onClick={() => OnSelectCatogery("Programming & Tech")}>Wordpress</button>
        <button className="search-suggestion" onClick={() => OnSelectCatogery("Graphics & Design")}>logo Design</button>
        <button className="search-suggestion" onClick={() => OnSelectCatogery("Video & Animation")}>video Editing</button>
    </div>
}