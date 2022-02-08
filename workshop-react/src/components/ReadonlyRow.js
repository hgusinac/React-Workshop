import React from "react";

const ReadonlyRow = ({ contact, handelEditClick, handelDeleteClick }) => {
  return (
    <tr>
      <td>{contact.fullName}</td>
      <td>{contact.address}</td>
      <td>{contact.phoneNumber}</td>
      <td>{contact.email}</td>
      <td>
        <button
          type="button"
          className="btn btn-info"
          onClick={(event) => handelEditClick(event, contact)}
        >
          Edit
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => handelDeleteClick(contact.id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadonlyRow;
