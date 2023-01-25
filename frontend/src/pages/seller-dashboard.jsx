import {SellerHeader} from '../cmps/seller-dashboard/seller-header.jsx'
import {OrderList} from '../cmps/seller-dashboard/order-list.jsx'
import {MiniProfile} from '../cmps/seller-dashboard/mini-profile.jsx'

import { useSelector} from 'react-redux'


export function SellerDashboard(){

    const loggedInUser = useSelector((globalStore) => globalStore.userModule.loggedInUser)

    console.log(loggedInUser)

    return <section className="seller-dashboard main-layout full">
    <SellerHeader/>
    <div className='seller-dashboard-wrapper flex space-between'>
        <div>
    <MiniProfile/>
    </div>
    <OrderList/>
    </div>

    
    </section>
}