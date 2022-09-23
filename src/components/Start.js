import React from 'react'
import Headerpic from '../assets/header.svg'

export default function Start (props){
    return (
        <div className='startPage'>
            <img src={Headerpic} alt='something here'/>
            <h1> Note App</h1>
<p> Write It To Never Forget It....</p>
<button onClick={props.textAreaFlag}
> New Note </button>
</div>
    )
    
}