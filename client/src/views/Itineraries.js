import React, { Component } from 'react';
import '../assets/styles/Itineraries.css';
import { connect } from 'react-redux';
import CityCard from '../components/cityCard.js';



class Itineraries extends Component{

    constructor (props){
        super(props);
        this.state={
            // itineraries: [],
        }
    }
    componentDidMount(){
        console.log(this.props.cities)
        // this.props.fetchCities()
        // this.props.fetchItineraries()
            // .then(()=> console.log(this.props.cities))
    
    } 

    gettingItinerariesList() {
        
        let itinerariesList = this.props.itineraries.map(itinerary=> {
        return <div className="accordion" id="accordion2" key={itinerary._id}>
                <div className="accordion-group">
                    <div className="accordion-heading">
                        <div class="accordion-toggle" data-toggle="collapse" data-parent="#accordion2">
                            <h2>{itinerary.title}</h2>
                            <p className="infoContainer">{itinerary.rating} {itinerary.duration} {itinerary.price}</p>
                            <div className="imageContainer">
                                <img className="itineraryImage" src={itinerary.img} alt=""/> 
                            </div>
                             
                        </div>
                    </div>
                    <div id="collapseTwo" class="accordion-body collapse">
                        <p>djdjdjdjdjdjjjjjjjjjjjjjjjjj</p>
                        
                    </div>
                    <div className="buttonContainer">
                        <button class="SeeMore2" data-toggle="collapse" href="#collapseTwo">See More</button>
                    </div>
                    
                </div>   
            </div>  
        })
        return itinerariesList
    }

    render () {
        console.log(this.props.itineraries);
        
        return(
            <div className= "body">
                <div className="cityChildComponent">
                    <CityCard city={this.props.city} />
                </div>
                <div className="dropdownContainer">
                    {this.gettingItinerariesList()} 
                </div>
        </div>
        )
    };  

}
const mapStatetoProps = (state) => {
    return {
        itineraries: state.itineraries.itineraries,
        cities: state.cities.cities,
        city: state.cities.city
    }
};

// const mapDispatchToProps =(dispatch) => {
//     return {
//         // fetchCities: () => dispatch(cityActions.fetchCities()),
//         fetchItineraries: (cityId) => dispatch(itineraryAction.fetchItineraries(cityId))
//     }
// }

export default connect(mapStatetoProps) (Itineraries);