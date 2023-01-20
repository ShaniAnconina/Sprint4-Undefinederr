import { AiFillStar } from "react-icons/ai"

export function ReviewRate({ rate }) {

    return <span className="stars flex" > 
        {rate >= 1 && <p><AiFillStar size="15px" /></p>}
        {rate >= 2 && <p><AiFillStar size="15px" /></p>}
        {rate >= 3 && <p><AiFillStar size="15px" /></p>}
        {rate >= 4 && <p><AiFillStar size="15px" /></p>}
        {rate >= 5 && <p><AiFillStar size="15px" /></p>}
        <p>{rate}</p>
    </span>
}