import { MdKeyboardArrowDown } from 'react-icons/md';
import { SwitchBtn } from './switch-btn';

export function ExploreFilter() {


    return (
        <section className="explore-filter">
            <div className="left-filters">
                <button><div><p>Service Options</p><MdKeyboardArrowDown /></div></button>
                {/* <button><div><p>Seller Details</p><MdKeyboardArrowDown /></div></button> */}
                <button><div><p>Budget</p><MdKeyboardArrowDown /></div></button>
                <button><div><p>Delivery Time</p><MdKeyboardArrowDown /></div></button>
            </div>
            <div className="right-filters">
                <SwitchBtn />
                <p>Pro services</p>
            </div>
        </section>
    )
}