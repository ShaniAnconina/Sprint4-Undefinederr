import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import React, { Component } from "react"
import Slider from "react-slick"

import { GrNext } from "react-icons/gr"
import { GrPrevious } from "react-icons/gr"

export class SimpleSlider extends Component {

    constructor(props) {
        super(props);
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
        const settings = {
            arrows: true,
            slidesToShow: 1,
            slidesToScroll: 1,
        }

        return (
            <div>
                <Slider ref={c => (this.slider = c)} {...settings}>
                    <div key={1}>
                        <img onClick={(ev) => ev.preventDefault()} height="195px" src="https://images.unsplash.com/photo-1674170117831-7a0bb884b398?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3NDUwMTg4MQ&ixlib=rb-4.0.3&q=80&w=1080" />
                        <div className="sliders-btns" onClick={(ev) => ev.preventDefault()}>
                            <button className="previous-btn" onClick={this.previous}><GrPrevious size="10px" /></button>
                            <button className="next-btn" onClick={this.next}><GrNext size="10px" /></button>
                        </div>
                    </div>
                    <div key={2}>
                        <img onClick={(ev) => ev.preventDefault()} height="195px" src="https://images.unsplash.com/photo-1672071664623-d5d6744467e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3NDUwMTg3NA&ixlib=rb-4.0.3&q=80&w=1080" />
                        <div className="sliders-btns" onClick={(ev) => ev.preventDefault()}>
                            <button className="previous-btn" onClick={this.previous}><GrPrevious size="10px" /></button>
                            <button className="next-btn" onClick={this.next}><GrNext size="10px" /></button>
                        </div>
                    </div>
                    <div key={3}>
                        <img onClick={(ev) => ev.preventDefault()} height="195px" src="https://images.unsplash.com/photo-1673407456341-8bddce1157eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3NDUwMTg2Mw&ixlib=rb-4.0.3&q=80&w=1080" />
                        <div className="sliders-btns" onClick={(ev) => ev.preventDefault()}>
                            <button className="previous-btn" onClick={this.previous}><GrPrevious size="10px" /></button>
                            <button className="next-btn" onClick={this.next}><GrNext size="10px" /></button>
                        </div>
                    </div>
                </Slider>
            </div>
        )
    }
}