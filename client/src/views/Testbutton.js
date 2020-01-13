import React from 'react';
// import { Link } from 'react-router-dom'
import '../assets/styles/Login.css'
import { Button, Form, FormGroup} from 'reactstrap';

// import {testAction} from "../store/actions/userActions"
import { connect } from 'react-redux';

class dummyButton extends React.Component{
    constructor() {
        super();

        this.state = {
            
            testingTest: '',
            favourites: []
           
            
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.addFavouritestoArray = this.addFavouritestoArray.bind(this);
    }

    handleChange(e) {
        let target = e.target;
        let value =target.type === 'input' ? target.checked : target.value;
        let name = target.name;

        this.setState({
          [name]: value
        });

        console.log(this.state)



    }

    handleSubmit(e){
        e.preventDefault();

        console.log('The form was submitted with the following data:')

        // let text = {
        //     tester: this.state.testingText,
        // }

        // console.log(text)

        this.addFavouritestoArray(this.state.testingTest);

        // this.props.testAction(text)

    }

    addFavouritestoArray(testingTest) {
        let newArray = this.state.favourites.slice();

        if(this.state.favourites.includes(testingTest) == false){
             newArray.push(testingTest);

        } 
        else {

            

            for (let i = 0 ; i < newArray.length ; i++) {
                if (newArray[i] == testingTest) {
                    newArray.splice(i, 1)
                } 
            }


            // newArray.splice(newArray.indexOf(testingTest))
        }
        
        this.setState({favourites: newArray},() => console.log(this.state))

    }
    

render() {
return (
<div className="body">
    <input 
    type="text" 
    placeholder="Enter your text" 
    name="testingTest" 
    value= {this.state.testingTest} onChange= {this.handleChange} />

    <Button onClick={this.handleSubmit}>Submit</Button>

    <ul>
        {this.state.favourites.map((favourite,index) => {
            return (
                <li key={index}>
                    {favourite}
                </li>
            )
        }) }
    </ul>

</div>
)
}
}

const mapDispatchToProps = (dispatch) => {
    return {
        // testAction: (text) => dispatch(testAction(text))
    }
}

export default connect (null, mapDispatchToProps) (dummyButton);