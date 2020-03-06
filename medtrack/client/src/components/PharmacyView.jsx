import React from 'react';
import { withRouter } from 'react-router';

function PharmacyView(props) {
    console.log(props.pharmacies[0])
  return (
    <div>
        
      {props.pharmacies.map(pharm => (
        <div
          key={pharm.id}
          onClick={(e) => {
            debugger;
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
      {/* <div
        onClick={() => {
          props.history.push('/new/teacher');
          window.scrollTo(0, 0);
        }}>
        <img
          alt="Create a new teacher"
          src="https://image.flaticon.com/icons/png/512/14/14980.png"
          className="plus-sign" />
        <h3>Create a new teacher</h3>
      </div> */}
    </div>
  )
}

export default withRouter(PharmacyView)