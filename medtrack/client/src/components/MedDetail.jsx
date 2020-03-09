import React from 'react';
import { withRouter, Link, Route } from 'react-router-dom';
import PharmacyView from './PharmacyView';
import EditMedication from './EditMedication'


function MedDetail(props) {
    console.log(props)

  

  return (
 
        <div>
   <p>Medication Detail</p>
        <div className="med">
        <   p className="med-time">9:00am</p>
            <p className="med-name">Lipitor</p>
            <p className="with-food">take with food</p>
            <p className="last-taken">Last Taken: 3/3</p>
            <button>take</button>
        </div>
     <Link to={`/MedList`}>back</Link>
     <Link  to={`/editmedication`}>Edit</Link>     
     <button>delete</button>





   
        </div>


  )
}

export default withRouter(MedDetail);
