import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import React, { Component } from "react"
import Slider from "react-slick"

import { GrNext } from "react-icons/gr"
import { GrPrevious } from "react-icons/gr"
export class SimpleSlider extends Component {

    constructor(props) {
        super(props)
        this.next = this.next.bind(this)
        this.previous = this.previous.bind(this)
    }

    next() {
        this.slider.slickNext()
    }

    previous() {
        this.slider.slickPrev()
    }

    render() {
        const gig = this.props.gig
        const settings = {
            arrows: true,
            slidesToShow: 1,
            slidesToScroll: 1,
        }

        return (
            <>
                <Slider ref={c => (this.slider = c)} {...settings}>
                    {gig.imgUrl.map(img =>
                        <div className="img-slide" key={gig.imgUrl.length + 1}>
                            <img onClick={(ev) => ev.preventDefault()} height="195px" src={img} />
                        </div>
                    )}
                </Slider>
                <div className="sliders-btns" onClick={(ev) => ev.preventDefault()}>
                    <button className="previous-btn" onClick={this.previous}><GrPrevious size="10px" /></button>
                    <button className="next-btn" onClick={this.next}><GrNext size="10px" /></button>
                </div>
            </>
        )
    }
}