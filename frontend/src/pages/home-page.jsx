import { HomeHero } from '../cmps/home/home-hero'
import { HomePopularServices } from '../cmps/home/home-popular-services'
import { TrustedBy } from '../cmps/home/trusted-by'
import { SellingProposition } from '../cmps/home/selling-proposition'
import { ExploreMarketplace } from '../cmps/home/explore-marketplace'

export function HomePage() {

    return (
        <section className="home-page">
            <HomeHero />
            <TrustedBy />
            <HomePopularServices />
            <SellingProposition />
            <ExploreMarketplace />
        </section>
    )
}