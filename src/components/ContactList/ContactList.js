import React from 'react';
import EditableRow from '../EditableRow';
import ReadOnlyRow from '../ReadOnlyRow';

function ContactList({ editContactId, onSubmitEdit, editFormData, handleEditFormChange, handleCancelClick, handleEditClick, handleDeleteClick, contacts }) {
  return (
    <div>
      <form onSubmit={onSubmitEdit}>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <>
                {editContactId === contact.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    contact={contact}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </>
            ))}
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default ContactList;
