import React from 'react'
import { NavLink } from "react-router-dom";
import { CategoryNav } from './category-nav-bar.jsx'
import { GigFilter } from './gig-filter.jsx'
import { RiNotification3Line } from "react-icons/ri"
import { AiOutlineSearch } from "react-icons/ai"
import { BiEnvelope } from "react-icons/bi"
import { FaRegHeart } from "react-icons/fa"
import { useSelector } from 'react-redux';
import { useState } from 'react';


export function AppHeader() {
    const { loggedinUser } = useSelector((storeState) => storeState.gigModule)
    const [scroll, setScroll] = useState(false)
    const changeScroll = () => {
        if (window.scrollY > 0) setScroll(true)
        else setScroll(false)
    }
    window.addEventListener('scroll', changeScroll)

    return (
        <header className={(scroll && window.location.hash === '#/') ? 'app-header scroll full' : 'app-header full'}>
            <div className="main-layout">
                <div className="top-header">
                    <div className="logo-filter">
                        <NavLink to="/" className={(!scroll && window.location.hash === '#/') ? 'logo before-scroll-txt' : 'logo'}>fiverr<span>.</span></NavLink>
                        {/* <NavLink to="/" className="logo before-scroll-txt">fiverr<span>.</span></NavLink> */}
                        <GigFilter suggestShown={false} searchBtnContent={<AiOutlineSearch />} placeholderTxt="What service are you looking for today?" />
                    </div>
                    {loggedinUser && <nav className="homepage-nav">
                        <span className="icon" title="Notifications"><RiNotification3Line size="22px" /></span>
                        <span className="icon" title="Messages"><BiEnvelope size="22px" /></span>
                        <span className="icon" title="Lists"><FaRegHeart size="18px" /></span>
                        <p className="orders">Orders</p>
                        <img className="user-img" src="https://i.pinimg.com/280x280_RS/2e/45/66/2e4566fd829bcf9eb11ccdb5f252b02f.jpg" />
                    </nav>}
                    {!loggedinUser && <nav className="explore-nav">
                        <NavLink to="/gig" className={(!scroll && window.location.hash === '#/') ? 'explore before-scroll-txt' : 'explore'}>Explore</NavLink>
                        {/* <NavLink to="/gig" className="explore">Explore</NavLink> */}
                        <p className={(!scroll && window.location.hash === '#/') ? 'signin before-scroll-txt' : 'signin'}>Sign in</p>
                        {/* <p className="signin">Sign in</p> */}
                        <p className={(!scroll && window.location.hash === '#/') ? 'join before-scroll-txt' : 'join'}>Join</p>
                        {/* <p className="join">Join</p> */}
                    </nav>}
                </div>
            </div>
            <div className="bottom-header main-layout">
                <CategoryNav />
            </div>
        </header>
    )
}
