import React, { Component } from 'react';
import '../assets/styles/Cities.css';
import { connect } from 'react-redux';
import * as cityActions from "../store/actions/cityActions.js"
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
    return <button type="button" className="btn btn-dark">
        <li key={city._id}>
            <p>{city.name} - {city.country}</p>
        </li>
        </button>    
    })
    if (citiesList.length === 0) {
    citiesList = (
    <div> No Results Found </div>
    )}
    return citiesList
}
    

render () {
    if (!this.props.loading)
     return (
            
        <div className= "body">
            <form>
                <input placeholder="Search by city or country" type="text" id="filter" value={this.state.input}
                    match={this.props.match} onChange={(e)=> this.setState({
                input: e.target.value
                })} ></input>
               
            </form>            
               
            

            <ul>
                {this.gettingCitiesList()}   
            </ul>


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
        fetchCities: () => dispatch(cityActions.fetchCities())
    }
}

export default connect(mapStatetoProps, mapDispatchToProps) (Cities);