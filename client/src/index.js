import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/index.css';
import Landing from "./views/Landing"
// import Cities from "./views/Cities"
import { Route, BrowserRouter as Router } from 'react-router-dom'


const router = (
    <Router>
    <div className="backgroundContainer">
        <div className="darkFilter"></div>
      <Route exact path="/" component={Landing} />
    </div>
  </Router>    
);


ReactDOM.render(router, document.getElementById('root'));
