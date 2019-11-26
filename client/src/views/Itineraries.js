import React, { Component } from 'react';
import '../assets/styles/Itineraries.css';
import { connect } from 'react-redux';
// import CityCard from '../components/cityCard.js';

import { Collapse, Button, CardBody, Card } from 'reactstrap';


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

    // rather than fetching cities again each time, figure out ¨how to use redux to send information between sibling components
    // gettingCitiesList() {
    //     let citiesList = this.props.cities.map(city=> {
    //     return <button type="button" className="btn btn-dark">
    //                 <div className="card">
    //                     <CityCard img={city.img} name={city.name} country={city.country} key={city._id}/>
    //                 </div>
    //             </button>    
    //     })
    //     return citiesList
    // }  

    gettingItinerariesList() {
        let itinerariesList = this.props.itineraries.map(itinerary=> {
        return <div>
            <Collapse key={itinerary._id}>
                <div className="accordion-heading">
                    <h2>{itinerary.title}</h2>
                    <p>{itinerary.rating} {itinerary.price} {itinerary.duration}</p>
                </div>
                <Card>
                    <CardBody>
                        <img src={itinerary.img} alt=""/>
                    </CardBody>
                </Card>
                <Button color="primary" style={{ marginBottom: '1rem' }}>Read More</Button>
            </Collapse>
            </div>
            {/* <div key={itinerary._id}>
                <div>
                    <img src={itinerary.img} alt=""/>
                    <p>{itinerary.title}</p>
                    <p>{itinerary.rating} {itinerary.title} {itinerary.title}</p>    
                </div>   
            </div>  */}
        
        
         
        })
        return itinerariesList

    }

    render () {
        console.log(this.props.itineraries);
        
        return(
            <div className= "body">
                {/* <CityCard img={city.img} name={city.name} country={city.country} key={city._id}/> */}
                <div>
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
    }
};

// const mapDispatchToProps =(dispatch) => {
//     return {
//         // fetchCities: () => dispatch(cityActions.fetchCities()),
//         fetchItineraries: (cityId) => dispatch(itineraryAction.fetchItineraries(cityId))
//     }
// }

export default connect(mapStatetoProps) (Itineraries);