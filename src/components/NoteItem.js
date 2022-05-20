import React, { useContext } from 'react'
import notesContext from "../context/notes/NoteContext"

const NoteItem = (props) => {
    const context = useContext(notesContext);
    const { deleteNote} = context;
    const { note,updateNote } = props;
    return (
        <div className='col-md-3 my-2'>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{note.title}</h5><hr/>
                    <p className="card-text">{note.description}</p>
                    <div className="d-flex justify-content-between">
                    <i className="fas fa-trash-alt mx-1" onClick={()=>{deleteNote(note._id);props.showAlert("Note Deleted","success")}}></i>
                    <i className="fas fa-edit mx-1" onClick={()=>{updateNote(note)}}></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NoteItem