import { NavLink } from "react-router-dom"
import { SiTwitter, SiFacebook, SiLinkedin, SiPinterest, SiInstagram } from 'react-icons/si'
import { GrLanguage } from 'react-icons/gr'
import { BiDollar } from 'react-icons/bi'
import { RxAccessibility } from 'react-icons/rx'

export function AppFooter() {

    return <section className="footer main-layout">
        <div className="flex space-between">
            <div className="footer-logo-left flex align-center space-around">
                <NavLink to="/" className='footer-logo before-scroll-txt'>undefinderr<span>&reg;</span></NavLink>
                <p className="coffee-rights">&copy; Fiverr International Ltd. 2023</p>
            </div >
            <div className='footer-logo-right flex align-center space-around'>
                <div className="social-links flex">
                        <div className="social-icon-container"><SiTwitter size='20'/></div>
                        <div className="social-icon-container"><SiFacebook size='20'/></div>
                        <div className="social-icon-container"><SiLinkedin size='20'/></div>
                        <div className="social-icon-container"><SiPinterest size='20'/></div>
                        <div className="social-icon-container"><SiInstagram size='20'/></div>
                        </div>
                <div className="language-currency flex">
                <div className="language-currency-container"><GrLanguage size='16' /></div>
                    <p>English</p>
                </div>
                <div className="language-currency flex">
                <div className="language-currency-container"><BiDollar size='16'/></div>
                    <p>Dollar</p>
                </div>
                <div className="accessability-container"><RxAccessibility size='32'/></div>
            </div>
        </div>
    </section>
}
