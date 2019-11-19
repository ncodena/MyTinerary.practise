import React, { Component } from 'react';
import '../assets/styles/Cities.css';
import { connect } from 'react-redux';
import * as cityActions from "../store/actions/cityActions.js"


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
    return this.props.cities.filter(city => city.name.toLowerCase().startsWith(this.state.input)||
    city.country.toLowerCase().startsWith(this.state.input))

}

gettingCitiesList() {
    let citiesList = this.filterCities().map(city=> {
    return <li key={city._id}>
        <p>{city.name}</p>
        <p>{city.country}</p>
    </li>
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