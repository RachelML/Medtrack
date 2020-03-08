import React from 'react';
import { withRouter } from 'react-router-dom';

function Home(props) {
  return (
      <div>
          <p>Easily track your medications</p>
          <button>Sign up now</button>
          <button>Login</button>

      </div>
    
  )
}

export default withRouter(Home);

