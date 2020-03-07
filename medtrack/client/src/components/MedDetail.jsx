import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import PharmacyView from './PharmacyView';

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
     <button>edit</button>
     <button>delete</button>



   
        </div>


  )
}

export default withRouter(MedDetail);
