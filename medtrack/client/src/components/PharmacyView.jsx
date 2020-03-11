import React from 'react';
import { withRouter, Link } from 'react-router-dom';
//Unauthorized get request
function PharmacyView(props) {
    console.log(props.pharmacies[0])

    
  return (
    <div>
    <p>My Pharmacies</p>

        
        
      {props.pharmacies.map(pharm => (
        <div 
          key={pharm.id}
          onClick={(e) => {
            // props.history.push(`/pharmacies/${pharm.id}`);
            window.scrollTo(0, 0);
          }}>
          <div className="pharmacy-view">
            <p className="pharmacy-name">{pharm.pharm_name}</p>
            <p className="pharmacy-address" >address: {pharm.address}</p>
            <p className="pharmacy-phone">phone: {pharm.phone_number}</p>
          </div>
        </div>
      ))}
    
    <p style={{ textDecoration: 'none'}} className="back-pharm"><Link style={{ textDecoration: 'none'}} className="back-pharmacy" to={`/medlist`}>back</Link></p>

      </div>
  )
}

export default withRouter(PharmacyView)