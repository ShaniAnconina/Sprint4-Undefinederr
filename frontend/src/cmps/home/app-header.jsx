import { NavLink } from "react-router-dom";

export function GuestAppHeader() {


    return (
        <header className="app-header">
            <div className="app-header-container">
                <NavLink to="/"><span className="logo">Fiverr.</span></NavLink>
                <nav>
                    {/* <NavLink to="/gig">Explore</NavLink> */}
                    {/* <NavLink to="/join">Join</NavLink>
                    <NavLink to="/signin">Sign in</NavLink> */}
                    <p>explore</p>
                    <p>Sign in</p>
                    <p>Join</p>
                </nav>
            </div>
        </header>
    )
}
