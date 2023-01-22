import { useEffect, useState, useRef } from 'react'

import { PopularTagSearch } from './popular-tag-search'
import { GigFilter } from '../gig-filter'

// import { AiOutlineSearch } from "react-icons/ai"

export function HomeHero() {
        let idxRef = useRef(0)

        const heros = [
                <div className='hero hero-moon opacity'><p>Moon,<b>Marketing Expert</b></p></div>,
                <div className='hero hero-andrea opacity'><p>Andrea,<b>Fashion Designer</b></p></div>,
                <div className='hero hero-rikita opacity'><p>Rikita,<b>Showmaker and Designer</b></p></div>,
                <div className='hero hero-zach opacity'><p>Zach,<b>Bar Owner</b></p></div>,
                <div className='hero hero-gabriela opacity'><p>Gabriela,<b>Video Editor</b></p></div>
        ]

        const [currImg, setCurrImg] = useState(heros[0])

        function changeSlide() {
                if (idxRef.current === heros.length - 1) idxRef.current = 0
                else idxRef.current++
                setCurrImg(heros[idxRef.current])
        }

        useEffect(() => {
                let interval = setInterval(changeSlide, 5000)
                return () => clearInterval(interval)
        }, [])

        return <section className="home-hero">
                <div className='home-hero-content'>
                        <div className="slider-container">
                                {/* {heros[0]} */}
                                {currImg}
                        </div>
                        <h1>Find the perfect <span>freelance</span><br /> services for your business</h1>
                        <GigFilter searchBtnContent='Search' placeholderTxt={`Try \"building mobile app\"`} />
                        <PopularTagSearch />
                </div>
        </section>
}