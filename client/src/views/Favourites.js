import React, {Component} from 'react';
import AppNavbar from './../components/appNavbar';
import favouritesAction from '../store/actions/favouritesAction'
import { connect } from 'react-redux';


class Favourites extends Component {

    componentDidMount(){
        this.props.fetchFavourites()
    }

    // gettingFavouritesList() {
    //     let favouritesList = this.users
    //     console.log(favouritesList)
        // return <Link to={`/itineraries?city=${city.name}`}>
        //         <button type="button" className="btn btn-dark" onClick={() => this.selectCityIntineraries(city) }>
        //             <div className="card">
        //                 <CityCard city={city} key={city._id}/>
        //             </div>
        //         </button> 
        //     </Link>   
        // })
        // if (favouritesList.length === 0) {
        // citiesList = (
        // <div className="errorMessage"> NO FAVOURITES ADDED YET </div>
        // )}
        // return favouritesList
    // };


    render() {
        console.log(this.props.favourites)
        if (!this.props.loading)
        return(

            <div>
                <AppNavbar/>

                <div className="favouritesList">

                {/* {this.gettingFavouritesList()} */}
                
            </div>
            </div>

        )
    else
        return (
            <div>Loading...</div>
        )

            
    }

}
const mapStatetoProps = (state) => {
    return {
        favourites: state.favourites.favourites,
        loading: state.favourites.loading
    }
};

const mapDispatchToProps =(dispatch) => {
    return {
        fetchFavourites: () => dispatch(favouritesAction.fetchingFavourites()),
    }
}


export default connect(mapStatetoProps, mapDispatchToProps) (Favourites);
