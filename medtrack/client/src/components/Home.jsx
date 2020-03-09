import React from 'react';
import { withRouter } from 'react-router-dom';

function Home(props) {
  return (
      <div>
          <p>Easily track your medications</p>
          <button onClick={props.handleRegisterButton}  className="sign-in-now">Sign up now</button>
          <button  onClick={props.handleLoginButton} className="log-in-now">Login</button>

      </div>
    
  )
}

export default withRouter(Home);

