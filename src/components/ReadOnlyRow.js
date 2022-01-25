import React from "react";

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{contact.fullName}</td>
      <td>{contact.phoneNumber}</td>
      <td>{contact.email}</td>
      <td>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, contact)}
        >
          <i className="fas fa-pen"></i>

        </button>
        <button type="button" onClick={() => handleDeleteClick(contact.id)}>
          <i className="fas fa-trash"></i>

        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
