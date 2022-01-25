import React from "react";
import "./ListCard.css"
const ReadOnlyListCard = ({ contact, onEditClick, onDeleteClick }) => {
  return (
    <tr className="contact">
      <td className="contact-item">{contact.fullName}</td>
      <td className="contact-item">{contact.phoneNumber}</td>
      <td className="contact-item">{contact.email}</td>
      <td>
        <button
          className="edit-btn"
          type="button"
          onClick={(event) => onEditClick(event, contact)}
        >
          <i className="fas fa-pen"></i>

        </button>
        <button
          className="trash-btn"
          type="button" onClick={() => onDeleteClick(contact.id)}>
          <i className="fas fa-trash"></i>

        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyListCard;
