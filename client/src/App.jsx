import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import VistaVideos from './components/VistaVideos';
import CopsIndex from './components/CopsIndex';
import Upload from './components/Upload';

function App() {
  return (

    <Router>
      <div className="App">
        <NavLink className="link" to="/">
          <div className="title"><h2 >1 3 1 2</h2></div> 
        </NavLink>
        <Switch>
          <Route path="/" exact> 
            <CopsIndex/>     
          </Route>
          <Route path="/allcops">
            <VistaVideos/>
          </Route>
          <Route path="/upload">
            <Upload/>
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
