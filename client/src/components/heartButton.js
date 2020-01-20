import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import '../assets/styles/heartButton.css'


class HeartButton extends Component {
    constructor(props){
        super(props);
        this.state = {
            addedToFavourites: false};

            // this.addToFavourites = this.addToFavourites.bind(this);
        }


        addToFavorites(ev){
            // console.log(ev.target)
            this.setState({
                addedToFavourites: !this.state.addedToFavourites

            });

        }

        render() {

            const {addedToFavourites} = this.state;

            return(  
                <span onClick={() => this.addToFavorites()}>
                {addedToFavourites ? <FontAwesomeIcon icon={faHeart} className='heartFavourite'/> : <FontAwesomeIcon icon={faHeart} className='heartIcon'/>} 
                </span>
            );
        }
    }

export default HeartButton;



