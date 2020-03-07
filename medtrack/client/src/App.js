import React, { Component } from 'react';
import { Route, Link, Redirect } from 'react-router-dom';
import { withRouter } from 'react-router';

import PharmacyView from './components/PharmacyView';
import CreatePharmacy from './components/CreatePharmacy'
import Login from './components/Login'
import Register from './components/Register'
import MedList from './components/MedList'
import CreateMedication from './components/CreateMedication'
import MedDetail from './components/MedDetail'


import {
  createPharmacies,
  readAllPharmacies,
  loginUser,
  registerUser,
  verifyUser
} from './services/api-helper'

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pharmacies: [],
      pharmacyForm: {
        pharm_name: "",
        address: "",
        phone_number: "",
        comment: ""
      },

  
      currentUser: null,
      authFormData: {
        username: "",
        email: "",
        password: ""
      }
    };
  }

  async componentDidMount() {
    this.getPharmacies();
    const currentUser = await verifyUser();
    if (currentUser) {
      this.setState({ currentUser })
    }
  }



  getPharmacies = async () => {
    const pharmacies = await readAllPharmacies();
    this.setState({
      pharmacies
    })
    console.log(this.state.pharmacies)
  }

  newPharmacy = async (e) => {
    e.preventDefault();
    const pharmacy = await createPharmacies(this.state.pharmacyForm);
    this.setState(prevState => ({
      pharmacies: [...prevState.teachers, pharmacy],
      pharmacyForm: {
        pharm_name: "",
        address: "",
        phone_number: "",
        comment: ""
      }
    }))
  }
  

  handleLoginButton = () => {
    this.props.history.push("/login")
  }


  handleRegisterButton = () => {
    this.props.history.push("/register")
  }

  handleLogin = async () => {
    const currentUser = await loginUser(this.state.authFormData);
    this.setState({ currentUser });
    this.props.history.push("/medlist")
  }

  handleRegister = async (e) => {
    e.preventDefault();
    const currentUser = await registerUser(this.state.authFormData);
    this.setState({ currentUser });
        this.props.history.push("/medlist")

  }

  handleLogout = () => {
    localStorage.removeItem("jwt");
    this.setState({
      currentUser: null
    })
    this.props.history.push("/")

  }

  authHandleChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      authFormData: {
        ...prevState.authFormData,
        [name]: value
      }
    }));
  }

  render() {

    return (
      <div className="App">
        <header className="header">
          <h1><Link to='/' onClick={() => this.setState({
            pharmacyForm: {
              pharm_name: "",
              address: "",
              phone_number: "",
              comment: ""
            }
          })}>MedTrack</Link></h1>
          <div className="login-header">
            {this.state.currentUser
              ?
              <>
                <span>{this.state.currentUser.username}</span>
                <button onClick={this.handleLogout}>logout</button>
              </>
              :
              <div>
              <button onClick={this.handleLoginButton}>Login</button>
              <button onClick={this.handleRegisterButton}>Register</button>
              </div>
            }
          </div>
      
        </header>
        <Route exact path="/login" render={() => (
          <Login
            handleLogin={this.handleLogin}
            handleChange={this.authHandleChange}
            formData={this.state.authFormData} />)} />
        <Route exact path="/register" render={() => (
          <Register
            handleRegister={this.handleRegister}
            handleChange={this.authHandleChange}
            formData={this.state.authFormData} />)} />
            <Route
          path="/createpharmacy"
          render={() => (
            <CreatePharmacy
              handleFormChange={this.handleFormChange}
              pharmacyForm={this.state.pharmacyForm}
              newPharmacy={this.newPharmacy} />
          )} />

          <Route exact path="/medlist" render={() => (
               <MedList 
              currentUser={this.state.currentUser}
                    />)} />
          <Route exact path="/createmedication" component={CreateMedication} />
          <Route exact path="/meddetail" component={MedDetail} />


    
          
            {/* <PharmacyView
              pharmacies={this.state.pharmacies}
              pharmacyForm={this.state.pharmacyForm}
              handleFormChange={this.handleFormChange}
              newPharmacy={this.newPharmacy} /> */}
        
      </div>
    );
  }
}

export default withRouter(App);
