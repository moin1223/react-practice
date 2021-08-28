import React from 'react';
import { useParams } from 'react-router-dom';
import photo1 from '../../images/photo1.jpg'
import photo2 from '../../images/photo2.jpg'
import photo3 from '../../images/photo3.jpg'
import photo4 from '../../images/photo4.jpg'

const Details = () => {
    const{id}=useParams()
    console.log(id)
    
    const datas =[
        {name:"piya",address:"chittagong",photo:photo1,id:'1'},
        {name:"miya",address:"chittagong",photo:photo2,id:'2'},
        {name:"ciya",address:"chittagong",photo:photo3,id:'3'},
        {name:"giya",address:"chittagong",photo:photo4,id:'4'}

    ]
    const detaildata=datas.find(td=>td.id==id)

  const{name,photo}=detaildata;

   
    
  
    return (
        <div>
         <img className="img-fluid" height='50%' width='50%'src={photo}/>
         {name}
            
        </div>
    );
};

export default Details;