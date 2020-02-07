import React from 'react';
// import { Link } from 'react-router-dom'
import '../assets/styles/Login.css'
import { Button, Form, Label, FormGroup} from 'reactstrap';
import {login} from "../store/actions/userActions"
import { connect } from 'react-redux';

class LogIn extends React.Component{
    constructor() {
        super();

        this.state = {
            
            email: '',
            password: ''
           
            
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

        let user = {
            email: this.state.email,
            password: this.state.password
        }

        console.log(user)

        this.props.login(user)

    }
    

render() {
return (
<div className="body">
    <Form className="loginPage" onSubmit={(e) => this.handleSubmit(e)}>
        <h5>Log In</h5>

        <FormGroup>
            <Label htmlFor="email">E-mail:</Label>
            <input type="text" id="email" placeholder="Enter your e-mail adress" name="email" value= {this.state.email} onChange= {this.handleChange}></input>
        </FormGroup>

        <FormGroup>
            <Label htmlFor="password">Password:</Label>
            <input type="text" id="password" placeholder="Enter your new password" name="password" value= {this.state.password} onChange= {this.handleChange}></input>
        </FormGroup>

        <div className="buttonContainer">
            <Button>Sign In</Button>
        </div>
    </Form>
  

</div>
)
}
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (user) => dispatch(login(user))
    }
}

export default connect (null, mapDispatchToProps) (LogIn);