import { useRef } from "react"

export function BudgetModal({ onSubmit }) {
    const currSelect = useRef({ min: 0, max: Infinity })

    function onChangeValue(ev) {
        if (ev.target.min) {
            currSelect.current.min = ev.target.min.value
        } else {
            currSelect.current.min = 0
        }
        if (ev.target.max !== "") {
            currSelect.current.max = ev.target.max.value
        } else {
            currSelect.current.max = Infinity
        }
        onSubmit(ev, currSelect.current)
    }

    return (
        <form id="filters" className="budget" name="budget" onSubmit={(ev) => onChangeValue(ev, currSelect.current)}>
            <div className="min">
                <p>MIN.</p>
                <div className="minmax-input">
                    <input placeholder="Any" type="number" name="min" className="min-price" />
                    <span>$</span>
                </div>
            </div>
            <div className="max">
                <p>MAX.</p>
                <div className="minmax-input">
                    <input placeholder="Any" type="number" name="max" className="max-price" />
                    <span>$</span>
                </div>
            </div>
        </form>
    )
}