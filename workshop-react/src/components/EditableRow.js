import React from "react";

const EditableRow = ({
  editFormData,
  handelEditFormChange,
  handelCancelClick,
}) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          name="fullName"
          required="required"
          placeholder="Enter a name..."
          value={editFormData.fullName}
          onChange={handelEditFormChange}
        />
      </td>
      <td>
        {" "}
        <input
          type="text"
          name="address"
          required="required"
          placeholder="Enter a address..."
          value={editFormData.address}
          onChange={handelEditFormChange}
        />
      </td>
      <td>
        {" "}
        <input
          type="text"
          name="phoneNumber"
          required="required"
          placeholder="Enter a phoneNumber..."
          value={editFormData.phoneNumber}
          onChange={handelEditFormChange}
        />
      </td>
      <td>
        {" "}
        <input
          type="email"
          name="email"
          required="required"
          value={editFormData.email}
          placeholder="Enter a email..."
          onChange={handelEditFormChange}
        />
      </td>
      <td>
        <button type="submit" className="btn btn-success">
          Save
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={handelCancelClick}
        >
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default EditableRow;
