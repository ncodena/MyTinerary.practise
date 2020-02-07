import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchComments} from '../store/actions/commentsAction';
import {Card, CardBody, CardTitle, CardText}from 'reactstrap' ;

class Comments extends Component {

    componentDidMount(){

        const {itinerary} = this.props;
        console.log(itinerary._id)

        
        this.props.fetchComments(itinerary._id)
        console.log(this.props.fetchComments(itinerary._id)) 

       

    };

    getComments = () => {

        console.log(this.props.comments)

        let commentsList = this.props.comments.map(comment => {
            return (
                <Card>
                        <CardBody>
                            <CardBody className="userContainer">
                                <img width="25%" src={comment.user.img} alt="user image" />
                                <CardTitle><strong>{comment.user.userName + ' '}</strong>({ comment.user.country})</CardTitle>
                            </CardBody>
                            <CardText>{comment.body}</CardText>
                            <CardText>
                                <small className="text-muted">Comment posted by {comment.user.userName} on {comment.date}</small>
                            </CardText>
                        </CardBody>
                </Card>
            )
            
        })
        if(commentsList.length === 0){
            commentsList =(
                <p>No comments added yet</p>
            )
        }
        return commentsList
    }


    render() {
        return (
            <div className="hello">
                <h2>Comments</h2>
                {this.getComments()}  
            </div>
        )
    };

    
}
const mapStateToProps = (state) => {
    return {
        comments: state.comments.comments,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchComments: (itinerary) => dispatch(fetchComments(itinerary))
    }
        
}

export default connect (mapStateToProps, mapDispatchToProps) (Comments);
