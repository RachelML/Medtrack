import React from 'react';

const Register = (props) => {

  return (
    <div className="login">
      <h2>Register</h2>
      <form onSubmit={props.handleRegister} >
        <p>Username:</p>
        <input className='form-input' name="username" type="text" value={props.formData.username} onChange={props.handleChange} />
        <p>Email:</p>
        <input className='form-input' name="email" type="text" value={props.formData.email} onChange={props.handleChange} />
        <p>Password:</p>
        <input className='form-input' name="password" type="password" value={props.formData.password} onChange={props.handleChange} />
        <button className="login-button">Register</button>
        <p>      </p>
      </form>
    </div>
  );
}

export default Register;
