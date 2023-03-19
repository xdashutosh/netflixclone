import React from 'react'
import "./Header.scss";
import logo from "./logo.png";
import {ImSearch} from "react-icons/im";
export default function Header() {
  return (
      <nav className="header"> 

      <img src={logo} alt="netflex logo" className='logo'/>

      <div>
      <a href="/">Tv shows</a>
      <a href="/">Movies</a>
      <a href="/">Recently Added</a>
      <a href="/">My List</a>
      </div>
    
   <ImSearch/>
      </nav>
  )
}
