import React from 'react'
import { FaAngleLeft } from 'react-icons/fa'

const EditNote = ({data,setNote, textAreaFlag}) => {
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
    setNote(title, noteText, color)
    textAreaFlag()
}
React.useEffect(()=>{
    setNoteText(data.bodyText)
    setTitle(data.title)
}, [])


  return (
    <div className=' add-note' style={{backgroundColor:data.color}}>
         <div className='add-note-top'> 
         <button onClick={data.textAreaFlag}> <FaAngleLeft /></button>
          
           <input type="color" value={data.color} onChange={e => {
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

export default EditNote