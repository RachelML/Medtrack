import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faTimes } from '@fortawesome/free-solid-svg-icons'

function PharmacyView(props) {
    console.log(props.pharmacies[0])

    
  return (
    <div>
    <p>My Pharmacies</p>

        
        
      {props.pharmacies.map(pharm => (
        <div 
          key={pharm.id}
          onClick={(e) => {
            window.scrollTo(0, 0);
          }}>
          <div className="pharmacy-view">
            <p className="pharmacy-name">{pharm.pharm_name}</p>
            <p className="pharmacy-address" >address: {pharm.address}</p>
            <p className="pharmacy-phone">phone: {pharm.phone_number}</p>
            <button className="delete-icon" onClick={() => {
                  props.deletePharmacy(pharm.id);
                }}><FontAwesomeIcon className="icon" icon={faTimes} />
                </button>          </div>
        </div>
      ))}
    
    <p style={{ textDecoration: 'none'}} className="back-pharm"><Link style={{ textDecoration: 'none'}} className="back-pharmacy" to={`/medlist`}>back</Link></p>

      </div>
  )
}

export default withRouter(PharmacyView)