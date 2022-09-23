import React from 'react'
import {FaTrash} from 'react-icons/fa';
import {FaExpandAlt} from 'react-icons/fa'


export default function Note (props){
    const [color, setColor] = React.useState('')

    return (
        <div className='note' style= {{backgroundColor: props.color}}>
            <div className='inner-note'>
                <h4>{props.title}</h4>
<span>{props.bodyText.slice(0, 150)}</span>
<div className='note-footer'>
    <p>{props.date}</p>
    <FaTrash 
    onClick={() => props.delete(props.id)}
    className = "delete-icon"/>
    <FaExpandAlt 
    onClick={() => props.edit(props)}/>
    </div>
</div>

        </div>
    )

}