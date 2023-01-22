import { NavLink } from "react-router-dom"

export function AppFooter() {


    return <section className="footer flex space-between">
        <div className="footer-logo-left flex align-center">
        <NavLink to="/" className='logo before-scroll-txt'>fiverr<span>.</span></NavLink>
        <p className="coffee-rights">c Fiverr International Ltd. 2023</p>
        </div >
        <div className='footer-logo-right flex align-center'>
            <h1>hello from app footer</h1>
            </div>
        </section>
}
