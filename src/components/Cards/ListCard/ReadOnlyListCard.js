import React from "react";
import "./ListCard.css"
const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <div className="contact">
      <tr>
        <td className="contact-item">{contact.fullName}</td>
        <td className="contact-item">{contact.phoneNumber}</td>
        <td className="contact-item">{contact.email}</td>
        <td>
          <button
            className="edit-btn"
            type="button"
            onClick={(event) => handleEditClick(event, contact)}
          >
            <i className="fas fa-pen"></i>

          </button>
          <button
            className="trash-btn"
            type="button" onClick={() => handleDeleteClick(contact.id)}>
            <i className="fas fa-trash"></i>

          </button>
        </td>
      </tr>
    </div>

  );
};

export default ReadOnlyRow;
