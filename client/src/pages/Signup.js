import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from '@apollo/react-hooks';
import Auth from "../utils/auth";
import { ADD_USER } from "../utils/mutations";
import { validateEmail } from '../utils/helpers';

function Signup(props) {

  const [userFormData, setUserFormData] = useState({ username: '', email: '', password: '', confirmPassword: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const [addUser] = useMutation(ADD_USER);

  // set state for form validation
  const [validated] = useState(false);
  // set state for alert
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });

    if (event.target.name === 'Email') {
      const isValid = validateEmail(event.target.value);
      console.log(isValid);
      // isValid conditional statement
      if (!isValid) {
          setErrorMessage('Your email is invalid.');
      } else {
          setErrorMessage('');
      }
  } else {
      if (!event.target.value.length) {
        setErrorMessage(`${event.target.name} is required.`); 
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setUserFormData({ ...userFormData, [event.target.name]: event.target.value });
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

     // use try/catch instead of promises to handle errors
  try {
    const { data } = await addUser({
      variables: { ...userFormData }
    });
  
    Auth.login(data.addUser.token);
    console.log(data);

  } catch (e) {
    console.error(e);
    setShowAlert(true);
  }

    setUserFormData({
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
  }

//   const handleConfirmPassword = (event) => {
//     const { name, value } = event.target;
//     setUserFormData({ ...userFormData, [name]: value });

//     let input = this.state.input;
//     let errors = {};
//     let isValid = true;

//     if (!input["confirmPassword"]) {
//       isValid = false;
//       errors["confirmPassword"] = "Please enter your confirm password.";
//     }

//     if (typeof input["password"] !== "undefined" && typeof input["confirmPassword"] !== "undefined") {
          
//       if (input["password"] != input["confirmPassword"]) {
//         isValid = false;
//         errors["password"] = "Passwords don't match.";
//       }
//     } 

//     this.setState({
//       errors: errors
//     });

//     return isValid;
// }

  return (
    <div className="container my-1 signup-container">
      <Link to="/login">
        <div className="signup-info">
        ← Go to Login
        </div>
      </Link>

      <h2>Signup</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="flex-row space-between my-2 signup-info">
          <label htmlFor="firstName">First Name:</label>
          <input
            placeholder="First"
            name="First Name"
            type="firstName"
            id="firstName"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2 signup-info">
          <label htmlFor="lastName">Last Name:</label>
          <input
            placeholder="Last"
            name="Last Name"
            type="lastName"
            id="lastName"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2 signup-info">
          <label htmlFor="email">Email:</label>
          <input
            placeholder="youremail@test.com"
            name="Email"
            type="email"
            id="email"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-3 signup-info">
          <label htmlFor="pwd">Password:</label>
          <input
            placeholder="******"
            name="Password"
            type="password"
            id="pwd"
            onChange={handleChange}
          />
        </div>
        <div className="my-4 signup-info">(5 characters min.)</div>
        <div className="flex-row space-between my-2 signup-info">
          <label htmlFor="confirmPwd">Confirm Password:</label>
          <input
            placeholder="******"
            name="confirmPassword"
            type="password"
            id="confirmPassword"
            onChange={handleFormSubmit}
          />
        </div>
        <div className="flex-row flex-end">
          <button type="submit signup-info">
            Submit
          </button>
        </div>
        {errorMessage && (
            <div>
                <p className="error-text signup-info">{errorMessage}</p>
            </div>
            )}
      </form>
    </div>
  );

}

export default Signup;

// class Signup extends React.Component {
//   constructor() {
//   super();
//   this.state = {
//     input: {},
//     errors: {}
//   };
   
//   this.handleChange = this.handleChange.bind(this);
//   this.handleSubmit = this.handleSubmit.bind(this);
// }
   
// handleChange(event) {
//   let input = this.state.input;
//   input[event.target.name] = event.target.value;

//   this.setState({
//     input
//   });
// }
   
// handleSubmit(event) {
//   event.preventDefault();

//   if(this.validate()){
//       console.log(this.state);

//       let input = {};
//       input["name"] = "";
//       input["email"] = "";
//       input["password"] = "";
//       input["confirm_password"] = "";
//       this.setState({input:input});

//       alert('Demo Form is submited');
//   }
// }

// validate(){
//     let input = this.state.input;
//     let errors = {};
//     let isValid = true;

//     if (!input["name"]) {
//       isValid = false;
//       errors["name"] = "Please enter your name.";
//     }

//     if (!input["email"]) {
//       isValid = false;
//       errors["email"] = "Please enter your email Address.";
//     }

//     if (typeof input["email"] !== "undefined") {
        
//       var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
//       if (!pattern.test(input["email"])) {
//         isValid = false;
//         errors["email"] = "Please enter valid email address.";
//       }
//     }

//     if (!input["password"]) {
//       isValid = false;
//       errors["password"] = "Please enter your password.";
//     }

//     if (!input["confirm_password"]) {
//       isValid = false;
//       errors["confirm_password"] = "Please enter your confirm password.";
//     }

//     if (typeof input["password"] !== "undefined" && typeof input["confirm_password"] !== "undefined") {
        
//       if (input["password"] != input["confirm_password"]) {
//         isValid = false;
//         errors["password"] = "Passwords don't match.";
//       }
//     } 

//     this.setState({
//       errors: errors
//     });

//     return isValid;
// }
   
// render() {
//   return (
//     <div className="container my-1 signup-container">
//       <h1>React Password and Confirm Password Validation Example - ItSolutionStuff.com</h1>
//       <form onSubmit={this.handleSubmit}>

//         <div class="form-group">
//           <label for="name">Name:</label>
//           <input 
//             type="text" 
//             name="firstnameZ" 
//             value={this.state.input.name}
//             onChange={this.handleChange}
//             class="form-control" 
//             placeholder="Enter name" 
//             id="name" />

//             <div className="text-danger">{this.state.errors.name}</div>
//         </div>

//         <div class="form-group">
//           <label for="email">Email Address:</label>
//           <input 
//             type="text" 
//             name="email" 
//             value={this.state.input.email}
//             onChange={this.handleChange}
//             class="form-control" 
//             placeholder="Enter email" 
//             id="email" />

//             <div className="text-danger">{this.state.errors.email}</div>
//         </div>
 
//         <div class="form-group">
//           <label for="password">Password:</label>
//           <input 
//             type="password" 
//             name="password" 
//             value={this.state.input.password}
//             onChange={this.handleChange}
//             class="form-control" 
//             placeholder="Enter password" 
//             id="password" />

//             <div className="text-danger">{this.state.errors.password}</div>
//         </div>

//         <div class="form-group">
//           <label for="password">Confirm Password:</label>
//           <input 
//             type="password" 
//             name="confirm_password" 
//             value={this.state.input.confirm_password}
//             onChange={this.handleChange}
//             class="form-control" 
//             placeholder="Enter confirm password" 
//             id="confirm_password" />

//             <div className="text-danger">{this.state.errors.confirm_password}</div>
//         </div>
            
//         <input type="submit" value="Submit" class="btn btn-success" />
//       </form>
//     </div>
//   );
// }
// }

// export default Signup;