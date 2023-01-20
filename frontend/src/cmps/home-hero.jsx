import { useEffect, useState, useRef } from 'react'
import { GigFilter } from './gig-filter.jsx'
import { AiOutlineSearch } from "react-icons/ai"
import { Fragment } from 'react'


//TODO fix the routine



export function HomeHero() {
        const heros = [
                <div className='hero hero-moon opacity'><p>Moon,<b>Marketing Expert</b></p></div>,
                <div className='hero hero-andrea opacity'><p>Andrea,<b>Fashion Designer</b></p></div>,
                <div className='hero hero-rikita opacity'><p>Rikita,<b>Showmaker and Designer</b></p></div>,
                <div className='hero hero-zach opacity'><p>Zach,<b>Bar Owner</b></p></div>,
                <div className='hero hero-gabriela opacity'><p>Gabriela,<b>Video Editor</b></p></div>
        ]

        const [currHeroIdx, setCurrHeroIdx] = useState(0)
        const idxRef = useRef()


        useEffect(() => {
                idxRef.current = setInterval(() => {
                        console.log(currHeroIdx)
                        if (currHeroIdx === heros.length - 1) { console.log("reseting idx"); setCurrHeroIdx(0) }
                        setCurrHeroIdx((prevValue) => (prevValue + 1) % heros.length)
                }, 3000)
                return () => clearInterval(idxRef.current)
        }, [])

        return <Fragment><section className="home-hero">
                <div className="cover-images">
                        {heros[0]}
                </div>
                <h1>Find the perfect <span>freelance</span><br /> services for your business</h1>
                <GigFilter searchBtnContent='Search' placeholderTxt={`${<AiOutlineSearch />} Try \"building mobile app\"`} />
        </section>
        <ul className='trusted-by flex none-list-style align-center justify-center'>
                <span><li>Trusted By:</li></span>
                <li><img src='../assets/img/home/trustedBy/facebook.png'/></li>
                <li><img src='../assets/img/home/trustedBy/google.png'/></li>
                <li><img src='../assets/img/home/trustedBy/netflix.png'/></li>
                <li><img src='../assets/img/home/trustedBy/pandg.png'/></li>
                <li><img src='../assets/img/home/trustedBy/paypal.png'/></li>
        </ul>
        </Fragment>
}