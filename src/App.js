import React from 'react';
import Header from './components/Header.js'
import {nanoid} from 'nanoid'
import Noteslist from './components/Noteslist.js';
import AddNote from './components/AddNote.js';
import Start from './components/Start.js';
import EditNote from './components/EditNote.jsx';

function App() {
  const [darkMode, setDarkMode] =React.useState(true)
  const [searchText, setSearchText] = React.useState('')
  const [textAreaFlag, setTextAreaFlag] = React.useState(false)
  const [notes, setnotes] = React.useState([])
  const [editData, setEditData] = React.useState({})
  const [editFlag, setEditFlag] = React.useState(false)

React.useEffect(()=> {
const savedNotes = JSON.parse(localStorage.getItem('notes-app-data'))

if (savedNotes){
  setnotes(savedNotes)
}
}, [])

React.useEffect(() => {
 localStorage.setItem("notes-app-data", JSON.stringify(notes))  
}, [notes])

function DarkModeToggle () {
  setDarkMode(prevValue => !prevValue)
  console.log(darkMode)
}

function NewNotesArea (){
  setTextAreaFlag(prev => !prev)
  console.log(textAreaFlag)
}
function EditArea () {
  setTextAreaFlag(prev => !prev)
  setEditFlag(prev => !prev)
}

function setNote (title, bodyText, bgColor){
 const date = new Date()
 const newNote = {
  id: nanoid(),
  title: title,
  bodyText: bodyText,
  date: date.toLocaleDateString(), 
bgColor: bgColor
 }
 const newNotes = [...notes, newNote]
setnotes(newNotes)
console.log(title,bodyText)
}


function deleteNote (id){
  const newNote = notes.filter((note) => note.id !== id)
  setnotes(newNote)
}
const editNote = (props) => {
  setEditFlag(prev => !prev)
  setEditData(props)
  console.log('working')
  console.log(editFlag)
  console.log(editData)
  deleteNote(props.id)
}
console.log(editData)


  return (
    editFlag ? <EditNote data = {editData}
     setNote = {setNote}
     textAreaFlag ={EditArea}/> 
     :
notes.length > 0 ? 

<div style={{backgroundColor: darkMode && "#343434" }} className='app'>
    <Header 
    search = {setSearchText}
    searchText = {searchText}
    darkMode = {DarkModeToggle}
    darkValue = {darkMode}/>

    <Noteslist 
    notes= {notes.filter(note => note.bodyText.toLowerCase().includes(searchText))}
    delete ={deleteNote}
    edit ={editNote}
    />

<button 
className='add-button'
onClick={EditArea}
>+</button>
    </div> :
    textAreaFlag ? 
    <AddNote 
        textAreaFlag ={EditArea}
        setNote ={setNote}
         /> 
    :
<Start  
textAreaFlag = {NewNotesArea}/> 
    
)

}

export default App;
