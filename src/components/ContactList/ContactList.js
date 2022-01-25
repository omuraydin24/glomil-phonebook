import React from 'react';
import EditableListCard from '../Cards/ListCard/EditableListCard';
import ReadOnlyListCard from '../Cards/ListCard/ReadOnlyListCard';

function ContactList({ editContactId, onSubmitEdit, editFormData, onChange, onCancelClick, onEditClick, onDeleteClick, contacts }) {
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
                    onChange={onChange}
                    onCancelClick={onCancelClick}
                  />
                ) : (
                  <ReadOnlyListCard
                    contact={contact}
                    onEditClick={onEditClick}
                    onDeleteClick={onDeleteClick}
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
