import { useRef } from "react";

export function DeliveryTimeModal({onSubmit}) {

const currSelect = useRef()

    function onChangeValue(event) {
        // console.log('stop');
        // event.stopPropagation()
        currSelect.current = event.target.value
      }

    return (
        <form id="filters" name="daysToMake" className="delivery" onChange={onChangeValue} onSubmit={(ev)=> onSubmit(ev,currSelect.current)}>
            <div>
                <input type="radio" id="24h" name="delivery-time" value={1} />
                <label htmlFor="24h">Express 24H</label>
            </div>
            <div>
                <input type="radio" id="3d" name="delivery-time" value={3} />
                <label htmlFor="3d">Up to 3 days</label>
            </div>
            <div>
                <input type="radio" id="7d" name="delivery-time" value={7} />
                <label htmlFor="7d">Up to 7 days</label>
            </div>
            <div>
                <input type="radio" id="anytime" name="delivery-time" value="" />
                <label htmlFor="anytime">Anytime</label>
            </div>
        </form>
    )
}