import React from 'react';
// import { Link } from 'react-router-dom'
import '../assets/styles/Form.css'
import { Button, Form, Label, FormGroup, Input} from 'reactstrap';
import {signUp} from "../store/actions/userActions"
import { connect } from 'react-redux';

class SignUp extends React.Component{
    constructor() {
        super();

        this.state = {
            countryList : [
                "Afghanistan",
                "Albania",
                "Algeria",
                "American Samoa",
                "Andorra",
                "Angola",
                "Anguilla",
                "Antarctica",
                "Antigua and Barbuda",
                "Argentina",
                "Armenia",
                "Aruba",
                "Australia",
                "Austria",
                "Azerbaijan",
                "Bahamas (the)",
                "Bahrain",
                "Bangladesh",
                "Barbados",
                "Belarus",
                "Belgium",
                "Belize",
                "Benin",
                "Bermuda",
                "Bhutan",
                "Bolivia (Plurinational State of)",
                "Bonaire, Sint Eustatius and Saba",
                "Bosnia and Herzegovina",
                "Botswana",
                "Bouvet Island",
                "Brazil",
                "British Indian Ocean Territory (the)",
                "Brunei Darussalam",
                "Bulgaria",
                "Burkina Faso",
                "Burundi",
                "Cabo Verde",
                "Cambodia",
                "Cameroon",
                "Canada",
                "Cayman Islands (the)",
                "Central African Republic (the)",
                "Chad",
                "Chile",
                "China",
                "Christmas Island",
                "Cocos (Keeling) Islands (the)",
                "Colombia",
                "Comoros (the)",
                "Congo (the Democratic Republic of the)",
                "Congo (the)",
                "Cook Islands (the)",
                "Costa Rica",
                "Croatia",
                "Cuba",
                "Curaçao",
                "Cyprus",
                "Czechia",
                "Côte d'Ivoire",
                "Denmark",
                "Djibouti",
                "Dominica",
                "Dominican Republic (the)",
                "Ecuador",
                "Egypt",
                "El Salvador",
                "Equatorial Guinea",
                "Eritrea",
                "Estonia",
                "Eswatini",
                "Ethiopia",
                "Falkland Islands (the) [Malvinas]",
                "Faroe Islands (the)",
                "Fiji",
                "Finland",
                "France",
                "French Guiana",
                "French Polynesia",
                "French Southern Territories (the)",
                "Gabon",
                "Gambia (the)",
                "Georgia",
                "Germany",
                "Ghana",
                "Gibraltar",
                "Greece",
                "Greenland",
                "Grenada",
                "Guadeloupe",
                "Guam",
                "Guatemala",
                "Guernsey",
                "Guinea",
                "Guinea-Bissau",
                "Guyana",
                "Haiti",
                "Heard Island and McDonald Islands",
                "Holy See (the)",
                "Honduras",
                "Hong Kong",
                "Hungary",
                "Iceland",
                "India",
                "Indonesia",
                "Iran (Islamic Republic of)",
                "Iraq",
                "Ireland",
                "Isle of Man",
                "Israel",
                "Italy",
                "Jamaica",
                "Japan",
                "Jersey",
                "Jordan",
                "Kazakhstan",
                "Kenya",
                "Kiribati",
                "Korea (the Democratic People's Republic of)",
                "Korea (the Republic of)",
                "Kuwait",
                "Kyrgyzstan",
                "Lao People's Democratic Republic (the)",
                "Latvia",
                "Lebanon",
                "Lesotho",
                "Liberia",
                "Libya",
                "Liechtenstein",
                "Lithuania",
                "Luxembourg",
                "Macao",
                "Madagascar",
                "Malawi",
                "Malaysia",
                "Maldives",
                "Mali",
                "Malta",
                "Marshall Islands (the)",
                "Martinique",
                "Mauritania",
                "Mauritius",
                "Mayotte",
                "Mexico",
                "Micronesia (Federated States of)",
                "Moldova (the Republic of)",
                "Monaco",
                "Mongolia",
                "Montenegro",
                "Montserrat",
                "Morocco",
                "Mozambique",
                "Myanmar",
                "Namibia",
                "Nauru",
                "Nepal",
                "Netherlands (the)",
                "New Caledonia",
                "New Zealand",
                "Nicaragua",
                "Niger (the)",
                "Nigeria",
                "Niue",
                "Norfolk Island",
                "Northern Mariana Islands (the)",
                "Norway",
                "Oman",
                "Pakistan",
                "Palau",
                "Palestine, State of",
                "Panama",
                "Papua New Guinea",
                "Paraguay",
                "Peru",
                "Philippines (the)",
                "Pitcairn",
                "Poland",
                "Portugal",
                "Puerto Rico",
                "Qatar",
                "Republic of North Macedonia",
                "Romania",
                "Russian Federation (the)",
                "Rwanda",
                "Réunion",
                "Saint Barthélemy",
                "Saint Helena, Ascension and Tristan da Cunha",
                "Saint Kitts and Nevis",
                "Saint Lucia",
                "Saint Martin (French part)",
                "Saint Pierre and Miquelon",
                "Saint Vincent and the Grenadines",
                "Samoa",
                "San Marino",
                "Sao Tome and Principe",
                "Saudi Arabia",
                "Senegal",
                "Serbia",
                "Seychelles",
                "Sierra Leone",
                "Singapore",
                "Sint Maarten (Dutch part)",
                "Slovakia",
                "Slovenia",
                "Solomon Islands",
                "Somalia",
                "South Africa",
                "South Georgia and the South Sandwich Islands",
                "South Sudan",
                "Spain",
                "Sri Lanka",
                "Sudan (the)",
                "Suriname",
                "Svalbard and Jan Mayen",
                "Sweden",
                "Switzerland",
                "Syrian Arab Republic",
                "Taiwan (Province of China)",
                "Tajikistan",
                "Tanzania, United Republic of",
                "Thailand",
                "Timor-Leste",
                "Togo",
                "Tokelau",
                "Tonga",
                "Trinidad and Tobago",
                "Tunisia",
                "Turkey",
                "Turkmenistan",
                "Turks and Caicos Islands (the)",
                "Tuvalu",
                "Uganda",
                "Ukraine",
                "United Arab Emirates (the)",
                "United Kingdom of Great Britain and Northern Ireland (the)",
                "United States Minor Outlying Islands (the)",
                "United States of America (the)",
                "Uruguay",
                "Uzbekistan",
                "Vanuatu",
                "Venezuela (Bolivarian Republic of)",
                "Viet Nam",
                "Virgin Islands (British)",
                "Virgin Islands (U.S.)",
                "Wallis and Futuna",
                "Western Sahara",
                "Yemen",
                "Zambia",
                "Zimbabwe",
                "Åland Islands"
            ]


            // signUpUserName:'',
            // signUpPassword: '',
            // signUpEmail: '',
            // signUpFirstName: '',
            // signUpLastName: '',
            // signUpHasAgreed: false,
            
            // signUpValue: 'select country'
        };
    }

