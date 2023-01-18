import React from 'react'
import { NavLink } from "react-router-dom";
import {CategoryNav} from './category-nav-bar.jsx'
import {GigFilter} from './gig-filter.jsx'


export function AppHeader() {


    return (
        <header className="app-header flex column">
            <div className="app-header-container">
                <NavLink to="/"><span className="logo">Fiverr.</span></NavLink>
                <GigFilter suggestShown={false}/>
                <nav>
                    <NavLink to="/gig">Explore</NavLink>
                    <p>Sign in</p>
                    <p>Join</p>
                </nav>
            </div>
                <CategoryNav/>
        </header>
    )
}
