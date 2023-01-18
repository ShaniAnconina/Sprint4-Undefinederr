import {GigFilter} from '../cmps/gig-filter.jsx'
export function HomeHero(){

    return <section className='home-hero'>
        <h1>Find the perfect <span>freelance</span> services for your business</h1>
        <GigFilter/>
        <div className='hero-backgrounds'>
            <div className='hero-andrea' style={{opacity: 1}}>
                <div className='seller-name max-width-container'>
                    <p>Andrea,<b>Fashion Designer</b></p>
                </div>
            </div>
            <div className='hero-moon' style={{opacity: 0}}>
                <div className='seller-name max-width-container show-stars'>
                    <p>Moon,<b>Marketing Expert</b></p>
                </div>
            </div>
            <div className='hero-rikita' style={{opacity: 0}}>
                <div className='seller-name max-width-container'>
                    <p>Rikita,<b>Showmaker and Designer</b></p>
                </div>
            </div>
            <div className='hero-zach' style={{opacity: 0}}>
                <div className='seller-name max-width-container'>
                    <p>Zach,<b>Bar Owner</b></p>
                </div>
            </div>
            <div className='hero-gabriela' style={{opacity: 0}}>
                <div className='seller-name max-width-container'>
                    <p>Gabriela,<b>Video Editor</b></p>
                </div>
            </div>

        </div>
        </section>
}