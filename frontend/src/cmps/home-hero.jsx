import { useEffect, useState, useRef } from 'react'
import { GigFilter } from './gig-filter.jsx'
import { AiOutlineSearch } from "react-icons/ai"
import { Fragment } from 'react'
import {PopularTagSearch} from './popular-tag-search.jsx'

import img1 from '../assets/img/home/carousel/slide1.jpg';
import img2 from '../assets/img/home/carousel/slide2.jpg';
import img3 from '../assets/img/home/carousel/slide3.jpg';
import img4 from '../assets/img/home/carousel/slide4.jpg';
import img5 from '../assets/img/home/carousel/slide5.jpg';


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
        const [currImg, setCurrImg] = useState(heros[0])

        let idxRef = useRef(0)




function changeSlide(){
        console.log('working on image number ', idxRef.current)
        if (idxRef.current  === heros.length -1 ) idxRef.current=0 
        else idxRef.current ++
        setCurrImg(heros[idxRef.current])

}

        // useEffect(() => {
        //         idxRef.current = setInterval(() => {
        //                 console.log(currHeroIdx)
        //                 if (currHeroIdx === heros.length - 1) { console.log("reseting idx"); setCurrHeroIdx(0) }
        //                 setCurrHeroIdx((prevValue) => (prevValue + 1) % heros.length)
        //         }, 3000)
        //         return () => clearInterval(idxRef.current)
        // }, [])
        useEffect(() => {
                let interval = setInterval(() => {
                        setCurrHeroIdx(changeSlide)}, 5000)
                return () => clearInterval(interval)
        }, [])

        return <section className="home-hero">
                <div className="slider-container">
                        {/* {heros[0]} */}
                        {currImg}
                </div>
                <h1>Find the perfect <span>freelance</span><br /> services for your business</h1>
                <GigFilter searchBtnContent='Search' placeholderTxt={`${<AiOutlineSearch />} Try \"building mobile app\"`} />
                <PopularTagSearch/>
        </section>
}