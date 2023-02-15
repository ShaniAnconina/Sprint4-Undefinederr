import { Link } from 'react-router-dom'

import graphicDesignSVG from '../../assets/img/home/explore-marketplace/graphics-design.svg'
import businessSVG from '../../assets/img/home/explore-marketplace/business.svg'
import lifestyleSVG from '../../assets/img/home/explore-marketplace/lifestyle.svg'
import musicAudioSVG from '../../assets/img/home/explore-marketplace/music-audio.svg'
import digitalMarketingSVG from '../../assets/img/home/explore-marketplace/digital-marketing.svg'
import photographySVG from '../../assets/img/home/explore-marketplace/photography.svg'
import programmingSVG from '../../assets/img/home/explore-marketplace/programming.svg'
import videoAnimationSVG from '../../assets/img/home/explore-marketplace/video-animation.svg'
import writinTranslationSVG from '../../assets/img/home/explore-marketplace/writing-translation.svg'
import dataSVG from '../../assets/img/home/explore-marketplace/data.svg'

export function ExploreMarketplace() {
    return <section className="explore-marketplace-container main-layout">
        <h2>Explore the marketplace</h2>
        <div className="categories-list">
            <Link to="/gig?tags=Graphics and Design"  className='flex column' >
                <img src={graphicDesignSVG} alt="Graphics & Design" />
                <div className='seperate-line'></div>
                Graphics
            </Link >
            <Link to="/gig?tags=Business" className='flex column'>
                <img src={businessSVG} alt="Business" />
                <div className='seperate-line'></div>
                Business
            </Link>
            <Link to="/gig?tags=lifestyle" className='flex column'>
                <img src={lifestyleSVG} alt="lifestyle" />
                <div className='seperate-line'></div>
                Lifestyle
            </Link>
            <Link to="/gig?tags=Music and Audio" className='flex column'>
                <img src={musicAudioSVG} alt="Music & Audio" />
                <div className='seperate-line'></div>
                music & Audio
            </Link>
            <Link to="/gig?tags=Digital Marketing" className='flex column'>
                <img src={digitalMarketingSVG} alt="Digital Marketing" />
                <div className='seperate-line'></div>
                Digital Marketing
            </Link>
            <Link to="/gig?tags=Writing and Translation" className='flex column'>
                <img src={writinTranslationSVG} alt="Writing & Translation" />
                <div className='seperate-line'></div>
                Writing & Translation
            </Link>
            <Link to="/gig?tags=Video and Animation" className='flex column'>
                <img src={videoAnimationSVG} alt="Video & Animation" />
                <div className='seperate-line'></div>
                Video & Animation
            </Link>
            <Link to="/gig?tags=Programming and Tech" className='flex column'>
                <img src={programmingSVG} alt="Programming & Tech" />
                <div className='seperate-line'></div>
                Programming
            </Link>
            <Link to="/gig?tags=Programming and Tech" className='flex column'>
                <img src={photographySVG} alt="Tech" />
                <div className='seperate-line'></div>
                Tech
            </Link>
            <Link to="/gig?tags=Graphics and Design" className='flex column'>
                <img src={dataSVG} alt="Design" />
                <div className='seperate-line'></div>
                Design
            </Link>
        </div>
    </section>
}