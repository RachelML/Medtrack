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
          name="photo"
        //   value={props.teacherForm.photo}
          onChange={props.handleFormChange} />
          <p>Pharmacy Address:</p>
        <input
          type="text"
          name="name"
        //   value={props.teacherForm.name}
          onChange={props.handleFormChange} />
          <p>Pharmacy Phone:</p>
        <input
          type="text"
          name="name"
        //   value={props.teacherForm.name}
          onChange={props.handleFormChange} />
        <button>Submit</button>
      </form>
    </div >
  )
}

export default withRouter(CreatePharmacy);
