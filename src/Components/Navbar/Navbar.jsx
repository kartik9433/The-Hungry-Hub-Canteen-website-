import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo1.png'
import "./Navbar.css"

function Navbar() {
     const [scrolled,setScrolled] = useState(false);
      useEffect(()=>{
      const scrollCheck = ()=>{
         if(window.scrollY>50){
            setScrolled(true);
          }
          else{
            setScrolled(false);
          }
      };
      window.addEventListener("scroll",scrollCheck);
     return ()=>window.removeEventListener("scroll",scrollCheck);
  },[])

  return (
    <nav className={scrolled?"changNav":"Navbar"}>
          <div className='logo_img' > 
             <img src={logo} alt="logo" />
          </div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/aboutus">AboutUs</Link></li>
            <li><Link to="/helpus">Help</Link></li>
          </ul>
    </nav>
  )
}

export default Navbar
