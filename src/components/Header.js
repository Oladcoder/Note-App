import React from 'react'
import {FaSearch} from "react-icons/fa"
import { BsCircleHalf } from "react-icons/bs";


export default function Header (props){

    return (
        <div>
        <div className='header'> 
<h3 style={{color: props.darkValue && 'white'}}>Notes</h3>
<button 
onClick={props.darkMode}
className='toggler'
style={{color: props.darkValue && 'white'}}
><BsCircleHalf /> </button>

        </div>
        <div className='search-div'>
            <FaSearch/>
  <input type="text" placeholder="Search.." onChange ={(e) => {
    console.log(props.searchText)
    props.search(e.target.value)}}/>
  </div>
        </div>
    )
}