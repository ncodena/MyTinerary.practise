import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'


class HeartButton extends Component {
    constructor(props){
        super(props);
        this.state = {
            addedToFavourites: false};
        }


        addToFavorites(){

        }

        render() {

            return(
                <div>
                <FontAwesomeIcon icon={faHeart} />



                </div>
                        
                    


            );
        }
    }

export default HeartButton;