    // handleChange(e) {
    //     let target = e.target;
    //     let value = target.type === 'checkbox' ? target.checked : target.value;
    //     let name = target.name;

    //     this.setState({
    //       [name]: value
    //     });
    // }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.firstName.value)

        let newUser = {
            
            firstName: e.target.firstName.value,
            lastName: e.target.lastName.value,
            userName: e.target.userName.value,
            password: e.target.password.value,
            email: e.target.email.value,
            country: e.target.country.value,
            hasAgreed: e.target.hasAgreed.value,
        }

        console.log(newUser)
        this.props.signUp(newUser)

        // console.log('The form was submitted with the following data:');
        // console.log(this.state);
    }
    
    selectCountries() {
    
       return this.state.countryList.map((country, index) => <option value= {country} key={index}>{country}</option>)
    }

render() {
return (
<div className="body">
    <Form className="formPage" onSubmit={(e) => this.handleSubmit(e)}>
        <h5>Sign Up</h5>

        <FormGroup className="form-group">
            <Label htmlFor="userName">Username:</Label>
            <input type="text" id="userName" placeholder="Enter your new user name" name="userName"></input>
        </FormGroup>

        <FormGroup>
            <Label htmlFor="password">Password:</Label>
            <input type="text" id="password" placeholder="Enter your new password" name="password"></input>
        </FormGroup>

        <FormGroup>
            <Label htmlFor="email">E-mail:</Label>
            <input type="text" id="email" placeholder="Enter your e-mail adress" name="email"></input>
        </FormGroup>

        <FormGroup>
            <Label htmlFor="firstName">First Name:</Label>
            <input type="text" id="firstName" placeholder="Enter your first name"></input>
        </FormGroup>

        <FormGroup>
            <Label htmlFor="lastName">Last Name:</Label>
            <input type="text" id="lastName" placeholder="Enter your last name" name="lastName"></input>
        </FormGroup>
        <FormGroup>
            <Label for="exampleSelect">Country</Label>
            <select className="inputForCountries" as="select" name="country" id="country">
                <option value='false'>Select your country</option>
                {this.selectCountries()}
            </select>
        </FormGroup>
        <FormGroup className="checkboxForm">
            <Label className="FormField__CheckboxLabel"></Label>
            <Input type="checkbox" id="hasAgreed" name="hasAgreed"/> I agree to MYtinerary's 
                {/* <a href="" className="FormField__TermsLink">Terms and Conditions.</a> */}
            
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
        signUp: (newUser) => dispatch(signUp(newUser))
    }
}

export default connect(null, mapDispatchToProps)(SignUp);