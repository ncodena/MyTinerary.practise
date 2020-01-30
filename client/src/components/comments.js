import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchComments} from '../store/actions/commentsAction';

class Comments extends Component {

    componentDidMount(){

       

    };

    getComments = () => {
        const {itinerary} = this.props;

        console.log(this.props.fetchComments(itinerary)) 

    }







    render() {
        return (
            <div>

                {this.getComments()}
                
            </div>
        )
    };

    
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchComments: (itinerary) => dispatch(fetchComments(itinerary))
    }
        
}

export default connect (null, mapDispatchToProps) (Comments);
