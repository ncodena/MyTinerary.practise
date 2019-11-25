import React, { Component } from 'react';

class CityCard extends Component{
    render (){
        return(
            <div>
                <img className="cityImage" src={this.props.img} alt=""/>
                <p className="nameContainer">{this.props.name} - {this.props.country}</p>
            </div>
            
            
        )
    }
}

export default CityCard;