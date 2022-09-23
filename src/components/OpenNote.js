import React from "react";

export default function OpenNote (props) {
    return (
        <div className=' add-note' style={{backgroundColor: props.color}}>
         <div className='add-note-top'> 
         <button onClick={props.textAreaFlag}> <FaAngleLeft /></button>
          
           <input type="color" value={props.color} onChange={e => {
        console.log(color)
        setColor(e.target.value)}} />    
            </div>
            <div className='addnote-inputs'>
            <input 
            placeholder='Title'
            value = {props.title}
            onChange = {handletitlechange}/>
<textarea
cols='50'
rows='50'

placeholder='Type to add a note...'
value={props.noteText}
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