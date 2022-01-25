import React from 'react';
import EditableListCard from '../Cards/ListCard/EditableListCard';
import ReadOnlyListCard from '../Cards/ListCard/ReadOnlyListCard';

function ContactList({ editContactId, onSubmitEdit, editFormData, handleEditFormChange, handleCancelClick, handleEditClick, handleDeleteClick, contacts }) {
  return (
    <div className="contacts-container">
      <form onSubmit={onSubmitEdit} className="contacts-list" >
        <table>
          <tbody>
            {contacts.map((contact) => (
              <>
                {editContactId === contact.id ? (
                  <EditableListCard
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyListCard
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
