import React, { Component } from 'react';

class CityCard extends Component{
    render (){
        const {city} = this.props
        return(
            <div>
                <img className="cityImage" src={city.img} alt=""/>
                <p className="nameContainer">{city.name} - {city.country}</p>
            </div>
            
            
        )
    }
}

export default CityCard;