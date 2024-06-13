import {useState} from 'react'
import Navbar from "./Navbar.jsx"
import "./Navbar.css"
import Meme from "./Meme.jsx"
import "./Meme.css"
import './App.css'

export default function App() {

  return(
    
    <div className="page-container">
      <Navbar/>
      <Meme/>

    </div>
   
  )
}

 
