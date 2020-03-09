import React from 'react';
import { withRouter } from 'react-router-dom';

function CreatePharmacy(props) {
  return (
    <div className="create-form" >
      <h2>Add your pharmacy</h2>
      <form onSubmit={props.newPharmacy}>
        <p>Pharmacy Name:</p>
        <input
          type="text"
          name="pharm_name"
          value={props.pharmacyForm.pharm_name}
          onChange={props.handleFormChange}/>
          <p>Pharmacy Address:</p>
        <input
          type="text"
          name="address"
          value={props.pharmacyForm.address}
          onChange={props.handleFormChange} />
          <p>Pharmacy Phone:</p>
        <input
          type="text"
          name="phone_number"
          value={props.pharmacyForm.phone_number}
          onChange={props.handleFormChange} />
        <button className="login-button">Submit</button>
      </form>
    </div >
  )
}

export default withRouter(CreatePharmacy);
