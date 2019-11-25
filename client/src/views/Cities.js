import React, { Component } from 'react';
import '../assets/styles/Cities.css';
import { connect } from 'react-redux';
import * as cityActions from "../store/actions/cityActions.js"
import * as itineraryAction from "../store/actions/itineraryAction.js"
import { Link } from 'react-router-dom'
import CityCard from '../components/cityCard.js';
// import home from '../assets/images/homeIcon.png';


class Cities extends Component {

constructor (props){
    super(props);

    this.state={
    // cities: [],
    //filteredCities:[],
    input:""
    };
}

componentDidMount(){
    this.props.fetchCities()
        // .then(()=> console.log(this.props.cities))

}


filterCities() {
    console.log(this.state.input)
    return this.props.cities.filter(city => city.name.toLowerCase().startsWith(this.state.input)||
    city.country.toLowerCase().startsWith(this.state.input))

}


gettingCitiesList() {
    let citiesList = this.filterCities().map(city=> {
    return <Link to="/itineraries">
            <button type="button" className="btn btn-dark" onClick={() => this.props.fetchItineraries(city._id)}>
                <div className="card">
                    <CityCard img={city.img} name={city.name} country={city.country} key={city._id}/>
                    {/* <img className="cityImage" src={city.img} alt=""/>
                    <p className="nameContainer">{city.name} - {city.country}</p>     */}
                </div>
            </button> 
        </Link>   
    })
    if (citiesList.length === 0) {
    citiesList = (
    <div className="errorMessage"> NO RESULTS FOUND </div>
    )}
    return citiesList
}
    

render () {
    console.log(this.props.cities)
    if (!this.props.loading)
     return (
            
        <div className= "body">
            <form>
                <input placeholder="Search by city or country" type="text" id="filter" value={this.state.input}
                    match={this.props.match} onChange={(e)=> this.setState({
                input: e.target.value
                })} ></input>
               
            </form>            
               

            <div className="citiesList">

                {this.gettingCitiesList()}
                
            </div>
            
            {/* <img src={home} className="homeIcon" alt="home-icon"></img>   */}

        </div>
     )
     else 
        return (
        <div>Loading...</div>
        )
    }
};

const mapStatetoProps = (state) => {
    return {
        cities: state.cities.cities,
        loading: state.cities.loading
    }
};

const mapDispatchToProps =(dispatch) => {
    return {
        fetchCities: () => dispatch(cityActions.fetchCities()),
        fetchItineraries: (cityId) => dispatch(itineraryAction.fetchItineraries(cityId))
    }
}

export default connect(mapStatetoProps, mapDispatchToProps) (Cities);