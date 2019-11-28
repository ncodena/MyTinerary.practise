import React, { Component, Fragment } from 'react';

class CollapsibleCity extends Component{
    render (){
        const {itinerary} = this.props
        console.log(itinerary)
        return(
            <div className="accordion" id="accordion2">
                <div className="accordion-group">
                    <div className="accordion-heading">
                        <div class="accordion-toggle" data-toggle="collapse" data-parent="#accordion2">
                            <h2>{itinerary.title}</h2>
                            <p className="infoContainer">{itinerary.rating} {itinerary.duration} {itinerary.price}</p>
                            <div className="imageContainer">
                                <img className="itineraryImage" src={itinerary.img} alt=""/> 
                            </div>
                             
                        </div>
                    </div>
                    <div id="collapseTwo" class="accordion-body collapse">
                
                        {itinerary.activities.map(activity => {
                            return(
                                <Fragment>
                                    <img className="activityImage" src={activity.img} alt=""/> 
                                    <div>{activity.title}</div> 
                                </Fragment>
                            )
         
                        })}
                    </div>
                    <div className="buttonContainer">
                        <button class="SeeMore2" data-toggle="collapse" href="#collapseTwo">See More</button>
                    </div>
                </div>   
            </div>
            
             
        )
    }
}

export default CollapsibleCity;