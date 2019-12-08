import React from 'react';
// import { Link } from 'react-router-dom'
import '../assets/styles/Form.css'
import { Button, Form, Label, FormGroup, Input} from 'reactstrap';
import {signUp} from "../store/actions/userActions"

class SignUp extends React.Component{
    constructor() {
        super();

        this.state = {
            isLoading: true,
            signUpError: '',


            signUpUserName:'',
            signUpPassword: '',
            signUpEmail: '',
            signUpFirstName: '',
            signUpLastName: '',
            signUpHasAgreed: false,
            signUpValue: 'select country'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
          [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        console.log('The form was submitted with the following data:');
        console.log(this.state);
    }
    
    // async getUsers(username, password){
    //     const user = await axios.post('http://localhost:5000/users/', {
    //       username,
    //       password
    //     });
        
    //    }

render() {
return (
<div className="body">
    <Form className="formPage" onSubmit={this.handleSubmit} >
        <h5>Sign Up</h5>

        <label className="form-group">
            <span htmlFor="userName">Username:</span>
            <input type="userName" id="userName" placeholder="Enter your new user name" name="userName" value={this.signUpUserName} onChange={this.handleChange}></input>
        </label>

        <FormGroup>
            <Label htmlFor="password">password:</Label>
            <input type="password" id="password" placeholder="Enter your new password" name="password" value={this.signUpPassword} onChange={this.handleChange}></input>
        </FormGroup>

        <FormGroup>
            <Label htmlFor="email">E-mail:</Label>
            <input type="email" id="email" placeholder="Enter your e-mail adress" name="email" value={this.signUpEmail} onChange={this.handleChange}></input>
        </FormGroup>

        <FormGroup>
            <Label htmlFor="firstName">First Name:</Label>
            <input type="firstName" id="firstName" placeholder="Enter your first name" name="firstName" value={this.signUpFirstName} onChange={this.handleChange}></input>
        </FormGroup>

        <FormGroup>
            <Label htmlFor="lastName">Last Name:</Label>
            <input type="lastName" id="lastName" placeholder="Enter your last name" name="lastName" value={this.signUpLastName} onChange={this.handleChange}></input>
        </FormGroup>
        <FormGroup>
            <Label for="exampleSelect">Select</Label>
            <select name="value" value={this.signUpValue} onChange={this.handleChange}>
                <option value="select country">Select your country</option>
                <option value="England">England</option>
                <option value="France">France</option>
                <option value="Germany">Germany</option>
                <option value="Holland">Holland</option>
                <option value="Ireland">Ireland</option>
                <option value="Spain">Spain</option>
                <option value="United States">United States</option>
            </select>
        </FormGroup>
        <FormGroup>
            <Label className="FormField__CheckboxLabel">
                <Input type="checkbox" name="hasAgreed" value={this.signUpHasAgreed} onChange={this.handleChange} /> I agree to MYtinerary's 
                {/* <a href="" className="FormField__TermsLink">Terms and Conditions.</a> */}
            </Label>
        </FormGroup>

        <div className="buttonContainer">
            <Button>OK</Button>
        </div>
    </Form>
  

</div>
)
}
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp : (newUser) => dispatch(signUp(newUser))
    }
}

export default SignUp;