import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import '../assets/styles/heartButton.css'
import {updatingFavourites} from "../store/actions/userActions";
import * as favouritesAction from '../store/actions/favouritesAction';
import { connect } from 'react-redux';


class HeartButton extends Component {
    constructor(props){
        super(props);
        this.state = {
            addedToFavourites: false
        };
     
    }

        componentDidMount() {
            this.props.fetchingFavourites()
        }


       async updateToFavorites(){
            const {itinerary} = this.props

            console.log(itinerary)

            let itineraryId = itinerary._id


            console.log(itineraryId)


            await this.props.updatingFavourites(itineraryId)
            await this.props.fetchingFavourites();

        }

         renderButton() {
            const {itinerary, favourites} = this.props
            let favIds = favourites.map(el => el._id)
            return favIds.includes(itinerary._id)? <FontAwesomeIcon icon={faHeart} className='heartFavourite'/> : <FontAwesomeIcon icon={faHeart} className='heartIcon'/>
         }

        render() {

            console.log(this.props.favourites)
            return(  
                <span className='buttonC' onClick={() => this.updateToFavorites()}>
                {this.renderButton()}
                </span>
            );
        }
    }

    const mapStatetoProps = (state) => {
        return {
            favourites: state.favourites.favourites,
        }
    };

    const mapDispatchToProps = (dispatch) => {
        return {
            updatingFavourites: (itineraryId) => dispatch(updatingFavourites(itineraryId)),
            fetchingFavourites: () => dispatch(favouritesAction.fetchingFavourites()),
        }
    }

export default connect (mapStatetoProps, mapDispatchToProps) (HeartButton);



