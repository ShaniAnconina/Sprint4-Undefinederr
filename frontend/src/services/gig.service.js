import { storageService } from './async-storage.service'
import { utilService } from './util.service'

const STORAGE_KEY = 'gig_DB'
_createGigs()


export const gigService = {
    query,
    get,
    save,
    remove,
    getDefaultFilter,
    // getPopularGigs,
    addToWishlist
}

async function query(filterBy) {
    try {
        let gigs = await storageService.query(STORAGE_KEY)
        if (filterBy.txt) {
            const regex = new RegExp(filterBy.txt, 'ig')
            // gigs = gigs.filter((gig) => regex.test(gig.title) || regex.test(gig.description) || gig.tags.some((tag) => regex.test(tag))) //too wide
            gigs = gigs.filter((gig) => regex.test(gig.title))
        }
        if (filterBy.tags) {
            gigs = gigs.filter((gig) => gig.tags.includes(filterBy.tag))
        }
        return gigs
    } catch (err) {
        console.log('could not retrieve gigs from service')
        throw err
    }
}

function get(gigId) {
    return storageService.get(STORAGE_KEY, gigId)
}

function save(gig) {
    if (gig._id) {
        return storageService.put(STORAGE_KEY, gig)
    } else {
        return storageService.post(STORAGE_KEY, gig)
    }
}

function remove(gigId) {
    return storageService.remove(STORAGE_KEY, gigId)
}

function addToWishlist(gigId) {
    console.log('gigId - service:', gigId)
}

// function getPopularGigs(gigs) {
//     return gigs.filter(gig => gig.owner.rate === 5)
// }

function _createGigs() {
    let Gigs = utilService.loadFromStorage(STORAGE_KEY)
    if (!Gigs || !Gigs.length) {
        Gigs = []
        Gigs.push(_createGig('I will be your social media marketing manager'))
        Gigs.push(_createGig('I will setup modern wordpress website design or blog design'))
        Gigs.push(_createGig('I will be your social media manager and personal assistant'))
        Gigs.push(_createGig('I will create cool beer packaging, craft beer, beer label'))
        Gigs.push(_createGig('I will create your winning candidate resume, cover letter, and linkedin profile'))
        Gigs.push(_createGig('I will create a successful resume or cover letter'))
        Gigs.push(_createGig('I will illustrate childrens book pages for you'))
        Gigs.push(_createGig('I will design the labels for your beer or beverage can'))
        Gigs.push(_createGig('I will mix and master your music as charting german audio engineer'))
        Gigs.push(_createGig('I will draw children story book illustration'))
        Gigs.push(_createGig('I will be Social Media Management and Personal Assistant', 'I will manage your social media accounts and assist you with daily tasks. I have experience in scheduling posts, creating content, and analyzing analytics.'))
        Gigs.push(_createGig('I will be Professional Resume Writing and Career Coaching', 'I will help you create a professional resume that stands out and lands you your dream job. I also offer career coaching to help you navigate the job market.'))
        Gigs.push(_createGig('I will be your Logo Design and Branding', 'I will create a unique and professional logo for your business. I can also help with branding and developing a visual identity.'))
        Gigs.push(_createGig('I will be your Content Writer and SEO Optimization', 'I will write high-quality content for your website or blog. I can also optimize your content for search engines to help increase your visibility.'))
        Gigs.push(_createGig('I will be your Web Developer and E-commerce Solutions Architect', 'I will design graphics and illustrations for your website, social media, or print materials. I can create logos, icons, infographics, and more.'))
        Gigs.push(_createGig('I will be your Graphic and Illustrations Designer', 'I will build a custom website for you. I have experience in developing and customizing e-commerce platforms.'))
        Gigs.push(_createGig('I will be your Video and Animation Editor', 'I will edit and animate videos for your business or personal projects. I can create promotional videos, explainer videos, and more.'))
        Gigs.push(_createGig('I will design and develop profesinal website', 'I will design and develop a professional, responsive website that meets your needs and exceeds your expectations. With my extensive experience and expertise, I guarantee a high-quality website that will help you stand out online.'))
        Gigs.push(_createGig('I will be your social media and marketing manager', 'I will manage and grow your social media presence, creating engaging content and running targeted advertising campaigns to increase your followers and engagement. I will also provide you with detailed analytics and reports.'))
        Gigs.push(_createGig('I will write content for your blogs', 'I will write high-quality, SEO-optimized content for your website, blog, or social media channels. I have experience in a wide range of industries and can create content that resonates with your target audience and drives traffic to your site.'))
        Gigs.push(_createGig('I will take care of Graphic Design and Branding Services', 'I will create professional, high-quality graphic designs for your business, including logos, brochures, infographics, and more. I will also help you establish a consistent and effective brand identity across all of your marketing materials.'))
        Gigs.forEach(gig => {
            gig.reviews = [
                {
                    id: utilService.makeId(),
                    txt: utilService.makeLorem(5),
                    rate: utilService.getRandomIntInclusive(1, 5),
                    by: {
                        _id: 'u102',
                        fullname: 'user2',
                        imgUrl: "https://i.pinimg.com/280x280_RS/2e/45/66/2e4566fd829bcf9eb11ccdb5f252b02f.jpg"
                    }
                },
                {
                    id: utilService.makeId(),
                    txt: utilService.makeLorem(12),
                    rate: utilService.getRandomIntInclusive(1, 5),
                    by: {
                        _id: 'u102',
                        fullname: 'user2',
                        imgUrl: "https://i.pinimg.com/280x280_RS/2e/45/66/2e4566fd829bcf9eb11ccdb5f252b02f.jpg"
                    }
                },
                {
                    id: utilService.makeId(),
                    txt: utilService.makeLorem(7),

                    rate: utilService.getRandomIntInclusive(1, 5),
                    by: {
                        _id: 'mumui',
                        fullname: 'momi2',
                        imgUrl: "https://i.pinimg.com/280x280_RS/2e/45/66/2e4566fd829bcf9eb11ccdb5f252b02f.jpg"
                    }
                }

            ]
        })
        utilService.saveToStorage(STORAGE_KEY, Gigs)
    }
    return Gigs
}

function _createGig(title, description = 'Lorem ipsum dolor', imgUrl = 'https://assets.entrepreneur.com/content/3x2/2000/20170801121054-graphicstock-workspace-with-laptop-male-hands-notebookeyeglasses-sketchbook-black-wooden-desk-with-bamboo-leaf-flat-lay-top-view-office-table-desk-freelancer-working-place-ruvmpjwlol.jpg') {
    return {
        _id: utilService.makeId(),
        title,
        description,
        imgUrl,
        price: utilService.getRandomIntInclusive(10, 300),
        daysToMake: utilService.getRandomIntInclusive(1, 10),
        tags: ['logo-design', 'artisitic', 'proffesional', 'accessible'],
        likedByUsers: [],
        revisions: utilService.getRandomIntInclusive(1, 6),
        owner: {
            _id: 'u101',
            fullname: 'Dudu Da',
            imgUrl: 'url',
            level: 'basic/premium',
            rate: utilService.getRandomIntInclusive(1, 5)
        },
        isSaved: false
    }
}

function getDefaultFilter() {
    return { txt: '', tags: '' }
}

