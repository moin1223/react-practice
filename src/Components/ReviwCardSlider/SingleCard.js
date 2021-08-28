import React from 'react';






const SingleCard = (props) => {
 
    const {name, address,photo,id}=props.data

   


    
    return (
     
      
        // <div className="col-md-3 mt-5 p-3" > 
              
      
        //      <img className='rounded-1' width='200px' height='200px' src={photo}/>

        //      <p className='text-center'>name:{name}</p>
             

    
        // </div>
        <>

<div class="card ms-5 shadow-lg p-3 mb-5 bg-white rounded" style={{width: '18rem'}}>

  
  <div class="card-body">
  <img src={photo}  width='80px' height='80px' class=" rounded-circle mx-auto d-block" alt="..."/>

  
    <p class="card-text text-center mt-2">name:{name}</p>
    <p class="card-text text-center mt-2">name:{name}</p>
    <p class="card-text text- center  mt-4">lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem </p>
  </div>
</div>
      
   
     
       </>
        
    );
};

export default SingleCard;