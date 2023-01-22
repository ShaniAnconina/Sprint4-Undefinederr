import { AiFillStar } from "react-icons/ai"

export function  OwnerRate({ rate }) {
    return <>
        {rate >= 1 && <p className="stars"><AiFillStar size="15px" /></p>}
        {rate >= 2 && <p className="stars"><AiFillStar size="15px" /></p>}
        {rate >= 3 && <p className="stars"><AiFillStar size="15px" /></p>}
        {rate >= 4 && <p className="stars"><AiFillStar size="15px" /></p>}
        {rate >= 5 && <p className="stars"><AiFillStar size="15px" /></p>}
        <p>{rate}</p>
        <span>(37)</span>
    </>
}