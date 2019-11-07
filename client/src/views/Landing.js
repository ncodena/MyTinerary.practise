import React from 'react';
import logo from '../assets/images/MYtineraryLogo.png';
import arrow from '../assets/images/circled-right-2.png';
import home from '../assets/images/homeIcon.png';
import '../assets/styles/Landing.css';

class Landing extends React.Component{

render() {
return (
<div className="LandingPage">
  <div className="fullBody">
    <header className="landing-header">
      <img src={logo} className="App-logo" alt="logo" />
    </header>
    <div className="landing-body">
      <p className="introText">Find your perfect trip, designed by insiders and love their cities.</p>
      <h2>Start browsing</h2>
      <img src={arrow} className="arrowIcon" alt="arrow-icon"></img>
      <p className="question">Want to build your own MYtinerary?</p>
      <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        Log In
      </a>
      <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        Create Account
      </a>
      <img src={home} className="homeIcon" alt="home-icon"></img>    
    </div>
  </div>

</div>
)
}
}

export default Landing;