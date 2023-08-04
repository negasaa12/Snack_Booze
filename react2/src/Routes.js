import React from "react";
import { Route, Routes, NavLink} from "react-router-dom";
import ItemList from "./ItemList";
import { foodItems, alcoholicDrinks } from "./Inventory";
import MenuItems from "./MenuItem";
import Item from "./Item";

const RoutePaths = () => {



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
            <Route exact path="/" element={<ItemList foodItems={foodItems} alcoholicDrinks={alcoholicDrinks} />}></Route>
            <Route exact path="/snacks" element={<MenuItems  type="snacks"items={foodItems}/>}></Route>
            <Route exact path="/snacks/:name" element={<Item  items={[alcoholicDrinks,foodItems]}/>}></Route>
            <Route exact path="/drinks" element={<MenuItems type="drinks" items={alcoholicDrinks}/>}></Route>
            <Route exact path="/drinks/:name" element={<Item items={[alcoholicDrinks, foodItems]}/>} ></Route>
        </Routes>
        </>
    )
}

export default RoutePaths;