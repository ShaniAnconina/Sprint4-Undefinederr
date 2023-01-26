import {SellerHeader} from '../cmps/seller-dashboard/seller-header.jsx'
import {OrderList} from '../cmps/seller-dashboard/order-list.jsx'
import {MiniProfile} from '../cmps/seller-dashboard/mini-profile.jsx'
import {InboxPreview} from '../cmps/seller-dashboard/inbox-preview.jsx'

import { MdKeyboardArrowDown } from 'react-icons/md'


import { useSelector} from 'react-redux'
import { useState } from 'react'


export function SellerDashboard(){

    const loggedInUser = useSelector((globalStore) => globalStore.userModule.loggedinUser)
    const [onSellerProfile, setOnSellerProfile] = useState(false)
    const [statusFilterValue, setStatusFilterValue] = useState("All")

    
    
    console.log(loggedInUser)
    
    function toggleSellerProfile(){
        setOnSellerProfile((prev) => !prev)
    }
    
    function toggleStatusFilter(){
        if (statusFilterValue === "All") setStatusFilterValue("Active")
        else setStatusFilterValue("All")

    }
    

    return <section className="seller-dashboard main-layout full">
    {/* <SellerHeader/> */}
    <a className="profile-switch" onClick={toggleSellerProfile}>Switch to { onSellerProfile ? "Buyer" : "Seller"} profile</a>
    <div className='seller-dashboard-wrapper flex space-between'>
        <div>
    <MiniProfile loggedinUser= {loggedInUser} onSellerProfile={onSellerProfile}/>
    {/* <InboxPreview/> */}
    </div>
    <div>
    <div className='flex space-between'><h1>{ onSellerProfile ? "Manage Orders" : "Manage Purchases"}</h1>
    <button className='filter-btn' onClick={toggleStatusFilter}><p>{statusFilterValue}</p></button>
    </div>
    <OrderList orders={ onSellerProfile ? loggedInUser?.miniOrders : loggedInUser?.miniPurchases} />
    </div>
    </div>

    
    </section>
}