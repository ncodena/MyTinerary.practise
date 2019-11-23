import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/index.css';
import Landing from "./views/Landing"
import Cities from './views/Cities';
import Itineraries from './views/Itineraries'
import home from './assets/images/homeIcon.png'

import { Route, BrowserRouter as Router } from 'react-router-dom'


// import { composeWithDevTools } from "redux-devtools-extension";
import{ createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from "redux-thunk";

import rootReducer from './store/reducers/rootReducer';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

const router = (
  <Provider store={store}>
    <Router>
    <div className="backgroundContainer">
        <div className="darkFilter"></div>
      <Route exact path="/" component={Landing} />
      <Route exact path="/cities" component={Cities} />
      <Route exact path="/itineraries" component={Itineraries} />
      <div className="footer">
        <img src={home} className="homeIcon" alt="home-icon"></img>   
      </div>
    </div>

  </Router>  
  </Provider>  
);


ReactDOM.render(router , document.getElementById('root'));
