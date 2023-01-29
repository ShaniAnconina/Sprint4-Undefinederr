import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink, Outlet, useNavigate, useParams } from 'react-router-dom'
import { showErrorMsg } from '../services/event-bus.service.js'
import { userService } from '../services/user.service.js'
import { MiniProfile } from '../cmps/user-profile/mini-profile.jsx'
import { DynamicTable } from '../cmps/user-profile/dynamic-table.jsx'


export function UserProfile() {
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
    function toggleUserType(ev) {
        // console.log(ev.target.getBoundingClientRect())
        setUserType(prev => {
            if (prev === 'buyer') return 'seller'
            else return 'buyer'
        })
        
        setStatusModal(null)
    }

    if (!user) return <div>Loading...</div>
    return <div className="profile-page-container main-layout">
        <section className="profile-page">
            <MiniProfile user={user} userType={userType} />
            <div className="main-profile">
                <div className="profile-header">
                    <div className='nav-container'>

                        {userType === 'seller' && <ul>
                           <NavLink to={'/user/:userId'}><li>Orders</li></NavLink>
                           <NavLink to={'/user/:userId/dashboard'}><li>Dashboard</li></NavLink>
                           <NavLink to={'/user/:userId/gigs'}><li>Gigs</li></NavLink>
                        </ul>}
                    </div>
                    {user.order?.length && <button onClick={(ev)=>toggleUserType(ev)}>{userType === 'buyer' ? 'Switch to seller' : 'Switch to buyer'}</button>}
                </div>

                <Outlet context={[setStatusModal, statusModal, userType, user]} />

            </div>
        </section>
    </div >
}