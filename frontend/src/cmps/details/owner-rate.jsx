import { AiFillStar } from "react-icons/ai"
import { utilService } from "../../services/util.service"

export function  OwnerRate({ count = utilService.getRandomIntInclusive(50,350), rate = 4.6 }) {
    return <>
        {rate >= 1 && <p className="stars"><AiFillStar size="15px" /></p>}
        {rate >= 2 && <p className="stars"><AiFillStar size="15px" /></p>}
        {rate >= 3 && <p className="stars"><AiFillStar size="15px" /></p>}
        {rate >= 4 && <p className="stars"><AiFillStar size="15px" /></p>}
        {rate >= 5 && <p className="stars"><AiFillStar size="15px" /></p>}
        <p>{rate}</p>
        <span>({count})</span>
    </>
}