import React from "react";
import Input from "../../Input";
import "./ListCard.css"

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <div className="editable-contact">
      <tr>
        <td >
          <Input placeholder={"Enter a name..."} onChange={handleEditFormChange} type={"text"} name={"fullName"} value={editFormData.fullName} />
        </td>
        <td>
          <Input placeholder={"Enter a phone number..."} onChange={handleEditFormChange} type={"text"} name={"phoneNumber"} value={editFormData.phoneNumber} />
        </td>
        <td>
          <Input placeholder={"Enter an email..."} onChange={handleEditFormChange} type={"email"} name={"email"} value={editFormData.email} />
        </td>
        <td>
          <button className="edit-btn" type="submit">
            <i className="fas fa-save"></i>
          </button>
          <button className="trash-btn" type="button" onClick={handleCancelClick}>
            <i className="fas fa-remove"></i>
          </button>
        </td>
      </tr>
    </div>
  );
};

export default EditableRow;
