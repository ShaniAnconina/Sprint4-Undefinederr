import React from 'react'
import { NavLink } from "react-router-dom";
import { CategoryNav } from './category-nav-bar.jsx'
import { GigFilter } from './gig-filter.jsx'
import { RiNotification3Line } from "react-icons/ri"
import { AiOutlineSearch } from "react-icons/ai"
import { BiEnvelope } from "react-icons/bi"
import { FaRegHeart } from "react-icons/fa"
import { useSelector } from 'react-redux';


export function AppHeader() {
    const { loggedinUser } = useSelector((storeState) => storeState.gigModule)

    return (
        <header className="app-header full flex column">
            <div className="main-layout">
                <div className="top-header">
                    <div className="logo-filter">
                        <NavLink to="/" className="logo">fiverr<span>.</span></NavLink>
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
                        <NavLink to="/gig" className="explore">Explore</NavLink>
                        <p className="signin">Sign in</p>
                        <p className="join">Join</p>
                    </nav>}
                </div>
            </div>
            <div className="bottom-header main-layout">
                <CategoryNav />
            </div>
        </header>
    )
}
