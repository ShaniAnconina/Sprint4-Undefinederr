



export function OrderList(orders) {

    return (
        <table className="orders-table">
            <thead>
                <tr>
                    <th>BUYER</th>
                    <th>GIG</th>
                    <th>DUE ON</th>
                    <th>DELIVERED AT</th>
                    <th>TOTAL</th>
                    <th>STATUS</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                    <td>5</td>
                    <td>6</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                    <td>5</td>
                    <td>6</td>
                </tr>
            </tbody>
        </table>
    );

}