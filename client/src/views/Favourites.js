import React, {Component} from 'react';
import AppNavbar from './../components/appNavbar';
// import favouritesAction from '../store/actions/favouritesAction'
import * as favouritesAction from '../store/actions/favouritesAction';
import { connect } from 'react-redux';


class Favourites extends Component {

    componentDidMount(){
        this.props.fetchingFavourites()
    }



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
        fetchingFavourites: () => dispatch(favouritesAction.fetchingFavourites()),
    }
}


export default connect(mapStatetoProps, mapDispatchToProps)(Favourites);
