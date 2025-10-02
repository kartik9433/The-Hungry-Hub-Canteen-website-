import React from 'react'
import { Route,Routes } from 'react-router-dom'
import "./App.css"
import Home from "./Components/Home/Home"
import Navbar from './Components/Navbar/Navbar'
import Menu from './Components/Menu/Menu'
import Aboutus from './Components/AboutUs/AboutUs'
import HelpUs from './Components/Help/Help'
import Footer from "./Components/Footer/Footer"
import  BreakFast from "./Components/Breakfast/Breakfast"
import Lunch from "./Components/Lunch/Luch"
import Dinner from "./Components/Dinner/Dinner"

function App() {

  return (
    <>
      <Navbar/>
        <Routes>
           <Route path="/" element={<Home/>}></Route>
           <Route path="/menu" element={<Menu/>}></Route>
           <Route path="/aboutus" element={<Aboutus/>}></Route>
           <Route path="/helpus" element={<HelpUs/>}></Route>
            <Route path='/breakfast' element={<BreakFast/>}></Route>
            <Route path='/lunch' element={<Lunch/>}></Route>
            <Route path='/dinner' element={<Dinner/>}/>
        </Routes>
       <Footer/>
    </>
  )
}

export default App

