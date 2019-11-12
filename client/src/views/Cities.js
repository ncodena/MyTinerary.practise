import React, { Component} from 'react';
import '../assets/styles/Cities.css';




class Cities extends Component {

   constructor (props){
       super(props);

       this.state={
           cities: [],
           filteredCities:[],
           input:""
       };
   }

    componentDidMount(){
        fetch("http://localhost:5000/cities/all")
        .then(response => response.json() )
        .then(cities => {
            this.setState({cities: cities})
        });
    }


    filterCities() {
        return this.state.cities.filter(city => city.name.toLowerCase().startsWith(this.state.input)|| city.country.toLowerCase().startsWith(this.state.input))
    }

    render () {

        let citiesList  = this.filterCities().map(city=> {
                return <li key={city._id}>
                    <p>{city.name}</p>
                    <p>{city.country}</p>
                </li>
        })
        if (citiesList.length === 0) {
            citiesList =  (
                <div> No Results Found </div>
            )
        }
        
        return (
            <div className="body">
                <form>
                    <input placeholder="Search by city or country" type= "text" id="filter" value={this.state.input} match={this.props.match} onChange={(e) => this.setState({
                        input: e.target.value
                    })} ></input>   
                </form>
                <ul>   
                    {citiesList}    
                </ul>
            </div>
              
        );
    }
}

export default Cities;