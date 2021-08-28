import React from 'react';
import photo1 from '../../images/photo1.jpg'
import photo2 from '../../images/photo2.jpg'
import photo3 from '../../images/photo3.jpg'
import photo4 from '../../images/photo4.jpg'
import "./SingleCard.css"

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick"
import SingleCard from './SingleCard';




const Cards = () => {
    var settings = {
        
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
        
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

  const datas =[
        {name:"piya",address:"chittagong",photo:photo1,id:'1'},
        {name:"miya",address:"chittagong",photo:photo2,id:'2'},
        {name:"ciya",address:"chittagong",photo:photo3,id:'3'},
        {name:"giya",address:"chittagong",photo:photo4,id:'4'},
        {name:"giya",address:"chittagong",photo:photo4,id:'5'}

    ]

    return (
      
      
           <div className="mt-5 ms-3">
               <h1 className="mb-5 text-center"> Our Testimonial</h1>
    
    <Slider {...settings}>
       
      

      {
          datas.map(td=><SingleCard data={td}></SingleCard>)
      }
            </Slider>
        

        
    </div>
    
    
  

    );
};

export default Cards ;