import React, { useContext } from 'react';
import firebaseConfig from './firebaseConfig';
import firebase from "firebase/app";
import "firebase/auth";
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';

firebase.initializeApp(firebaseConfig);



const Login = () => {

  const [loggedInUser,SetLoggedInUser]=useContext(UserContext);

  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };




   //Google SingIn popup
   const GoogleProvider = new firebase.auth.GoogleAuthProvider();
const hadleGoogeSignIn=()=>{
  firebase.auth()
  .signInWithPopup(GoogleProvider)
  .then((result) => {
    const {email,PhotoUrl,name}=result.user
    const signInUser={
      email:email,
      photto:PhotoUrl,
      name:name

    }
    SetLoggedInUser(signInUser)
    history.replace(from);
    
   
  
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode,errorMessage)
  
  });


}


    return (
        <div  className="text-centre m-5 p-5">
            <button onClick={hadleGoogeSignIn} className="btn btn-primary">Google login</button>
           
        </div>
    );
};

export default Login;