import React from 'react';
import photo1 from '../../images/photo1.jpg'
import photo2 from '../../images/photo2.jpg'
import photo3 from '../../images/photo3.jpg'
import photo4 from '../../images/photo4.jpg'
import SingleKids from '../SingleKids/SingleKids';
import { Row } from 'react-bootstrap';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick"




const Home  = () => {
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

  const datas =[
        {name:"piya",address:"chittagong",photo:photo1,id:'1'},
        {name:"miya",address:"chittagong",photo:photo2,id:'2'},
        {name:"ciya",address:"chittagong",photo:photo3,id:'3'},
        {name:"giya",address:"chittagong",photo:photo4,id:'4'}

    ]

    return (
        <div className="row">
           <Slider {...settings}>
      

      {
          datas.map(td=><SingleKids data={td}></SingleKids>)
      }
            </Slider>
        </div>
    
     

    );
};

export default Home ;