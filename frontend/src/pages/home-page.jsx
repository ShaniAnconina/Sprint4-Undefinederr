import {AppHeader} from '../cmps/app-header.jsx'
import {HomeHero} from '../cmps/home-hero.jsx'
import {HomePopularServices} from '../cmps/home-popular-services.jsx'
import {WhyUs} from '../cmps/why-us.jsx'

export function HomePage(){

    return (
        <section className="home-page">
            <HomeHero/>
            <HomePopularServices/>
            <WhyUs/>
        </section>
    )
}