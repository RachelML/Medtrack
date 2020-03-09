import React from 'react';
import { withRouter } from 'react-router';
//Unauthorized get request
function PharmacyView(props) {
    console.log(props.pharmacies[0])

    
  return (
    <div>
    <p>Pharmacy View/Get users pharmacies</p>

        
        
      {props.pharmacies.map(pharm => (
        <div
          key={pharm.id}
          onClick={(e) => {
            props.history.push(`/pharmacies/${pharm.id}`);
            window.scrollTo(0, 0);
          }}>
          <h3>
            <p>{pharm.pharm_name}</p>
            <p>{pharm.address}</p>
            <p>{pharm.phone_number}</p>
          </h3>
        </div>
      ))}
    
        
      </div>
  )
}

export default withRouter(PharmacyView)