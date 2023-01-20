import { Fragment } from "react"

export function HomePopularServices(){

    const urls = {
        'Logo Design' : 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_305,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/logo-design-2x.png',
'WordPress' : 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_305,dpr_1.0/v1/attachments/generic_asset/asset/ae11e2d45410b0eded7fba0e46b09dbd-1598561917003/wordpress-2x.png',
'Voice Over' :'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_305,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741669/voiceover-2x.png'
    }

    return <section className="main-layout">
<h1>Popular professional services </h1>
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
</div>
</section>
}