import React from "react";
import Input from "./Input";

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr>
      <td>
        <Input placeholder={"Enter a name..."} onChange={handleEditFormChange} type={"text"} name={"fullName"} value={editFormData.fullName} />
      </td>
      <td>
        <Input placeholder={"Enter a phone number..."} onChange={handleEditFormChange} type={"text"} name={"phoneNumber"} value={editFormData.phoneNumber} />
      </td>
      <td>
        <Input placeholder={"Enter an email..."} onChange={handleEditFormChange} type={"email"} name={"email"} value={editFormData.email} />
      </td>

      {/* <input
          type="text"
          required="required"
          placeholder="Enter a name..."
          name="fullName"
          value={editFormData.fullName}
          onChange={handleEditFormChange}
        ></input> */}

      {/* <input
          type="text"
          required="required"
          placeholder="Enter a phone number..."
          name="phoneNumber"
          value={editFormData.phoneNumber}
          onChange={handleEditFormChange}
        ></input> */}
      {/* <td>
        <input
          type="email"
          required="required"
          placeholder="Enter an email..."
          name="email"
          value={editFormData.email}
          onChange={handleEditFormChange}
        ></input>
      </td> */}
      <td>
        <button type="submit">
          <i className="fas fa-save"></i>
        </button>
        <button type="button" onClick={handleCancelClick}>
          <i className="fas fa-remove"></i>
        </button>
      </td>
    </tr>
  );
};

export default EditableRow;
