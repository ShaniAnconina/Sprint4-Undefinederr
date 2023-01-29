import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { showErrorMsg } from '../services/event-bus.service.js'
import { userService } from '../services/user.service.js'
import { ProfileSidebar } from '../cmps/seller-dashboard/profile-sidebar.jsx'
import { DynamicTable } from '../cmps/seller-dashboard/dynamic-table.jsx'


export function SellerDashboard() {
    const navigate = useNavigate()
    const [statusModal, setStatusModal] = useState(null)

    const loggedInUser = useSelector((globalStore) => globalStore.userModule.loggedinUser)
    // const [onSellerProfile, setOnSellerProfile] = useState(false)
    // const [statusFilterValue, setStatusFilterValue] = useState("All")
    const [userType, setUserType] = useState("buyer")
    const [user, setUser] = useState(null)
    const { userId } = useParams()

    useEffect(() => {
        if (!loggedInUser || loggedInUser._id !== userId) {
            showErrorMsg()
            navigate('/')
        }
        loadUser()
    }, [])

    async function loadUser() {
        try {
            const userToSet = await userService.getById(userId)
            setUser(userToSet)
        } catch (error) {
            showErrorMsg()
            navigate('/')
        }
    }

    // function toggleSellerProfile() {
    //     setOnSellerProfile((prev) => !prev)
    // }

    // function toggleStatusFilter() {
    //     if (statusFilterValue === "All") setStatusFilterValue("Active")
    //     else setStatusFilterValue("All")
    // }

    function toggleUserType() {
        setUserType(prev => {
            if (prev === 'buyer') return 'seller'
            else return 'buyer'
        })
        setStatusModal(null)
    }

    if (!user) return <div>Loading...</div>
    return <div className="profile-page-container main-layout">
        <div className="profile-header flex">
            {userType === 'seller' && <ul>
                <li>Orders</li>
                <li>Gigs</li>
                <li>Dashboard</li>
            </ul>}
            {user.order?.length && <button onClick={toggleUserType}>{userType === 'buyer' ? 'Switch to Seller' : 'Switch to buyer'}</button>}
        </div>
        <section className="profile-page flex">
            <ProfileSidebar user={user} />
            
            <article className="main-profile">
                <DynamicTable setStatusModal={setStatusModal} statusModal={statusModal} type={userType} user={user} />
            </article>

        </section>
    </div >

    // return <section className="seller-dashboard main-layout full">


    //     <SellerHeader/>
    //     <a className="profile-switch" onClick={toggleSellerProfile}>Switch to {onSellerProfile ? "Buyer" : "Seller"} profile</a>
    //     <div className='seller-dashboard-wrapper flex space-between'>
    //         <div>
    //             <MiniProfile loggedinUser={loggedInUser} onSellerProfile={onSellerProfile} />
    //            //* <InboxPreview/>//
    //         </div>
    //         <div>
    //             <div className='flex space-between'><h1>{onSellerProfile ? "Manage Orders" : "Manage Purchases"}</h1>
    //                 <button className='filter-btn' onClick={toggleStatusFilter}><p>{statusFilterValue}</p></button>
    //             </div>
    //             <OrderList orders={onSellerProfile ? loggedInUser?.miniOrders : loggedInUser?.miniPurchases} />
    //         </div>
    //     </div>


    // </section>
}