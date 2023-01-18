import {HomeHero} from '../cmps/home-hero.jsx'
import {AppHeader} from '../cmps/app-header.jsx'

export function HomePage(){

    return (
        <section className="home-page">
            <section className="hero-container">
            <HomeHero/>
            </section>
        </section>
    )
}