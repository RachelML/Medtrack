import React from 'react';
import { withRouter, Link, Route } from 'react-router-dom';
import PharmacyView from './PharmacyView';
import EditMedication from './EditMedication'


function MedDetail(props) {
    console.log(props.currentUser)

  

  return (
 
        <div>
   <p>Medication Detail</p>
        <div className="med">
            < p>9:00am</p>
            <p>Lipitor</p>
            <p>take with food</p>
            <p>Last Taken: 3/3</p>
            <button>take</button>
        </div>
     <Link to={`/MedList`}>back</Link>
     <Link  to={`/editmedication`}>Edit</Link>     
     <button>delete</button>





   
        </div>


  )
}

export default withRouter(MedDetail);
