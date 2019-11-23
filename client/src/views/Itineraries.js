import React, { Component } from 'react';
// import '../assets/styles/Cities.css';
import { connect } from 'react-redux';

class Itineraries extends Component{

    constructor (props){
        super(props);
        this.state={
            // itineraries: [],
        }
    }

    gettingItinerariesList() {
        let itinerariesList = this.props.itineraries.map(itinerary=> {
        return <li key={itinerary._id}>
                <div>
                    <img src={itinerary.img} alt=""/>
                    <p>{itinerary.title}</p>
                    <p>{itinerary.rating} {itinerary.title} {itinerary.title}</p>    
                </div>   
            </li>  
        })
        return itinerariesList

    }

    render () {
        console.log(this.props.itineraries);
        
        return(
            <div className= "body">
            <div>
                {this.gettingItinerariesList()} 
            </div>
            {/* <img src={home} className="homeIcon" alt="home-icon"></img>   */}
        </div>
        )
    };  

}
const mapStatetoProps = (state) => {
    return {
        itineraries: state.itineraries.itineraries,
    }
};


export default connect(mapStatetoProps) (Itineraries);