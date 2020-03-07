import React from 'react';
import { withRouter } from 'react-router-dom';

function MedList(props) {
    console.log(props.currentUser)
  return (
 
        <div>
            <div>
            Hi, Username
             Here are your medications
             </div>

        <button>Add Medication</button>
        <button>Add Pharmacy</button>

   
        </div>


  )
}

export default withRouter(MedList);
