import { GigFilter } from './gig-filter.jsx'
import { AiOutlineSearch } from "react-icons/ai"

export function HomeHero() {

    return <section className='main-layout home-hero' >
        <h1>Find the perfect <span>freelance</span> services for your business</h1>
        <GigFilter searchBtnContent='Search' placeholderTxt={`${<AiOutlineSearch />} Try \"building mobile app\"`}/>
        <div className='hero-andrea seller-name max-width-container'>
                <p>Andrea,<b>Fashion Designer</b></p>
        </div>
        <div className='hero-moon seller-name max-width-container show-stars'>
                <p>Moon,<b>Marketing Expert</b></p>
        </div>
        <div className='hero-rikita seller-name max-width-container'>
                <p>Rikita,<b>Showmaker and Designer</b></p>
        </div>
        <div className='hero-zach seller-name max-width-container'>
                <p>Zach,<b>Bar Owner</b></p>
        </div>
        <div className='hero-gabriela seller-name max-width-container'>
                <p>Gabriela,<b>Video Editor</b></p>
        </div>
    </section>
}