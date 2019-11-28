import React, { Component } from 'react';
import '../assets/styles/Itineraries.css';
import { connect } from 'react-redux';
import CityCard from '../components/cityCard.js';
import CollapsibleCity from '../components/collapsibleCity.js';

class Itineraries extends Component{

    constructor (props){
        super(props);
        this.state={
            // itineraries: [],
        }
    }
    componentDidMount(){
        console.log("from componentDidMount: ", this.props.itineraries)



        // this.props.fetchCities()
        // this.props.fetchItineraries()
        //     .then(()=> console.log(this.props.cities))
    
    } 

    gettingItinerariesList() {
        
        let itinerariesList = this.props.itineraries.map(itinerary=> {
        return (
            <CollapsibleCity itinerary={itinerary} key={itinerary._id}/>
        )
        })
        return itinerariesList
    }

    render () {
        // console.log("from render(): ", this.props.itineraries);
        // const activitiesArr = this.props.itineraries.map(el => el.activities)
        // console.log("activitiesArr: ", activitiesArr)
        // if ( this.props.itineraries[0].activities) console.log(this.props.itineraries[0].activities)
        
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

// const mapDispatchToProps = (dispatch) => {
//     return {
//         fetchCities: () => dispatch(cityActions.fetchCities()),
//         fetchItineraries: (cityId) => dispatch(itineraryAction.fetchItineraries(cityId))
//     }
// }

export default connect(mapStatetoProps) (Itineraries);