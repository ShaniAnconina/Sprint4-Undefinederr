import React, { useEffect } from 'react'
import { NavLink } from "react-router-dom"
import { CategoryNav } from './category-nav-bar.jsx'
import { GigFilter } from './gig-filter.jsx'
import { LoginSignUp } from './logInsignUp.jsx'
import { RiNotification3Line } from "react-icons/ri"
import { AiOutlineSearch } from "react-icons/ai"
import { BiEnvelope } from "react-icons/bi"
import { FaRegHeart } from "react-icons/fa"
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { LoginSignUp } from './logInsignUp.jsx'
import { eventBus, JOIN_USER } from '../services/event-bus.service.js'

export function AppHeader({ elApp }) {
    const { loggedinUser } = useSelector((storeState) => storeState.userModule)
    const [scroll, setScroll] = useState(false)
    const [openModal, setOpenModal] = useState(null)
    const { hash } = window.location

    useEffect(() => {
        eventBus.on(JOIN_USER, () => setOpenModal('signup'))
    }, [])
    
    const changeScroll = () => {
        if (window.scrollY > 0) setScroll(true)
        else setScroll(false)
    }
    window.addEventListener('scroll', changeScroll)

    return (
        <header className={(scroll && hash === '#/') ? 'app-header scroll-bg full' : 'app-header full'}>
            <div className="main-layout">
                <div className="top-header">
                    <div className="logo-filter">
                        <NavLink to="/" className={(!scroll && hash === '#/') ? 'logo before-scroll-txt' : 'logo'}>fiverr<span>.</span></NavLink>
                        <GigFilter suggestShown={false} searchBtnContent={<AiOutlineSearch />} placeholderTxt="What service are you looking for today?" />
                    </div>
                    {loggedinUser && <nav className="homepage-nav">
                        <span className={(!scroll && hash === '#/') ? 'icon before-scroll-txt' : 'icon'} title="Notifications"><RiNotification3Line size="22px" /></span>
                        <span className={(!scroll && hash === '#/') ? 'icon before-scroll-txt' : 'icon'} title="Messages"><BiEnvelope size="22px" /></span>
                        <span className={(!scroll && hash === '#/') ? 'icon before-scroll-txt' : 'icon'} title="Lists"><FaRegHeart size="18px" /></span>
                        <p className={(!scroll && hash === '#/') ? 'orders before-scroll-txt' : 'orders'}>Orders</p>
                        <img className="user-img" src="https://i.pinimg.com/280x280_RS/2e/45/66/2e4566fd829bcf9eb11ccdb5f252b02f.jpg" />
                    </nav>}
                    {!loggedinUser && <nav className="explore-nav">
                        <NavLink to="/gig" className={(!scroll && hash === '#/') ? 'explore before-scroll-txt' : 'explore'}>Explore</NavLink>
                        <button onClick={() => setOpenModal('login')} className={(!scroll && hash === '#/') ? 'signin before-scroll-txt' : 'signin'}>Sign in</button>
                        <button onClick={() => setOpenModal('signup')} className={(!scroll && hash === '#/') ? 'join before-scroll-txt' : 'join'}>Join</button>
                    </nav>}
                </div>
            </div>
            <div className={(!scroll && hash === '#/') ? 'bottom-header main-layout before-scroll-borders' : 'bottom-header main-layout'}>
                <CategoryNav />
            </div>
            {openModal && <LoginSignUp elApp={elApp} setOpenModal={setOpenModal} status={openModal} />}
        </header>
    )
}
