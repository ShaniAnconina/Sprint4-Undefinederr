import { NavLink } from "react-router-dom"
import { SiTwitter, SiFacebook, SiLinkedin, SiPinterest, SiInstagram } from 'react-icons/si'
import { GrLanguage } from 'react-icons/gr'
import { BiEuro } from 'react-icons/bi'
import { RxAccessibility } from 'react-icons/rx'

export function AppFooter() {


    return <section className="footer main-layout">
        <div className="flex space-between">
        <div className="footer-logo-left flex align-center space-around">
            <NavLink to="/" className='logo before-scroll-txt'>fiverr<span>.</span></NavLink>
            <p className="coffee-rights">&copy; Fiverr International Ltd. 2023</p>
        </div >
        <div className='footer-logo-right flex align-center space-around'>
            <SiTwitter />
            <SiFacebook />
            <SiLinkedin />
            <SiPinterest />
            <SiInstagram />
            <div className="flex">
                <GrLanguage />
                <p>English</p>
            </div>
            <div className="flex">
                <BiEuro />
                <p>Euro</p>
            </div>
            <RxAccessibility />
            </div>
            </div>
    </section>
}
