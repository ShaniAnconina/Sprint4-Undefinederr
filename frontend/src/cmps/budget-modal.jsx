export function BudgetModal() {

    return (
        <form id="filters" className="budget">
            <div className="min">
                <p>MIN.</p>
                <input type="number" name="min-price" className="min-price" />
                <span>$</span>
            </div>
            <div className="max">
                <p>MAX.</p>
                <input type="number" name="max-price" className="max-price" />
                <span>$</span>
            </div>
        </form>
    )
}