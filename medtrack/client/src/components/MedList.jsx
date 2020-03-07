import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import PharmacyView from './PharmacyView';

function MedList(props) {
    console.log(props.currentUser)

  

  return (
 
        <div>
            <div className="welcome-med">
    
             Hi,{props.currentUser
              ?
              <>
                <span>{props.currentUser.username} </span>
              </>
              :
              <div>
              </div>
            }
        
             <p>Here are your medications</p>
             </div>
        <div className="add-med">
        <Link  to={`/createmedication`}>Add Medication</Link>
        </div>
        <Link  to={`/meddetail`}>
        <div className="med">
            < p>9:00am</p>
            <p>Lipitor</p>
            <p>take with food</p>
            <p>Last Taken: 3/3</p>
            <button>take</button>
        </div>
        </Link>
        <div className="add-pharm">
        <Link to={`/createpharmacy`}>Add Pharmacy</Link>
        </div>



   
        </div>


  )
}

export default withRouter(MedList);
