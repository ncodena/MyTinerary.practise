import React, {Component} from 'react';
import AppNavbar from './../components/appNavbar';
// import favouritesAction from '../store/actions/favouritesAction'
import * as favouritesAction from '../store/actions/favouritesAction';
import Itinerary from "../components/collapsibleCity";
import { connect } from 'react-redux';


class Favourites extends Component {

    componentDidMount(){
        this.props.fetchingFavourites()
    }

    gettingFavouritesList () {
        let favouritesList = this.props.favourites.map(itinerary =>{
            return(
                <Itinerary itinerary={itinerary} key={itinerary._id}/> 
            ) 
            
        })

    return favouritesList

    }


    render() {
        // console.log(this.props)

        return(

            <div className= "body">
                <AppNavbar/>

                {this.props.loading ? <div>Loading...</div> : <div className="favouritesList">{this.gettingFavouritesList()}</div>}

                    
            </div>
        )
            
            

            
    

            
    }

};



// return (
//     <div>Loading...</div>
// )
const mapStatetoProps = (state) => {
    return {
        favourites: state.favourites.favourites,
        loading: state.favourites.loading,
        isAuthenticated: state.auth.isAuthenticated,
    }
};

const mapDispatchToProps =(dispatch) => {
    return {
        fetchingFavourites: () => dispatch(favouritesAction.fetchingFavourites()),
    }
}


export default connect(mapStatetoProps, mapDispatchToProps)(Favourites);
