import {SellerHeader} from '../cmps/seller-dashboard/seller-header.jsx'
import {OrderList} from '../cmps/seller-dashboard/order-list.jsx'
import {MiniProfile} from '../cmps/seller-dashboard/mini-profile.jsx'

import { useSelector} from 'react-redux'


export function SellerDashboard(){

    const loggedInUser = useSelector((globalStore) => globalStore.userModule.loggedinUser)

    console.log(loggedInUser)

    return <section className="seller-dashboard main-layout full">
    <SellerHeader/>
    <div className='seller-dashboard-wrapper flex space-between'>
        <div>
    <MiniProfile loggedinUser= {loggedInUser}/>
    </div>
    <OrderList orders={loggedInUser.miniOrders}/>
    </div>

    
    </section>
}