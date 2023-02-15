import { Link } from "react-router-dom"
import { SlArrowRight } from "react-icons/sl"

export function BreadCrumbs({ filterBy }) {

    return <div className="breadcrumds flex align-center" >
        <Link to={'/'} > <button className='open-btn category' >Home Page</button> </Link>
        <span><SlArrowRight size="10px" /></span>
        <Link to={'/gig'}> <button className='open-btn subcategory' >All Gigs</button> </Link>
        {filterBy.tags.length > 0 && <span><SlArrowRight size="10px" /></span>}
        {filterBy.tags.length > 0 && <Link to={`/gig?filterBy=${filterBy.tags}`}> <button className='open-btn category'>{filterBy.tags[0].replace('and', '&')}</button> </Link>}
    </div>
}