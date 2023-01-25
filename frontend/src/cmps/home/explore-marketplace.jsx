import graphicDesignSVG from '../../assets/img/home/explore-marketplace/graphics-design.svg'
import businessSVG from '../../assets/img/home/explore-marketplace/business.svg'
import lifestyleSVG from '../../assets/img/home/explore-marketplace/lifestyle.svg'
import musicAudioSVG from '../../assets/img/home/explore-marketplace/music-audio.svg'
import digitalMarketingSVG from '../../assets/img/home/explore-marketplace/digital-marketing.svg'
import photographySVG from '../../assets/img/home/explore-marketplace/photography.svg'
import programmingSVG from '../../assets/img/home/explore-marketplace/programming.svg'
import videoAnimationSVG from '../../assets/img/home/explore-marketplace/video-animation.svg'
import writinTranslationSVG from '../../assets/img/home/explore-marketplace/writing-translation.svg'


export function ExploreMarketplace(){

    return <section className="explore-marketplace-container main-layout">
    <h2>Explore the marketplace</h2>
    <div className="categories-list">
<a href="" className='flex column'>
    <img src={graphicDesignSVG} alt="Graphics & Design"/>
    Graphics & Design
</a>
<a href="" className='flex column'>
    <img src={businessSVG} alt="Business"/>
    Business
</a>
<a href="" className='flex column'>
    <img src={lifestyleSVG} alt="lifestyle"/>
    Lifestyle
</a>
<a href="" className='flex column'>
    <img src={musicAudioSVG} alt="Music & Audio"/>
    music & Audio
</a>
<a href="" className='flex column'>
    <img src={digitalMarketingSVG} alt="Digital Marketing"/>
    Digital Marketing
</a>
<a href="" className='flex column'>
    <img src={writinTranslationSVG} alt="Writing & Translation"/>
    Writing & Translation
</a>
<a href="" className='flex column'>
    <img src={videoAnimationSVG} alt="Video & Animation"/>
    Video & Animation
</a>
<a href="" className='flex column'>
    <img src={programmingSVG} alt="Programming & Tech"/>
    Programming & Tech
</a>
    </div>

    </section>
}