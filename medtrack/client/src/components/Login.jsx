import React from 'react';
import { Link } from 'react-router-dom';


// This component handles our login form and has a link to the register form
const Login = (props) => {

  return (
      <div>
    <div className="login">
      <h2>Sign in</h2>
      <form onSubmit={(e) => {
        e.preventDefault();
        props.handleLogin();}} >
        <p>Username:</p>
        <input className='form-input' name="username" type="text" value={props.formData.username} onChange={props.handleChange} />
        <p>Password:</p>
        <input className='form-input' name="password" type="password" value={props.formData.password} onChange={props.handleChange} />
       
        <button className="login-button">Login</button>
            <div>
        </div>
        <p>    </p>

      </form>

    </div>
          <Link className="register-link"to="/register">Register</Link>
    </div>

  );
}

export default Login;
