import React from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';
import PharmacyView from './PharmacyView';
import Clock from 'react-live-clock';
import Moment from 'react-moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Popup from "reactjs-popup";







function MedList(props) {
    console.log(props)

    function MyFunction() {
        var tempDate = new Date();
        var date = (tempDate.getMonth()+1) + '-' + tempDate.getDate() + '-' + tempDate.getFullYear()  ;
        const currDate = "Today is "+date;
        return (
          <p>{currDate}</p>
        )
    }

    function LastTaken() {
        var tempDate = new Date();
        var date = (tempDate.getMonth()+1) + '-' + tempDate.getDate() + '-' + tempDate.getFullYear()  ;
        const currDate = "last taken: "+date;
        return (

            <p>{currDate}</p>
          )

    }
 
       
  return (

        <div>
                         <MyFunction />
             

<div className="welcome-med">
             Hi, {props.currentUser
              ?
              <>
                <span className="user-render">{props.currentUser.username} </span>
              </>
              :
              <div>
              </div>
            }
        
             <p className="your-meds">Here are your medications</p>
             
             <Clock className="clock"
          format={'h:mm:ss A'}
          ticking={true}
         />    
       
             </div>
             <p className="med-head">Medication</p>

             <div className="add-med">
        <Link className="add-medication" to={`/createmedication`}>Add Medication</Link>
        </div>

             <div >
                 
      {props.medications.map(medication => (
        <div
          key={medication.id}
          className="med"
          onClick={(e) => {
         
          }}>
            <p className="med-time">{medication.time}</p>
            <p  className="med-name">{medication.brand_name} {medication.dosage}</p>
            <p className="take-container"> <Popup 
    trigger={<button className="take" onClick={() => {
return (
    <div>
    <LastTaken />
    </div>

)     
      }}> take </button>}
    modal
    closeOnDocumentClick
  >
    <p className="pop-ty"> Thank you for taking your medication today! </p>
  </Popup></p>

        <p className="med-doc">{medication.prescribing_doctor} : {medication.doctor_phone}</p>

            <button onClick={() => {
                  props.deleteMedication(medication.id);
                }}>Delete</button>
                    <button onClick={() => {
                //   this.setState({
                //     isEdit: true
                //   })
                props.editMeds(medication)
                  props.history.push(`/editmedication`)
                }}>Edit</button>

        </div>
      ))}
   
    </div>


   
      
        <div className="add-pharm">
        <Link className="add-pharmacy" to={`/createpharmacy`}>Add Pharmacy</Link>
        </div>
        
        <div className="my-pharm">
        <Link className="my-pharmacy" to={`/pharmacyview`}>My Pharmacy</Link>
        </div>
        
     

        
   
        </div>


  )
}

export default withRouter(MedList);
