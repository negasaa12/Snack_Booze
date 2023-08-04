import React from "react";
import { Route, Routes, NavLink} from "react-router-dom";
import ItemList from "./ItemList";
import { foodItems, alcoholicDrinks } from "./Inventory";
import MenuItems from "./MenuItem";
import Item from "./Item";
import NewItemForm from "./NewItemForm";
import { useState } from "react";

const RoutePaths = () => {
  
    const [snacks,setSnacks] = useState(foodItems);
    const [drinks, setDrinks] = useState(alcoholicDrinks);

    const addSnack = (name,price,description) => {
        setSnacks(snacks=> [...snacks, {name, price,description}])
    }
    console.log(snacks)
    
  //   const addDrink = (name,price,description) => {
  //     setDrinks([...drinks, {name: name, price: price, description: description}])
  // }
    
    return(
        <>
         <nav>
      <ul>
        <li>
          <NavLink exact to="/" >Home</NavLink>
        </li>
        <li>
          <NavLink to="/snacks" >
            Snacks
          </NavLink>
        </li>
        <li>
          <NavLink to="/drinks" activeClassName="active">
           Drinks
          </NavLink>
        </li>
      </ul>
    </nav>
        <Routes>
            <Route exact path="/" element={<ItemList foodItems={snacks} alcoholicDrinks={drinks} />}></Route>
            <Route exact path="/snacks" element={<MenuItems  type="snacks"items={snacks}/>}></Route>
            <Route exact path="/snacks/:name" element={<Item  items={[snacks,drinks]}/>}></Route>
            <Route exact path="/drinks" element={<MenuItems type="drinks" items={drinks}/>}></Route>
            <Route exact path="/drinks/:name" element={<Item items={[snacks,drinks]}/>} ></Route>
            <Route exact path="/new" element={<NewItemForm additem={addSnack}/>} ></Route>
        </Routes>
        </>
    )
}

export default RoutePaths;