import React from 'react'
import Alcohol from "../../assets/Breakfast_img/alcohol.jpg"
import Blue_drink from "../../assets/Breakfast_img/blue_drink.jpg"
import Burger from "../../assets/Breakfast_img/burger.jpg"
import Coffe from "../../assets/Breakfast_img/coffe.jpg"
import Dish from "../../assets/Breakfast_img/dish.jpg"
import EggSoup from "../../assets/Breakfast_img/eggSoup.jpg"
import FrenchFries from "../../assets/Breakfast_img/frenchfries.jpg"
import Melon from "../../assets/Breakfast_img/melon_drink.jpg"
import PanSeared from "../../assets/Breakfast_img/Pan-Seared.jpg"
import Pastery from "../../assets/Breakfast_img/pastery.jpg"
import Pizza from "../../assets/Breakfast_img/Pizza.jpg"
import Pizza1 from "../../assets/Breakfast_img/Pizza1.jpg"
import Roll from "../../assets/Breakfast_img/roll.jpg"
import GarlicFries from "../../assets/Breakfast_img/garlic_fries.jpg"
import "./Lunch.css"

function Lunch() {

      const items = [
            { items_name: "Alcohol", img: Alcohol, price: "159" },
            { items_name: "Burger", img: Burger, price: "49" },
            { items_name: "Fries", img: FrenchFries, price: "69" },
            { items_name: "Pastery", img: Pastery, price: "29" },
            { items_name: "Pizza", img: Pizza, price: "199" },
            { items_name: "EggSoup", img: EggSoup, price: "99" },
            { items_name: "MelonDrink", img: Melon, price: "69" },
            { items_name: "PanSeared", img: PanSeared, price: "78" },
            { items_name: "BlueDrink", img: Blue_drink, price: "99" },
            { items_name: "Coffe", img: Coffe, price: "49" },
            { items_name: "Dish", img: Dish, price: "79" },
            {items_name:"Pizza", img:Pizza1, price:"399"},
            {items_name:"Roll", img:Roll, price:"49"},
            {items_name:"GarlicFries", img:GarlicFries, price:"129"},
        ]
    
  return (
       <div className='breakfast_items'>
            {items.map((data, index) => (
                <div className="card" key={index}>
                    <div className='item_img'>
                        <img src={data.img} alt={data.items_name} />
                    </div>
                    <div className="item_details">
                        <p>{data.items_name}</p>
                        <p>₹{data.price}</p>
                    </div>
                    <div className='btn'>
                             <button>Buy!</button>
                    </div>
                </div>
            ))}
        </div>
  )
}

export default Lunch
