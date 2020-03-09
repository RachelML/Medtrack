import React from 'react';
import { withRouter } from 'react-router-dom';

function EditMedication(props) {
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
          <p>pills left:</p>
        <input
          type="text"
          name="pills_left"
          value={props.medicationForm.pills_left}
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
        <button className="login-button">update</button>
      </form>
    </div >
  )
}

export default withRouter(EditMedication);
