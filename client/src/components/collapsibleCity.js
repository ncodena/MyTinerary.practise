import React, { Component, Fragment } from 'react';
import HeartButton from './heartButton';
import Comments from '../components/comments';
import {Card, CardImg, CardText, CardBody, CardLink, CardTitle, CardSubtitle} from 'reactstrap';

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
                                    <CardTitle className="activityName links">{activity.title}</CardTitle>
                                </div>     
                        </Fragment>
                    )
                })

            )
        }
    }

    getCommentsList = () => {
        const {itinerary} = this.props
        if (this.state.isOpen) {
            return (
                <Comments itinerary={itinerary} key={itinerary._id}/>
                )
            }
    }

    gettingItinerariesList() {
            const {itinerary} = this.props;
            return(
                <HeartButton itinerary={itinerary} key={itinerary._id}/>
    )};
    
    

    render (){
        const {itinerary} = this.props
        console.log(itinerary)
        return(
            <div className="accordion" id="accordion2">
                <CardSubtitle className="accordion-group">
                    <CardBody className="accordion-heading">
                        <div className="accordion-toggle" data-toggle="collapse" data-parent="#accordion2">
                            <CardTitle className="title">{itinerary.title}</CardTitle>
                            <CardSubtitle className="infoContainer"><p>RATING: {' ' + itinerary.rating + ' '}| DURATION:{' ' +itinerary.duration+ ' '}| PRICE:{' ' + itinerary.price+ ' '}</p></CardSubtitle>
                                <span className='hello'>
                                {this.gettingItinerariesList()} 
                                </span>
                                <div className="imageContainer">
                                    <img width="100%" src={itinerary.img} alt=""/>    
                                </div>
                        </div>
                    </CardBody>
                    <div className="accordionBody">
                        <div className="groupOfActivities">
                            {this.getRenderedActivities()}
                        </div>
                        {this.getCommentsList()}
                    </div>
                    <CardBody>
                        <CardLink className="links" onClick={this.toggle}>{this.state.isOpen ? 'Read Less' : 'Read More'}</CardLink>
                        <CardLink className="links" href="/cities"> | Go back to Cities</CardLink>
                    </CardBody>  
                </CardSubtitle>   
            </div>
        )
    }
}

export default CollapsibleCity;