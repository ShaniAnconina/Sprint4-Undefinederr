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
    function toggleUserType() {
        setUserType(prev => {
            if (prev === 'buyer') return 'seller'
            else return 'buyer'
        })
        setStatusModal(null)
    }

    if (!user) return <div>Loading...</div>
    return <div className="profile-page-container main-layout">
        <section className="profile-page">
            <ProfileSidebar user={user} />
            <div className="main-profile">
                <div className="profile-header">
                    <div className='nav-container'>
                        {userType === 'seller' && <ul>
                            <li>Dashboard</li>
                            <li>Orders</li>
                            <li>Gigs</li>
                        </ul>}
                    </div>
                    {user.order?.length && <button onClick={toggleUserType}>{userType === 'buyer' ? 'Switch to seller' : 'Switch to buyer'}</button>}
                </div>
                <DynamicTable setStatusModal={setStatusModal} statusModal={statusModal} type={userType} user={user} />
            </div>
        </section>
    </div >
}