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
import EditMedication from './components/EditMedication'
import logopill from './images/logopill.png'
import Home from './components/Home'

import {
  createPharmacies,
  readAllPharmacies,
  loginUser,
  registerUser,
  verifyUser,
  updatePharmacies,
  destroyPharmacies,
  createMedication,
  readAllMedications,
  updateMedication,
  destroyMedication,
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
      },
      medications: [],
      medicationForm: {
        brand_name: "",
        dosage: "",
        time: "",
        prescribing_doctor: "",
        doctor_phone: ""
      },

      currentUser: null,
      authFormData: {
        username: "",
        email: "",
        password: ""
      },
      submitted: []
    };
  }

  async componentDidMount() {

    this.props.history.push("/home")
    this.getMedications();
    this.getPharmacies();
    const currentUser = await verifyUser();
    if (currentUser) {
      this.setState({ currentUser })
      this.props.history.push("/medlist")

    }
  }

  getMedications = async () => {
    const medications = await readAllMedications();
    this.setState({
      medications
    })
  }



  getPharmacies = async () => {
    const pharmacies = await readAllPharmacies();
    this.setState({
      pharmacies
    })
  }

  newPharmacy = async (e) => {
    e.preventDefault();
    const pharmacy = await createPharmacies(this.state.pharmacyForm);
    this.setState(prevState => ({
      pharmacies: [...prevState.pharmacies, pharmacy],
      pharmacyForm: {
        pharm_name: "",
        address: "",
        phone_number: "",
      }
    }))
    this.props.history.push("/pharmacyview")

  }

  newMedication = async (e) => {
    e.preventDefault();
  
    const medication = await createMedication(this.state.medicationForm);
    this.setState(prevState => ({
      medications: [...prevState.medications, medication],
      medicationForm: {
        brand_name: "",
        dosage: "",
        time: "",
        prescribing_doctor: "",
        doctor_phone: ""
      }
    }))
    this.props.history.push("/medlist")

  }
  
  deleteMedication = async (id) => {
    await destroyMedication(id);
    this.setState(prevState => ({
      medications: prevState.medications.filter(medication => medication.id !== id)
    }))
  }
  
  editMedication = async (e) => {
    // e.preventDefault()
    let id = e.target.name
    const { medicationForm } = this.state
    let med = await updateMedication(id, medicationForm);
    this.setState(
      {medication: med.data}
    )
  }



  editMeds = (medication) => {
    this.setState({
      submitted: medication
  })
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
    this.props.history.push("/home")

  }

  handleFormChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      pharmacyForm: {
        ...prevState.pharmacyForm,
        [name]: value
      }
    }))
  }

  handleFormChanges = (e) => {
    this.forceUpdate();
    console.log(e.target)
    const { name, value } = e.target;
    this.setState(prevState => ({
      medicationForm: {
        ...prevState.medicationForm,
        [name]: value
      }
    }))
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
          <img className="pill" src={logopill} />
          <h1 className="title-header"><Link style={{ textDecoration: 'none'}} className="title" to='/home' onClick={() => this.setState({
            pharmacyForm: {
              pharm_name: "",
              address: "",
              phone_number: ""
            }
          })}>MedTrack</Link></h1>
          <div className="login-header">
            {this.state.currentUser
              ?
              <div className="logout-name-combo">
                <Link style={{ textDecoration: 'none'}} to='/medlist' className="header-name">{this.state.currentUser.username}</Link>
                <button className="header-logout" onClick={this.handleLogout}>logout</button>
              </div>
              :
              <div className="header-button">
              <button className="header-login"  onClick={this.handleLoginButton}>Login</button>
              <button className="header-register"  onClick={this.handleRegisterButton}>Register</button>
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
            <Route
          path="/createmedication"
          render={() => (
            <CreateMedication
              handleFormChanges={this.handleFormChanges}
              medicationForm={this.state.medicationForm}
              newMedication={this.newMedication} />
          )} />


{/* EDIT  */}
        <Route path="/editmedication" render={() => (
                <EditMedication
                handleFormChanges={this.handleFormChanges}
                medicationForm={this.state.medicationForm}
                editMedication={this.editMedication} 
                  medication={this.state.submitted}
                  />
              )} />
          

          <Route exact path="/medlist" render={() => (
               <MedList 
              medications={this.state.medications}
              currentUser={this.state.currentUser}
              pharmacies={this.state.pharmacies}
              pharmacyForm={this.state.pharmacyForm}
              handleFormChange={this.handleFormChange}
              newPharmacy={this.newPharmacy}
              newMedication={this.newMedication}
              handleFormChange={this.handleFormChange}
              pharmacyForm={this.state.pharmacyForm}
              newPharmacy={this.newPharmacy}  
              deleteMedication={this.deleteMedication}
              editMeds={this.editMeds}

                    />)} />
          {/* <Route exact path="/createmedication" component={CreateMedication} /> */}
          {/* <Route exact path="/editmedication" component={EditMedication} /> */}


          {/* <Route exact path="/meddetail" component={MedDetail} /> */}

          <Route
          path="/meddetail"
          render={() => (
            <MedDetail
            deleteMedication={this.deleteMedication}
            />
          )} />


          <Route exact path="/home" render={() => (
          <Home
          handleLoginButton={this.handleLoginButton}
          handleRegisterButton={this.handleRegisterButton}
           />)} />
                <Route
          path="/pharmacyview"
          render={() => (
            <PharmacyView
            pharmacies={this.state.pharmacies}
            pharmacyForm={this.state.pharmacyForm}
            handleFormChange={this.handleFormChange}
            newPharmacy={this.newPharmacy} />
          )} />

        
         
          
           
        
      </div>
    );
  }
}

export default withRouter(App);
