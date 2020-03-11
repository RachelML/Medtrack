import React from 'react';
import { withRouter } from 'react-router-dom';
import bottleone from '../images/bottleone.png'
import bottletwo from '../images/bottletwo.png'
import bottlethree from '../images/bottlethree.png'



function Home(props) {
  return (
      <div className="home-container">
          <p className="slogan">Easily track your medications</p>
          
          <div className="bottle-container">
          <img className="bottleone" src={bottleone} />
          <img className="bottletwo" src={bottletwo} />
          <img className="bottlethree" src={bottlethree} />
          <img className="bottlefour" src={bottleone} />
          </div>



          <button onClick={props.handleRegisterButton}  className="sign-in-now">Sign up now</button>
          <button  onClick={props.handleLoginButton} className="log-in-now">Login</button>


      </div>
    
  )
}

export default withRouter(Home);

