import React from "react";
import "./NotesCard.css";
import { MdDelete } from "react-icons/md";
import { GrDocumentUpdate } from "react-icons/gr";

const NotesCard = ({
  id,
  title,
  content,
  deleteid,
  displayUpdateModal,
  updateId,
  handleNoteUpdate,
}) => {
  const truncateText = (text) => {
    return text.length > 30 ? `${text.substring(0, 30)}...` : text;
  };
  return (
    <div className="p-3 note-card">
      <div>
        <h5>{truncateText(title)}</h5>
        <p className="note-card-content">{truncateText(content)}</p>
      </div>
      <div className="d-flex justify-content-around ">
        <div
          className="d-flex justify-content-center card-icon-head py-1 px-1"
          onClick={() => {
            displayUpdateModal();
            handleNoteUpdate(updateId);
          }}
        >
          <GrDocumentUpdate className="notes-card-icons" />
          Update
        </div>
        <div
          className="d-flex justify-content-center card-icon-head py-1 px-1"
          onClick={() => deleteid(id)}
        >
          <MdDelete className="notes-card-icons delete" />
          Delete
        </div>
      </div>
    </div>
  );
};

export default NotesCard;
