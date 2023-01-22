import { setfilter } from "../../store/gig/gig.action.js"
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
    return (
        <div className="popular-tag-search ">
            <p>Popular:  </p>
            <div className="popular-btns">
                <button className="search-suggestion" onClick={() => OnSelectCatogery("Graphics and Design")}><a>Website Design</a></button>
                <button className="search-suggestion" onClick={() => OnSelectCatogery("Programming and Tech")}><a>Wordpress</a></button>
                <button className="search-suggestion" onClick={() => OnSelectCatogery("Graphics and Design")}><a>logo Design</a></button>
                <button className="search-suggestion" onClick={() => OnSelectCatogery("Video and Animation")}><a>video Editing</a></button>
            </div>
        </div>
    )
}