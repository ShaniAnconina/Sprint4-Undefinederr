import { useEffect, useState } from 'react'
import { NavLink, Outlet, useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { MiniProfile } from '../cmps/user-profile/mini-profile'
import { Loader } from '../cmps/home/loader'

import { showErrorMsg } from '../services/event-bus.service.js'
import { userService } from '../services/user.service.js'

export function UserProfile() {
    const navigate = useNavigate()
    const [statusModal, setStatusModal] = useState(null)

    const loggedInUser = useSelector((globalStore) => globalStore.userModule.loggedinUser)
    const [viewType, setViewType] = useState("buyer")
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
    function toggleViewType(ev) {
        setViewType(prev => {
            if (prev === 'buyer') return 'seller'
            else return 'buyer'
        })
        navigate(`/user/${userId}/order`)
        setStatusModal(null)
    }

    if (!user) return <Loader/>
    return <div className="profile-page-container main-layout">
        <section className="profile-page">
            <MiniProfile user={user} userType={viewType} />
            <div className="main-profile">
                <div className="profile-header">
                    <div className='nav-container'>
                        {viewType === 'seller' && <ul>
                            <NavLink to={`/user/${userId}/order`}><li>Orders</li></NavLink>
                            <NavLink to={`/user/${userId}/dashboard`}><li>Dashboard</li></NavLink>
                            <NavLink to={`/user/${userId}/gigs`}><li>Gigs</li></NavLink>
                        </ul>}
                    </div>
                    {user.order?.length && <button onClick={(ev) => toggleViewType(ev)}>{viewType === 'buyer' ? 'Switch to seller' : 'Switch to buyer'}</button>}
                </div>
                <Outlet context={[setStatusModal, statusModal, viewType, user]} />
            </div>
        </section>
    </div >
}