import React from 'react';
import { Link } from 'react-router-dom';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick"




const SingleKids = (props) => {
 
    const {name, address,photo,id}=props.data

   


    
    return (
     
      
        <div className="col-md-3 mt-5 p-3" > 
              
      
        <Link to={`/details/${id}`}>
             <img className='rounded-1' width='200px' height='200px' src={photo}/>

             </Link>
             <p className='text-center'>name:{name}</p>
             

    
        </div>
        
     
      
        
    );
};

export default SingleKids;