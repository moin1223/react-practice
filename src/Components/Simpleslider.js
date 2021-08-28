
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick"

import React from 'react';

const  CenterMode  = () => {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };
    return (
        <div>
        <h2>Center Mode</h2>
        <Slider {...settings}>
          <div>
          <img style={{ height: "60px", background: "white", borderRadius: "5px" }} src="https://i.ibb.co/mzdSvxh/Group-33141.png" alt=""/>
          </div>
          <div>
          <img style={{ height: "60px", background: "white", borderRadius: "5px" }} src="https://i.ibb.co/mzdSvxh/Group-33141.png" alt=""/>
          </div>
          <div>
          <img style={{ height: "60px", background: "white", borderRadius: "5px" }} src="https://i.ibb.co/mzdSvxh/Group-33141.png" alt=""/>
          </div>
          <div>
          <img style={{ height: "60px", background: "white", borderRadius: "5px" }} src="https://i.ibb.co/mzdSvxh/Group-33141.png" alt=""/>
          </div>
          <div>
          <img style={{ height: "60px", background: "white", borderRadius: "5px" }} src="https://i.ibb.co/mzdSvxh/Group-33141.png" alt=""/>
          </div>
          <div>
          <img style={{ height: "60px", background: "white", borderRadius: "5px" }} src="https://i.ibb.co/mzdSvxh/Group-33141.png" alt=""/>
          </div>
        </Slider>
      </div>
       
    );
};

export default  CenterMode ;
