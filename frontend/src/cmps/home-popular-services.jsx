import { Fragment } from "react"

export function HomePopularServices(){

    const urls = {
        'Logo Design' : 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_305,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/logo-design-2x.png',
'WordPress' : 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_305,dpr_1.0/v1/attachments/generic_asset/asset/ae11e2d45410b0eded7fba0e46b09dbd-1598561917003/wordpress-2x.png',
'Voice Over' :'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_305,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741669/voiceover-2x.png',
'Video Explainer' :'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741663/animated-explainer-2x.png',
'Social Media' :'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741667/social-2x.png'
    }

    return <section className="popular-services-container main-layout">
<h2 className="trusted-by-text">Popular professional services </h2>
<div className="popular-services">
    <a style={{backgroundImage:"url("+urls['Logo Design']+")"}}>
        {/* <img src={urls['Logo Design']} /> */}
        <p>Build your brand <br/><span>Logo Design</span></p>
    </a>
    <a style={{backgroundImage:"url("+urls['WordPress']+")"}}>
        {/* <img src={urls['WordPress']} /> */}
        <p>Customize your site <br/><span>WordPress</span></p>
    </a>
    <a style={{backgroundImage:"url("+urls['Voice Over']+")"}}>
        {/* <img src={urls['Voice Over']} /> */}
        <p>Share your message <br/><span>Voice Over</span></p>
    </a>
    <a style={{backgroundImage:"url("+urls['Video Explainer']+")"}}>
        {/* <img src={urls['Voice Over']} /> */}
        <p>Engage your audience <br/><span>Video Explainer</span></p>
    </a>
    <a style={{backgroundImage:"url("+urls['Social Media']+")"}}>
        {/* <img src={urls['Voice Over']} /> */}
        <p>Reach more customers <br/><span>Social Media</span></p>
    </a>
</div>
</section>
}