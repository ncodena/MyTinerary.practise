import React from 'react';
// import { Link } from 'react-router-dom'
import '../assets/styles/Login.css'
import { Button, Form, FormGroup} from 'reactstrap';

import {testAction} from "../store/actions/userActions"
import { connect } from 'react-redux';

class dummyButton extends React.Component{
    constructor() {
        super();

        this.state = {
            
            text: '',
           
            
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let target = e.target;
        let value =target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
          [name]: value
        });

    }

    handleSubmit(e){
        e.preventDefault();

        console.log('The form was submitted with the following data:')

        let text = {
            tester: this.state.text,
        }

        console.log(text)

        this.props.testAction(text)

    }
    

render() {
return (
<div className="body">
    <Form className="testingPage" onSubmit={(e) => this.handleSubmit(e)}>
        <h5>Log In</h5>

        <FormGroup>
            <input type="text" id="text" placeholder="Enter your text" name="text" value= {this.state.testingText} onChange= {this.handleChange}></input>
        </FormGroup>


        <div className="buttonContainer">
            <Button>Submit</Button>
        </div>
    </Form>
  

</div>
)
}
}

const mapDispatchToProps = (dispatch) => {
    return {
        testAction: (text) => dispatch(testAction(text))
    }
}

export default connect (null, mapDispatchToProps) (dummyButton);