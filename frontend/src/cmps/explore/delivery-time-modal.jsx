import { useState,useRef } from "react"

export function DeliveryTimeModal({onSubmit}) {

const [value, setValue] = useState("")

    function onChangeValue(event) {
        // console.log('stop')
        // event.stopPropagation()
        setValue(event.target.value)
      }

    return (
        <form id="filters" name="daysToMake" className="delivery"  onChange={onChangeValue} onSubmit={(ev)=> onSubmit(ev,value)}>
            <div>
                <input type="radio" id="24h" name="delivery-time" value={1} onChange={onChangeValue} checked={(value==1)? true:false}/>
                <label htmlFor="24h">Express 24H</label>
            </div>
            <div>
                <input type="radio" id="3d" name="delivery-time" value={3} onChange={onChangeValue} checked={(value==3)? true:false}/>
                <label htmlFor="3d">Up to 3 days</label>
            </div>
            <div>
                <input type="radio" id="7d" name="delivery-time" value={7} onChange={onChangeValue} checked={(value==7)? true:false}/>
                <label htmlFor="7d">Up to 7 days</label>
            </div>
            <div>
                <input type="radio" id="anytime" name="delivery-time" value="" checked={(value=="")? true:false}/>
                <label htmlFor="anytime">Anytime</label>
            </div>
        </form>
    )
}