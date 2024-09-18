import React, { useEffect, useState } from "react";
import "./Notes.css";
import NotesCard from "../../NotesCard/NotesCard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UpdateNotes from "./UpdateNotes";
import axios from "axios";

const Notes = () => {
  const [input, setInput] = useState({ title: "", content: "" });
  const [notes, setNotes] = useState([]);
  const [currentNoteId, setCurrentNoteId] = useState(null);
  const [noteToUpdate, setNoteToUpdate] = useState(null);

  const showContent = () => {
    document.getElementById("textarea").style.display = "block";
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  //Function for handling the adding of Note
  const handleNote = async (e) => {
    if (input.title === "" || input.content === "") {
      toast.error("Title and Content is Required!!!");
    } else {
      try {
        await axios
          .post("http://localhost:1010/api/v1/notes", input)
          .then((response) => {
            console.log(response);
          });
        console.log(input);
        //   setNotes([...notes, input]);
        setInput({ title: "", content: "" });
        toast.success("Your Note is successfully added!!");
      } catch (error) {
        console.error(error);
        toast.error("Failed to add the note. Please try again.");
      }
    }
  };

  //Function for handling delete note
  const handleDeleteId = async (id) => {
    console.log(id);
    try {
      await axios
        .delete(`http://localhost:1010/api/v1/notes/${id}`)
        .then(() => {
          toast.error("Task successfully deleted!!!");
        });
    } catch (error) {
      console.error(error);

      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Failed to add the note. Please try again.");
      }
    }
  };

  //Function for handling the update of note
  const handleNoteUpdate = (updateId) => {
    const note = notes[updateId];
    setNoteToUpdate(note);
    console.log(noteToUpdate);
  };

  //Function of handling update and close Update Modals
  const displayUpdateModal = (id) => {
    setCurrentNoteId(id);
    document.getElementById("notes-update").style.display = "block";
  };

  const closeUpdateModal = () => {
    document.getElementById("notes-update").style.display = "none";
    setCurrentNoteId(null);
  };

  useEffect(() => {
    const fetchNote = async () => {
      await axios.get("http://localhost:1010/api/v1/notes").then((response) => {
        setNotes(response.data);
      });
    };
    fetchNote();
  }, [handleNote]);

  return (
    <>
      <div className="notes">
        <ToastContainer />

        <div className="todo-main container d-flex justify-content-center align-item-center my-4 flex-column ">
          <div className="d-flex flex-column note-inputs-div w-50 ">
            <input
              type="text"
              name="title"
              value={input.title}
              placeholder="TITLE"
              className="my-2 p-2 note-inputs"
              onClick={showContent}
              onChange={handleInput}
            />
            <textarea
              id="textarea"
              name="content"
              value={input.content}
              type="text"
              placeholder="CONTENT"
              className="p-2 note-inputs"
              onChange={handleInput}
            />
          </div>
          <div className="w-50 d-flex justify-content-end  my-3">
            <button className="home-btn" onClick={handleNote}>
              ADD NOTE
            </button>
          </div>
        </div>

        <div className="notes-list">
          <div className="container ">
            <div className="row ">
              {notes &&
                notes.map((note, index) => (
                  <div
                    key={index}
                    className="col-lg-3 col-10 col-sm-10 col-md-4 mb-4 mx-5 my-2 "
                  >
                    <NotesCard
                      id={note._id}
                      key={index}
                      title={note.title}
                      content={note.content}
                      deleteid={handleDeleteId}
                      displayUpdateModal={displayUpdateModal}
                      updateId={index}
                      handleNoteUpdate={handleNoteUpdate}
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      <div className="notes-update" id="notes-update">
        <div className="container">
          <UpdateNotes
            closeUpdateModal={closeUpdateModal}
            updateNoteData={noteToUpdate}
          />
        </div>
      </div>
    </>
  );
};

export default Notes;
