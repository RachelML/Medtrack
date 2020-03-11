import React from 'react';
import { withRouter } from 'react-router-dom';

function CreateMedication(props) {
  return (
    <div className="create-form" >
      <h2>Add your Medication</h2>
      <form onSubmit={props.newMedication}>
        <p>Medication Name:</p>
        <input
          type="text"
          name="brand_name"
          value={props.medicationForm.brand_name}
          onChange={props.handleFormChanges}/>
          <p>dosage:</p>
        <input
          type="text"
          name="dosage"
          value={props.medicationForm.dosage}
          onChange={props.handleFormChanges} />
          <p>scheduled time:</p>
        <input
          type="text"
          name="time"
          value={props.medicationForm.time}
          onChange={props.handleFormChanges} />
        <p>Prescribing Doctor:</p>
           <input
          type="text"
          name="prescribing_doctor"
          value={props.medicationForm.prescribing_doctor}
          onChange={props.handleFormChanges} />
           <p>Doctor Phone:</p>
        <input
          type="text"
          name="doctor_phone"
          value={props.medicationForm.doctor_phone}
          onChange={props.handleFormChanges} />
        <button className="login-button">Submit</button>
      </form>
    </div >
  )
}

export default withRouter(CreateMedication);
