  
import React, { createContext, useState } from 'react';
import Home from "./Components/Home/Home "
import Navbar from "./Components/Navbar/Navbar";
import Details from "./Components/Details/Details";
import Users from "./Components/ApiPractise/Users";
import Login from "./Components/Login/Login";
import PrivateRoute from './Components/Login/PrivateRoute';



import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Slider from 'react-slick';
import CenterMode from './Components/Simpleslider';




export const UserContext = createContext();

function App() {
  const[loggedInUser,SetLoggedInUser]=useState({})

 
  return (
   <UserContext.Provider value={[loggedInUser,SetLoggedInUser]}>
    <Router>
   
      <Switch>

        <Route path='/home'>
        <Home/>
        </Route>
        
        {/* <PrivateRoute path='/details/:id'>
        < Details/>
        </PrivateRoute >
        <Route path='/user'>
        <Users/>
        </Route> */}
        <Route path='/login'>
        <Login/>
        </Route>
  
        <Route  exact path='/'>


      <CenterMode/>


        </Route>
        

      </Switch>
    </Router>
    </UserContext.Provider>

  );
}

export default App;
