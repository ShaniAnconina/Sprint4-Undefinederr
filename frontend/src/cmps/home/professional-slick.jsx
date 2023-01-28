import React, { Component } from "react"
import Slider from "react-slick"

import { GrNext } from "react-icons/gr"
import { GrPrevious } from "react-icons/gr"

export class MultipleItems extends Component {

    // constructor(props) {
    //     super(props)
    //     this.next = this.next.bind(this)
    //     this.previous = this.previous.bind(this)
    // }

    // next() {
    //     this.slider.slickNext()
    // }

    // previous() {
    //     this.slider.slickPrev()
    // }

    render() {
        const settings = {
            //   dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 5
        };
        return (
            <div className='categories-list-wrap main-layout'>
                {/* <Slider ref={c => (this.slider = c)} {...settings}> */}
                <Slider {...settings}>
                    <div className="img-container">
                        <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/f27bec553efc12cc60baed89b8f2223e-1674661140708/ai-artists-2x.png" alt="" />
                        <p>Add talent to AI<br /><span>AI Artists</span></p>
                    </div>
                    <div className="img-container">
                        <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_305,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/logo-design-2x.png" alt="" />
                        <p>Build your brand<br /><span>Logo Design</span></p>
                    </div>
                    <div className="img-container">
                        <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_305,dpr_1.0/v1/attachments/generic_asset/asset/ae11e2d45410b0eded7fba0e46b09dbd-1598561917003/wordpress-2x.png" alt="" />
                        <p>Customize your site<br /><span>WordPress</span></p>
                    </div>
                    <div className="img-container">
                        <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_305,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741669/voiceover-2x.png" alt="" />
                        <p>Share your message<br /><span>Voice Over</span></p>
                    </div>
                    <div className="img-container">
                        <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741663/animated-explainer-2x.png" alt="" />
                        <p>Engage your audience<br /><span>Video Explainer</span></p>
                    </div>
                    <div className="img-container">
                        <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741667/social-2x.png" alt="" />
                        <p>Reach more customers<br /><span>Social Media</span></p>
                    </div>
                    <div className="img-container">
                        <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741668/seo-2x.png" alt="" />
                        <p>Unlock growth online<br /><span>SEO</span></p>
                    </div>
                    <div className="img-container">
                        <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/illustration-2x.png" alt="" />
                        <p>Color your dreams<br /><span>Illustration</span></p>
                    </div>
                    <div className="img-container">
                        <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741674/translation-2x.png" alt="" />
                        <p>Go Global<br /><span>Translation</span></p>
                    </div>
                    <div className="img-container">
                        <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/data-entry-2x.png" alt="" />
                        <p>Learn your business<br /><span>Data Entry</span></p>
                    </div>
                    <div className="img-container">
                        <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/book-covers-2x.png" alt="" />
                        <p>Showcase your story<br /><span>Book Covers</span></p>
                    </div>

                </Slider>
                {/* <div className="slider-btns">
                    <button className="prev" onClick={this.previous}><GrPrevious size="10px" /></button>
                    <button className="next" onClick={this.next}><GrNext size="10px" /></button>
                </div> */}
            </div>
        );
    }
}