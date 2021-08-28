
import Home from "./Components/Home/Home "
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";




function App() {
 


  return (
    
      <Router>

        <Switch>

          <Route path='/home'>
          <Home></Home>
          </Route>

          <Route exact path='/'>
          <Home></Home>
            
          </Route>


        </Switch>
      </Router>


  );
}

export default App;
