import {HomeHero} from '../cmps/home/home-hero.jsx'
import {HomePopularServices} from '../cmps/home/home-popular-services.jsx'
import { TrustedBy } from '../cmps/home/trusted-by.jsx'
import {SellingProposition} from '../cmps/home/selling-proposition.jsx'
import {ExploreMarketplace} from '../cmps/home/explore-marketplace.jsx'
import {AppFooter} from '../cmps/app-footer.jsx'

export function HomePage(){

    return (
        <section className="home-page">
            <HomeHero/>
            <TrustedBy/>
            <HomePopularServices/>
            <SellingProposition/>
            <ExploreMarketplace/>
        </section>
    )
}