import React from 'react';
import AppNavbar from './../components/appNavbar';
import arrow from '../assets/images/circled-right-2.png';
import { Link } from 'react-router-dom'
import '../assets/styles/Landing.css';

class Landing extends React.Component{

render() {
return (
<div className="LandingPage">
  <div className="fullBody">
    <AppNavbar/>
    <div className="landing-body">
      <p className="introText">Find your perfect trip, designed by insiders and love their cities.</p>
      <h2>Start browsing</h2>
      <Link to='/cities'className="linkToCities" ><img src={arrow} className="arrowIcon" alt="arrow-icon"></img></Link>
      <p className="question">Want to build your own MYtinerary?</p>
      <Link to='/login'className="linkToLogIn" ><p className="App-link" target="_blank" rel="noopener noreferrer">
        Log In</p></Link>
      <Link to='/users'className="linkToSignIn"><p className="App-link" target="_blank" rel="noopener noreferrer">
        Create an Account
      </p></Link> 
    </div>
  </div>

</div>
)
}
}

export default Landing;