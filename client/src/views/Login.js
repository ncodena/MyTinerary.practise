import React from 'react';
// import { Link } from 'react-router-dom'
// import '../assets/styles/Form.css'
import { Button, Form, Label, FormGroup, Input} from 'reactstrap';
// import {signUp} from "../store/actions/userActions"
// import { connect } from 'react-redux';

class LogIn extends React.Component{
    constructor() {
        super();

        this.state = {
            
            // signUpUserName:'',
            // signUpPassword: '',
            // signUpEmail: '',
            // signUpFirstName: '',
            // signUpLastName: '',
            // signUpHasAgreed: false,
            
        };
    }

    // handleChange(e) {
    //     let target = e.target;
    //     let name = target.name;

    //     this.setState({
    //       [name]: value
    //     });
    // }

    handleSubmit = (e) => {
        e.preventDefault();
        // console.log(e.target.firstName.value)

        let currentUser = {
            
            password: e.target.password.value,
            email: e.target.email.value,
    
        }

        console.log(newUser)

        // this.props.signUp(currentUser)

    }
    

render() {
return (
<div className="body">
    <Form className="formPage" onSubmit={(e) => this.handleSubmit(e)}>
        <h5>Log In</h5>

        <FormGroup>
            <Label htmlFor="email">E-mail:</Label>
            <input type="text" id="email" placeholder="Enter your e-mail adress" name="email"></input>
        </FormGroup>

        <FormGroup>
            <Label htmlFor="password">Password:</Label>
            <input type="text" id="password" placeholder="Enter your new password" name="password"></input>
        </FormGroup>

        <div className="buttonContainer">
            <Button>Submit</Button>
        </div>
    </Form>
  

</div>
)
}
}



export default (LogIn);