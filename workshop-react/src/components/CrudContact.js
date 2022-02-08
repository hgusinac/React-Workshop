import React, { useState, Fragment } from "react";
import data from "../mock-data.json";
import { nanoid } from "nanoid";
import ReadonlyRow from "../components/ReadonlyRow";
import EditableRow from "../components/EditableRow";

const CrudContact = () => {
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });

  const [editFormData, setEditFormData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });

  const [editContactId, setEditContactId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handelEditFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;
    setEditFormData(newFormData);
  };

  const handelAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      fullName: addFormData.fullName,
      address: addFormData.address,
      phoneNumber: addFormData.phoneNumber,
      email: addFormData.email,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handelEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      fullName: editFormData.fullName,
      address: editFormData.address,
      phoneNumber: editFormData.phoneNumber,
      email: editFormData.email,
    };
    const newContacts = [...contacts];
    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };

  const handelEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      fullName: contact.fullName,
      address: contact.address,
      phoneNumber: contact.phoneNumber,
      email: contact.email,
    };
    setEditFormData(formValues);
  };

  const handelCancelClick = () => {
    setEditContactId(null);
  };

  const handelDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id == contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };

  return (
    <div className="app-container">
      <form onSubmit={handelEditFormSubmit}>
        <table className="tabel">
          <thead className="table-head">
            <tr className="table-row">
              <th>Name</th>
              <th>Address</th>
              <th>Phone number</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <Fragment>
                {editContactId === contact.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handelEditFormChange={handelEditFormChange}
                    handelCancelClick={handelCancelClick}
                  />
                ) : (
                  <ReadonlyRow
                    contact={contact}
                    handelEditClick={handelEditClick}
                    handelDeleteClick={handelDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>

      <div className="m-2 text-center">
        <h2>Add a Contact</h2>
        <form onSubmit={handelAddFormSubmit}>
          <input
            type="text"
            name="fullName"
            required="required"
            placeholder="Enter a name..."
            onChange={handleAddFormChange}
          ></input>
          <input
            type="text"
            name="address"
            required="required"
            placeholder="Enter a address..."
            onChange={handleAddFormChange}
          ></input>
          <input
            type="text"
            name="phoneNumber"
            required="required"
            placeholder="Enter a Phonenumber..."
            onChange={handleAddFormChange}
          ></input>
          <input
            type="text"
            name="email"
            required="required"
            placeholder="Enter a Email..."
            onChange={handleAddFormChange}
          ></input>
          <button type="submit" className="btn btn-success">
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default CrudContact;
