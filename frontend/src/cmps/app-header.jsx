import React from 'react'
import { NavLink } from "react-router-dom";

export function AppHeader() {


    return (
        <header className="app-header">
            <div className="app-header-container">
                <NavLink to="/"><span className="logo">Fiverr.</span></NavLink>
                <nav>
                    <NavLink to="/gig">Explore</NavLink>
                    <p>Sign in</p>
                    <p>Join</p>
                </nav>
            </div>
        </header>
    )
}
