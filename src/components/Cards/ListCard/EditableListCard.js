import React from "react";
import Input from "../../Input";
import "./ListCard.css"

const EditableListCard = ({
  editFormData,
  onChange,
  onCancelClick,
}) => {
  return (
    <tr className="editable-contact">
      <td >
        <Input placeholder={"Enter a name..."} onChange={onChange} type={"text"} name={"fullName"} value={editFormData.fullName} />
      </td>
      <td>
        <Input placeholder={"Enter a phone number..."} onChange={onChange} type={"text"} name={"phoneNumber"} value={editFormData.phoneNumber} />
      </td>
      <td>
        <Input placeholder={"Enter an email..."} onChange={onChange} type={"email"} name={"email"} value={editFormData.email} />
      </td>
      <td>
        <button className="edit-btn" type="submit">
          <i className="fas fa-save"></i>
        </button>
        <button className="trash-btn" type="button" onClick={onCancelClick}>
          <i className="fas fa-remove"></i>
        </button>
      </td>
    </tr>
  );
};

export default EditableListCard;
