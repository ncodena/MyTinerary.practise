import React, { Component } from 'react';
// import '../assets/styles/Cities.css';
import { connect } from 'react-redux';
import * as itineraryAction from "../store/actions/itineraryAction.js"

class Itineraries extends Component{

    constructor (props){
        super(props);
        this.state={
            // itineraries: [],
        }
    }

    componentDidMount(){
        this.props.fetchItineraries()
            .then(()=> console.log(this.props.itineraries))
    
    }

    // gettingItinerariesList() {
    //     let itinerariesList = this.props.itineraries.map(itinerary=> {
    //     return <li key={itinerary._id}>
    //             <div>
    //                 <img src={itinerary.img} alt=""/>
    //                 <p>{itinerary.title}</p>
    //                 <p>{itinerary.rating} {itinerary.title} {itinerary.title}</p>    
    //             </div>   
    //         </li>  
    //     })
    //     return itinerariesList
    // }

    render () {
        return(
            <div className= "body">
            <div>
                <ul>
                    {/* {this.gettingItinerariesList()}    */}
                </ul>

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

const mapDispatchToProps =(dispatch) => {
    return {
        fetchItineraries: () => dispatch(itineraryAction.fetchItineraries())
    }
}

export default connect(mapStatetoProps, mapDispatchToProps) (Itineraries);