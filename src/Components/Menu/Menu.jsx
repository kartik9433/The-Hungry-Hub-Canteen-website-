import React from 'react'
import "./Menu.css"
import Breakfast from "../../assets/breakfast.jpg"
import lunch from "../../assets/lunch.jpg"
import Dinner from "../../assets/Dinner.jpg"
import { Link } from 'react-router-dom'

function Menu() {
  return (
    <div className='Menu_items'>
      <div className='menu-container'>
        
        <div className="menu-item">
          <div className="menu-img">
            <img src={Breakfast} alt="breakfast" />
          </div>
          <Link to="/breakfast"><button>Breakfast</button></Link>
        </div>

        <div className="menu-item">
          <div className="menu-img">
            <img src={lunch} alt="lunch" />
          </div>
          <Link to="/lunch"><button>Lunch</button></Link>
        </div>

        <div className="menu-item">
          <div className="menu-img">
            <img src={Dinner} alt="dinner" />
          </div>
          <Link to="/dinner"><button>Dinner</button></Link>
        </div>

      </div>
    </div>
  )
}

export default Menu
