import React from "react";
import Note from './Note.js'

export default function Noteslist (props){

const notesElements = props.notes.map((note) => {
        return (
           <Note 
           id = {note.id} 
           title = {note.title}
           bodyText = {note.bodyText}
           date = {note.date}
           color = {note.bgColor}
           delete ={props.delete}
           edit ={props.edit}
        />)
    })
    return (
        <div className="note-list">
{notesElements}
        </div>
    )
}