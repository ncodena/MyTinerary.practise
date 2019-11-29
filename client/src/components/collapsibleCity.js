import React, { Component, Fragment } from 'react';

class CollapsibleCity extends Component{
    state = {
        isOpen: false,
    };
    toggle = () => {
        this.setState({isOpen: !this.state.isOpen});
    }

    getRenderedActivities(){
        const {itinerary} = this.props
        if (this.state.isOpen){
            return(
                itinerary.activities.map(activity => {
                    return(
                        <Fragment>
                            <div className="activityContainer">
                                <img className="activityImage" src={activity.img} alt=""/> 
                                <div className="activityName">{activity.title}</div>
                            </div>   
                        </Fragment>
                    )
                })

            )
        }
    }

    render (){
        const {itinerary} = this.props
        console.log(itinerary)
        return(
            <div className="accordion" id="accordion2">
                <div className="accordion-group">
                    <div className="accordion-heading">
                        <div className="accordion-toggle" data-toggle="collapse" data-parent="#accordion2">
                            <h2>{itinerary.title}</h2>
                            <p className="infoContainer">{itinerary.rating} {itinerary.duration} {itinerary.price}</p>
                            <div className="imageContainer">
                                <img className="itineraryImage" src={itinerary.img} alt=""/> 
                            </div>
                             
                        </div>
                    </div>
        
                        {this.getRenderedActivities()}
                        
    
                    <div className="buttonContainer">
                        <button onClick={this.toggle}>{this.state.isOpen ? 'Read Less' : 'Read More'}</button>
                    </div>
                </div>   
            </div>
            
             
        )
    }
}

export default CollapsibleCity;