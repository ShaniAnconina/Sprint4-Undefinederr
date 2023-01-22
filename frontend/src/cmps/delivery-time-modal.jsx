export function DeliveryTimeModal() {


    return (
        <form id="filters" className="delivery">
            <div>
                <input type="radio" id="24h" name="delivery-time" value="24h" />
                <label for="24h">Express 24H</label>
            </div>
            <div>
                <input type="radio" id="3d" name="delivery-time" value="3d" />
                <label for="3d">Up to 3 days</label>
            </div>
            <div>
                <input type="radio" id="7d" name="delivery-time" value="7d" />
                <label for="7d">Up to 7 days</label>
            </div>
            <div>
                <input type="radio" id="anytime" name="delivery-time" value="" checked />
                <label for="anytime">Anytime</label>
            </div>
        </form>
    )
}