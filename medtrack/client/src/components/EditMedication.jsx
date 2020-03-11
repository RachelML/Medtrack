import React from 'react';
import { withRouter } from 'react-router-dom';

function EditMedication(props) {

  return (
    <div className="create-form" >
      <h2>Edit your Medication</h2>
      <form onSubmit={props.editMedication} name={props.medication.id}>
        <p>Medication Name:</p>
        <input
          type="text"
          name="brand_name"
          placeholder= {props.medication.brand_name}
          value={props.medicationForm.brand_name}
          onChange={props.handleFormChanges}/>
          <p>dosage:</p>
        <input
          type="text"
          name="dosage"
          placeholder= {props.medication.dosage}

          value={props.medicationForm.dosage}
          onChange={props.handleFormChanges} />
          <p>scheduled time:</p>
        <input
          type="text"
          name="time"
          placeholder= {props.medication.time}

          value={props.medicationForm.time}
          onChange={props.handleFormChanges} />
        <p>Prescribing Doctor:</p>
           <input
          type="text"
          name="prescribing_doctor"
          placeholder= {props.medication.prescribing_doctor}

          value={props.medicationForm.prescribing_doctor}
          onChange={props.handleFormChanges} />
           <p>Doctor Phone:</p>
        <input
          type="text"
          name="doctor_phone"
          placeholder= {props.medication.doctor_phone}

          value={props.medicationForm.doctor_phone}
          onChange={props.handleFormChanges} />
        <button className="login-button">update</button>
      </form>
    </div >
  )
}

export default withRouter(EditMedication);
