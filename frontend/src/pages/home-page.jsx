import {HomeHero} from '../cmps/home-hero.jsx'
import {AppHeader} from '../cmps/app-header.jsx'
import {HomePopularServices} from '../cmps/home-popular-services.jsx'

export function HomePage(){

    return (
        <section className="home-page">
            <HomeHero/>
            <HomePopularServices/>
        </section>
    )
}