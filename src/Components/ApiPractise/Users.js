import React, { useEffect, useState } from 'react';

const Users = () => {
 

    const[user,SetUser]=useState(0)
    console.log(user)
  

useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>SetUser(data))
},[])








    return (
        <div>
         <h1>this is user page</h1>
        </div>
    );
};

export default Users;
