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
      <a href="/">Tv shows</a>
      <a href="/">Tv shows</a>
      <a href="/">Tv shows</a>
      </div>
    
   <ImSearch/>
      </nav>
  )
}
