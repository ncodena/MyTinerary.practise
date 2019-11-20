import React, { Component } from 'react';
// import '../assets/styles/Cities.css';
import { connect } from 'react-redux';
import * as itineraryAction from "../store/actions/itineraryAction.js"

class Itineraries extends Component{

    constructor (props){
        super(props);
        this.state={
            itineraries = [],
        }
    }

    componentDidMount(){
        this.props.fetchItineraries()
            .then(()=> console.log(this.props.itineraries))
    
    }

    render () {
        
    }

}

export default connect(mapStatetoProps, mapDispatchToProps) (Itineraries);