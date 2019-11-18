import React from 'react';
import '../assets/styles/Cities.css';
import { connect } from 'react-redux';
import { fetchCities } from "../store/actions/cityActions.js"



export class Cities extends Component {

constructor (){
super();

// this.state={
// cities: [],
// filteredCities:[],
// input:""
// };
}

componentDidMount(){
this.props.fetchCities();

}


filterCities() {
return this.state.cities.filter(city => city.name.toLowerCase().startsWith(this.state.input)||
city.country.toLowerCase().startsWith(this.state.input))
}



render () {

function gettingCitiesList () {
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



return (
<div className="body">
    if (loading == true){
    <p>Loading...</p>
    } else (loading == false) {
    <div>
        <form>
            <input placeholder="Search by city or country" type="text" id="filter" value={this.state.input}
                match={this.props.match} onChange={(e)=> this.setState({
            input: e.target.value
            })} ></input>
        </form>
        <ul>
            {citiesList}
        </ul>

    </div>
    }
</div>

)}};
const mapStatetoProps = (state, ownProps) => {
return {
cities: state.cityReducer.cities
}
};

const mapDispatchToProps = dispatch => ({
fetchCities: () => dispatch(fetchCities)


});

export default connect(mapStatetoProps, mapDispatchToProps) (Cities);