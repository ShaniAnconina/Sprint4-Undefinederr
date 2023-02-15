import { useEffect, useState } from 'react'

import { PopularTagSearch } from './popular-tag-search'
import { GigFilter } from '../gig-filter'

export function HomeHero() {
        const [imgIdx, setImgIdx] = useState(0)

        function changeSlide() {
                setImgIdx((prev) => (prev === 4) ? 0 : prev + 1)
        }

        useEffect(() => {
                let interval = setInterval(changeSlide, 5000)
                return () => clearInterval(interval)
        }, [])

        return <section className="home-hero">
                <div className='home-hero-content'>
                        <div className="slider-container">
                                <div className={`hero hero-valentina ${imgIdx === 0 ? "opacity" : ""}`}><p>Valentina,<b>AI Artist</b></p></div>
                                <div className={`hero hero-moon ${imgIdx === 1 ? "opacity" : ""}`}><p>Moon,<b>Marketing Expert</b></p></div>
                                <div className={`hero hero-andrea ${imgIdx === 2 ? "opacity" : ""}`}><p>Andrea,<b>Fashion Designer</b></p></div>
                                <div className={`hero hero-rikita ${imgIdx === 3 ? "opacity" : ""}`}><p>Rikita,<b>Showmaker and Designer</b></p></div>
                                <div className={`hero hero-zach ${imgIdx === 4 ? "opacity" : ""}`}><p>Zach,<b>Bar Owner</b></p></div>
                        </div>
                        <h1>Find the perfect <span>freelance</span><br /> services for your business</h1>
                        <GigFilter searchBtnContent='Search' placeholderTxt={`Try \"building mobile app\"`} inHomeHero={true} />
                        <PopularTagSearch />
                </div>
        </section>
}