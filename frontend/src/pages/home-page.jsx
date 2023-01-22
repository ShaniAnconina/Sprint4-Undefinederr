import {HomeHero} from '../cmps/home/home-hero.jsx'
import {HomePopularServices} from '../cmps/home/home-popular-services.jsx'
import { TrustedBy } from '../cmps/home/trusted-by.jsx'
import {WhyUs} from '../cmps/home/why-us.jsx'

export function HomePage(){

    return (
        <section className="home-page">
            <HomeHero/>
            <TrustedBy/>
            <HomePopularServices/>
            <WhyUs/>
        </section>
    )
}