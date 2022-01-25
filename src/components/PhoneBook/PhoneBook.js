import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import "./PhoneBook.css";
import data from "../../mock-data.json";
import ContactList from "../ContactList";
import InputField from "../InputField";

const PhoneBook = () => {
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
  });

  const [editFormData, setEditFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
  });

  const [editContactId, setEditContactId] = useState(null);

  useEffect(() => {
    getStorage();
  }, [])

  useEffect(() => {
    handleStorage()
  }, [contacts]);

  const getStorage = () => {
    if (localStorage.getItem("contacts") === null) {
      localStorage.setItem("contacts", JSON.stringify([]));
    } else {
      let localEntries = JSON.parse(localStorage.getItem("contacts"));
      setContacts(localEntries);
    }
  }

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      fullName: addFormData.fullName,
      phoneNumber: addFormData.phoneNumber,
      email: addFormData.email,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleStorage = () => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      fullName: editFormData.fullName,
      phoneNumber: editFormData.phoneNumber,
      email: editFormData.email,
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      fullName: contact.fullName,
      phoneNumber: contact.phoneNumber,
      email: contact.email,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };

  return (
    <div className="container">
      <header>
        <h2>Phone Book</h2>
      </header>
      <InputField onSubmitAdd={handleAddFormSubmit}
        onChange={handleAddFormChange}
      />
      <ContactList
        contacts={contacts}
        editContactId={editContactId}
        onSubmitEdit={handleEditFormSubmit}
        editFormData={editFormData}
        handleEditFormChange={handleEditFormChange}
        handleCancelClick={handleCancelClick}
        handleEditClick={handleEditClick}
        handleDeleteClick={handleDeleteClick}
      />
    </div>
  );
};

export default PhoneBook;