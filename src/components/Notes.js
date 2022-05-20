import React, { useContext, useEffect, useRef, useState } from 'react'
import notesContext from "../context/notes/NoteContext"
import NoteItem from './NoteItem';
import Addnotes from "./Addnotes"
import { useNavigate } from 'react-router-dom';


const Notes = (props) => {
    const context = useContext(notesContext);
    const { notes, getNotes, editNote } = context;
    const [Note, setNote] = useState({etitle:"",edescription:"",etag:""})
    const navigate = useNavigate()
    useEffect(() => {
        if(localStorage.getItem('token')){
        getNotes()
        }else{
            navigate("/login")
        }
    }, [])

    const updateNote = (currentnote) => {
        ref.current.click()
        setNote({id:currentnote._id,etitle:currentnote.title, edescription:currentnote.description, etag:currentnote.tag})
        
    }
    const ref = useRef(null)
    const refClose = useRef(null)

    const handleUpdate=(e)=>{
        e.preventDefault()
        editNote(Note.id,Note.etitle, Note.edescription, Note.etag)
        refClose.current.click();
        props.showAlert("Note Updated","success")
    }

    const onChange = (e)=>{
        setNote({...Note, [e.target.name]:e.target.value})
    } 

    return (
        <>
            <Addnotes showAlert = {props.showAlert}/>
            <div>

                <button type="button"  className="btn btn-primary d-none" ref={ref} data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    Launch static backdrop modal
                </button>


                <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="staticBackdropLabel">Edit Note</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="title" className="form-label">Title</label>
                                        <input type="text" className="form-control" id="etitle" name="etitle" minLength={5} required value={Note.etitle} onChange={onChange} />

                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="description" className="form-label">Description</label>
                                        <input type="text" className="form-control" name="edescription" id="edescription" minLength={5} required value={Note.edescription} onChange={onChange} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="tag" className="form-label">Tag</label>
                                        <input type="text" className="form-control" name="etag" id="etag" value={Note.etag} onChange={onChange} />
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" ref={refClose} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button disabled={Note.etitle.length<5 || Note.edescription.length<5} type="button" className="btn btn-primary" onClick={handleUpdate}>Update Note</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row my-3">
                <h2>Your Notes</h2>
                <div className='container mx-2'>
                    {notes.length === 0 && 'No notes to display! Please add a new note.'}
                </div>
                {notes.map((note) => {
                    return <NoteItem updateNote={updateNote} key={note._id} showAlert={props.showAlert} note={note} />
                })}
            </div>
        </>
    )
}

export default Notes