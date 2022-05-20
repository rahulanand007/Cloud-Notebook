import React, { useContext, useState } from 'react'
import notesContext from "../context/notes/NoteContext"

const Addnotes = (props) => {
    const context = useContext(notesContext);
    const {addNote} = context;
    const [Note, setNote] = useState({title:"",description:"",tag:""})

    const handleSubmit =(e)=>{
        e.preventDefault()
        addNote(Note.title,Note.description,Note.tag);
        setNote({title:"",description:"",tag:""})
        props.showAlert("Added Successfully","success")
      }

    const onChange = (e)=>{
        setNote({...Note, [e.target.name]:e.target.value})
    }  
  return (  
      <div className="container my-4">
      <h1>Add a note</h1>
        <form>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Title</label>
            <input type="text" className="form-control" id="title" name="title" value={Note.title} onChange={onChange} />
            
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <input type="text" className="form-control" name="description" id="description" value={Note.description} onChange={onChange}/>
          </div>
          <div className="mb-3">
            <label htmlFor="tag" className="form-label">Tag</label>
            <input type="text" className="form-control" name="tag" id="tag" value={Note.tag} onChange={onChange}/>
          </div>
          
          <button disabled={Note.title.length<5 || Note.description.length<5} type="submit" onClick={handleSubmit} className="btn btn-primary">Submit</button>
        </form>
        <hr/>
      </div>
  )
}

export default Addnotes