import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import BackToTop from './components/BackToTop/index';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'; 

function App() {
  return (
    <div className="App">
      <Router>
        <BackToTop />
        <Switch>
            <Route path="/home">
               <p>Hellloooooooo</p>
            </Route>
        </Switch>
      </Router>
      {/* <Button variant = "contained" color = "primary" >Say something boy</Button> */}
    </div>
  );
}

export default App;
