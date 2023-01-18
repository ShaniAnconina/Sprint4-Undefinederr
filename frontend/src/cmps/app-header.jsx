import React from 'react'
import { NavLink } from "react-router-dom";
import { CategoryNav } from './category-nav-bar.jsx'
import { GigFilter } from './gig-filter.jsx'


export function AppHeader() {


    return (
        <header className="app-header full flex column">
            <div className="lala main-layout">
                <div className="app-header-container main-layout">
                    <div className='logo-filter'>
                        <NavLink to="/"><p className="logo">fiverr<span>.</span></p></NavLink>
                        <GigFilter suggestShown={false} />
                    </div>
                    <nav>
                        <NavLink to="/gig">Explore</NavLink>
                        <p>Sign in</p>
                        <p>Join</p>
                    </nav>
                </div>
                <CategoryNav />
            </div>
        </header>
    )
}
