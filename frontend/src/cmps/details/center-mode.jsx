import React, { Component } from "react"
import Slider from "react-slick"

import { GrNext } from "react-icons/gr"
import { GrPrevious } from "react-icons/gr"

export class CenterMode extends Component {
  render() {
    const imgUrls = this.props.imgUrls
    const settings = {
      customPaging: function (i) {
        return (
          <a className="mini-img">
            <img src={imgUrls[i]} />
          </a>
        );
      },
      dots: true,
      dotsClass: "slick-dots slick-thumb",
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="main">
        <Slider {...settings}>
          {imgUrls.map(img => <div className="main-img-container">
            <img className="main-img" src={img} />
          </div>)}
        </Slider>
        <div  className="slider-btns flex space-between">
          <button className="previous-btn"><GrPrevious fill='#404145' size="20px" /></button>
          <button className="next-btn"><GrNext size="20px" /></button>
        </div>
      </div>
    );
  }
}