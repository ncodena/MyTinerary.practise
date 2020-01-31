import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchComments} from '../store/actions/commentsAction';
import {Card, CardBody, CardTitle, CardText, CardImg}from 'reactstrap' ;

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
                    <CardImg left width="25%" src={comment.user.img} alt="user image" />
                        <CardBody>
                            <CardTitle><strong>{comment.user.userName}</strong>({comment.user.country})</CardTitle>
                            <CardText>{comment.body}</CardText>
                            <CardText>
                                <small className="text-muted">Comment posted by {comment.user.userName} on {comment.date}</small>
                            </CardText>
                        </CardBody>
                </Card>
            )

            
        })
        return commentsList
    }


    render() {
        return (
            <div className="hello">
                {this.getComments()}  
            </div>
        )
    };

    
}
const mapStateToProps = (state) => {
    return {
        comments: state.comments.comments
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchComments: (itinerary) => dispatch(fetchComments(itinerary))
    }
        
}

export default connect (mapStateToProps, mapDispatchToProps) (Comments);
