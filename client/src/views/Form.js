import React from 'react';
// import { Link } from 'react-router-dom'
import '../assets/styles/Form.css'

class Form extends React.Component{
    constructor() {
        super();

        this.state = {
            userName:'',
            password: '',
            email: '',
            firstName: '',
            lastName: '',
            hasAgreed: false
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
    

render() {
return (
<div className="formPage">
    <form onSubmit={this.handleSubmit} >
        <h5>Create Account</h5>

        <div className="inputField">
            <label htmlFor="userName">Username:</label>
            <input type="text" id="userName" placeholder="Enter your new user name" name="userName" value={this.state.userName} onChange={this.handleChange}></input>
        </div>

        <div className="inputField">
            <label htmlFor="password">password:</label>
            <input type="text" id="password" placeholder="Enter your new password" name="password" value={this.state.password} onChange={this.handleChange}></input>
        </div>

        <div className="inputField">
            <label htmlFor="email">E-mail:</label>
            <input type="email" id="email" placeholder="Enter your e-mail adress" name="email" value={this.state.email} onChange={this.handleChange}></input>
        </div>

        <div className="inputField">
            <label htmlFor="firstName">First Name:</label>
            <input type="firstName" id="firstName" placeholder="Enter your first name" name="firstName" value={this.state.firstName} onChange={this.handleChange}></input>
        </div>

        <div className="inputField">
            <label htmlFor="lastName">Last Name:</label>
            <input type="lastName" id="lastName" placeholder="Enter your last name" name="lastName" value={this.state.lastName} onChange={this.handleChange}></input>
        </div>
        <div>
            <select>
                <option value="England">England</option>
                <option value="France">France</option>
                <option value="Germany">Germany</option>
                <option value="Holland">Holland</option>
                <option value="Ireland">Ireland</option>
                <option value="Spain">Spain</option>
                <option value="United States">United States</option>
            </select>
        </div>
        <div className="inputField">
            <label className="FormField__CheckboxLabel">
                <input type="checkbox" name="hasAgreed" value={this.state.hasAgreed} onChange={this.handleChange} /> I agree to MYtinerary's 
                {/* <a href="" className="FormField__TermsLink">Terms and Conditions.</a> */}
            </label>
        </div>

        <div className="buttonContainer">
            <button>OK</button>
        </div>
    </form>
  

</div>
)
}
}

export default Form;