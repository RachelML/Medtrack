import React from 'react';
import { withRouter } from 'react-router-dom';

function CreateMedication(props) {
  return (
    <div className="create-form" >
      <h2>Add a Medication</h2>
      <form onSubmit={props.newPharmacy}>
        <p>Medication Name:</p>
        <input
          type="text"
          name="photo"
        //   value={props.teacherForm.photo}
          onChange={props.handleFormChange} />
          <p>What Time?:</p>
        <input
          type="text"
          name="name"
        //   value={props.teacherForm.name}
          onChange={props.handleFormChange} />
         <p>Pills left:</p>
             <input
          type="text"
          name="name"
        //   value={props.teacherForm.name}
          onChange={props.handleFormChange} />
             <p>Dosage:</p>
             <input
          type="text"
          name="name"
        //   value={props.teacherForm.name}
          onChange={props.handleFormChange} />
          <p>With food:</p>
             <select
          type="text"
          name="name"
        //   value={props.teacherForm.name}
          onChange={props.handleFormChange}>
              <option>
                  Yes
              </option>
              <option>
                  No
              </option>
          </select>
        <button>Submit</button>
      </form>
    </div >
  )
}

export default withRouter(CreateMedication);
