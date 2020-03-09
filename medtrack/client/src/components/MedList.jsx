import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import PharmacyView from './PharmacyView';
import Clock from 'react-live-clock';



function MedList(props) {
    console.log(props.currentUser)

  

  return (
 
        <div>
            <div className="welcome-med">
    
             Hi,{props.currentUser
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
          format={'dddd, MMMM Mo, YYYY, h:mm:ss A'}
          ticking={true}
         />            



             </div>
        <div className="add-med">
        <Link className="add-medication" to={`/createmedication`}>Add Medication</Link>
        </div>
        <Link  to={`/meddetail`}>
        <div className="med">
            <p className="med-time">9:00am</p>
            <p className="med-name">Lipitor</p>
            <p className="with-food">take with food</p>
            <p className="last-taken">Last Taken: 3/3</p>
            <button className="take">take</button>
        </div>
        </Link>
        <div className="add-pharm">
        <Link className="add-pharmacy" to={`/createpharmacy`}>Add Pharmacy</Link>
        </div>


   
        </div>


  )
}

export default withRouter(MedList);
