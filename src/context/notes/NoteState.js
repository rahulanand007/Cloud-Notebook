import React from "react";
import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props)=>{
    const host = 'http://localhost:5000'
   
    const notesInitial = []
  const [notes, setnotes] = useState(notesInitial)

  const getNotes = async ()=>{
    //API CALL
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
        
      }
      });
     const json = await response.json(); 
      setnotes(json)
  }

  
  const addNote = async (title, description,tag)=>{
    //API CALL
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
        
      },
       body: JSON.stringify({title,description,tag}) 
      });
    const json = await response.json(); 
      //Add a note
    const note = json;
    setnotes(notes.concat(note))
  }

  // Delete a note
  const deleteNote = async (id)=>{
    //API CALL
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      }, 
      }); 
      const json = await response.json(); 
      console.lof(json)
    const newNotes = notes.filter((note)=>{return note._id!==id})
    setnotes(newNotes)
  }

  //edit a note
  const editNote = async (id, title, description, tag)=>{
    //API CALL
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'PUT', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
        
      },
       body: JSON.stringify({title,description,tag}) 
      });
    const json = await response.json(); 
    console.lof(json)


    //Loop for verifying user and then editing
    let newNotes = JSON.parse(JSON.stringify(notes))
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if(element._id===id){
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    } setnotes(newNotes)
  }

    return(
        <NoteContext.Provider value={{notes,setnotes,addNote,deleteNote, editNote, getNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState