import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";

const UpdateNotes = ({ closeUpdateModal, updateNoteData }) => {
  const [updatedInput, setUpdatedInput] = useState({ title: "", content: "" });

  useEffect(() => {
    if (updateNoteData) {
      setUpdatedInput({
        title: updateNoteData.title,
        content: updateNoteData.content,
      });
    }
  }, [updateNoteData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedInput({ ...updatedInput, [name]: value });
  };

  const handleUpdate = async () => {
    if (updatedInput.title === "" || updatedInput.content === "") {
      toast.error("Title and Content are Required!!!");
      return;
    }

    try {
      const response = await axios.put(
        `http://localhost:1010/api/v1/notes/${updateNoteData._id}`,
        updatedInput
      );
      console.log(response);
      toast.success("Your Note has been successfully updated!!");
      closeUpdateModal();
    } catch (error) {
      console.error(error);
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Failed to update the note. Please try again.");
      }
    }
  };

  if (!updateNoteData) return null;

  return (
    <div className="p-5 d-flex justify-content-center align-items-start flex-column">
      <h3>Update your Note</h3>
      <input
        type="text"
        className="notes-inputs my-4 w-100 p-3"
        name="title"
        value={updatedInput.title}
        onChange={handleChange}
      />
      <textarea
        name="content"
        className="notes-inputs w-100 p-3"
        value={updatedInput.content}
        onChange={handleChange}
      ></textarea>
      <div>
        <button className="btn btn-dark my-4" onClick={handleUpdate}>
          UPDATE NOTE
        </button>
        <button className="btn btn-danger my-4 mx-3" onClick={closeUpdateModal}>
          CLOSE
        </button>
      </div>
    </div>
  );
};

export default UpdateNotes;
