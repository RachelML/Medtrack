import React from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';
import PharmacyView from './PharmacyView';
import Clock from 'react-live-clock';
import Moment from 'react-moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'


import Popup from "reactjs-popup";







function MedList(props) {
    console.log(props)

    function MyFunction() {
        const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
        var tempDate = new Date();
        var date = monthNames[tempDate.getMonth()] + ' ' + tempDate.getDate() + ' ' + tempDate.getFullYear()  ;
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
        <Link className="add-medication" to={`/createmedication`}><FontAwesomeIcon className="add-icon" icon={faPlus} />
</Link>
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
LastTaken()
      }}> take </button>}
    modal
    closeOnDocumentClick
  >
    <p className="pop-ty"> Thank you for taking your medication today! </p>
  </Popup></p>

        <p className="med-doc">{medication.prescribing_doctor} : {medication.doctor_phone}</p>
        <button className="edit-icon" onClick={() => {
                //   this.setState({
                //     isEdit: true
                //   })
                props.editMeds(medication)
                  props.history.push(`/editmedication`)
                }}><FontAwesomeIcon className="icon"icon={faEdit} />
                </button>
            <button className="delete-icon" onClick={() => {
                  props.deleteMedication(medication.id);
                }}><FontAwesomeIcon className="icon" icon={faTimes} />
                </button>
                    

        </div>
      ))}
   
    </div>


    <div className="my-pharm">
        <Link style={{ textDecoration: 'none'}} className="my-pharmacy" to={`/pharmacyview`}>My Pharmacy</Link>
        </div>
      
        <div className="add-pharm">
        <Link className="add-pharmacy" to={`/createpharmacy`}><FontAwesomeIcon className="add-icon" icon={faPlus} />
</Link>
        </div>
        
        
        
     

        
   
        </div>


  )
}

export default withRouter(MedList);
