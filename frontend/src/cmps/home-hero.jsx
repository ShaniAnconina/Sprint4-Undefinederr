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
                        // console.log(currHeroIdx)
                        if (currHeroIdx === heros.length - 1) { console.log("reseting idx"); setCurrHeroIdx(0) }
                        setCurrHeroIdx((prevValue) => (prevValue + 1) % heros.length)
                }, 3000)
                return () => clearInterval(idxRef.current)
        }, [])

        return <section className="home-hero">
                <div className="slider-container">
                        {heros[0]}
                </div>
                <h1>Find the perfect <span>freelance</span><br /> services for your business</h1>
                <GigFilter searchBtnContent='Search' placeholderTxt={`${<AiOutlineSearch />} Try \"building mobile app\"`} />
        </section>

//         return <section className='slider-container'>
//                  <div className="menu">
//         <label for="slide-dot-1"></label>
//         <label for="slide-dot-2"></label>
//         <label for="slide-dot-3"></label>
//         <label for="slide-dot-4"></label>
//         <label for="slide-dot-5"></label>
//       </div>
//       <input id="slide-dot-1" type="radio" name="slides" checked/>
//       <div className="slide slide-1"></div>
//       <input id="slide-dot-2" type="radio" name="slides"/>
//       <div className="slide slide-2"></div>
//       <input id="slide-dot-3" type="radio" name="slides"/>
//       <div className="slide slide-3"></div>
//       <input id="slide-dot-4" type="radio" name="slides"/>
//       <div className="slide slide-4"></div>
//       <input id="slide-dot-5" type="radio" name="slides"/>
//       <div className="slide slide-5"></div>
//         </section>
}