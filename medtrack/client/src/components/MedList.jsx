import React from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';
import PharmacyView from './PharmacyView';
import Clock from 'react-live-clock';
import Moment from 'react-moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'







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
            // handleClick({medication})
            // props.history.push(`/meddetail`);
            // window.scrollTo(0, 0);
          }}>
            <p className="med-time">9:00am</p>
            <p className="med-pills">pills left: {medication.pills_left}</p>

            <p  className="med-name">{medication.brand_name} {medication.dosage}</p>
            <p className="take-container"><button className="take">take</button></p>
        <p className="med-doc">{medication.prescribing_doctor} : {medication.doctor_phone}</p>

            <button onClick={() => {
                  props.deleteMedication(medication.id);
                //   this.props.history.push('/medlist')
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
      {/* <div
        className="teacher-card"
        onClick={() => {
          props.history.push('/new/teacher');
          window.scrollTo(0, 0);
        }}>
       
      </div> */}
    </div>


   
        {/* <Link  to={`/meddetail`}>
        <div className="med">
            <p className="med-time">9:00am</p>
            <p className="med-name">Lipitor</p>
            <p className="with-food">take with food</p>
            <p className="last-taken">Last Taken: 3/3</p>
            <button className="take">take</button>
        </div>
        </Link> */}
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
