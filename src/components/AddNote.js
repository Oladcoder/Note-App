import React from 'react'
import { FaAngleLeft } from "react-icons/fa"

export default function  AddNote(props){
    const [noteText, setNoteText] = React.useState('')
const [color, setColor] = React.useState('')
const [title, setTitle] = React.useState('')

function handleChange (event){
    console.log(event.target.value)
    setNoteText(event.target.value);
}

function handletitlechange (event){
    console.log(event.target.value)
    setTitle(event.target.value)
}


function handleSaveClick (){
    props.setNote(title, noteText, color)
    props.textAreaFlag()
}
    return (
<div className=' add-note' style={{backgroundColor:color}}>
         <div className='add-note-top'> 
         <button onClick={props.textAreaFlag()}> <FaAngleLeft /></button>
          
           <input type="color" value={color} onChange={e => {
        console.log(color)
        setColor(e.target.value)}} />    
            </div>
            <div className='addnote-inputs'>
            <input 
            placeholder='Title'
            value = {title}
            onChange = {handletitlechange}/>
<textarea
cols='50'
rows='50'

placeholder='Type to add a note...'
value={noteText}
onChange={handleChange}></textarea>
</div>
<div>
<button
onClick={handleSaveClick} 
className='save'> Save</button>
</div>

        </div>
    )
}