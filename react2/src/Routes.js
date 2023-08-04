import React from "react";
import { Route, Routes, NavLink} from "react-router-dom";
import ItemList from "./ItemList";
import { foodItems, alcoholicDrinks } from "./Inventory";
import MenuItems from "./MenuItem";


const RoutePaths = () => {



    return(
        <>
         <nav>
      <ul>
        <li>
          <NavLink exact to="/" >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/snacks" >
            Snacks
          </NavLink>
        </li>
        <li>
          <NavLink to="/booze" activeClassName="active">
           Drinks
          </NavLink>
        </li>
      </ul>
    </nav>
        <Routes>
            <Route exact path="/" element={<ItemList foodItems={foodItems} alcoholicDrinks={alcoholicDrinks} />}></Route>
            <Route exact path="/snacks" element={<MenuItems foodItems={foodItems}/>}></Route>
            <Route exact path="/booze" element={<MenuItems foodItems={alcoholicDrinks}/>}></Route>
        </Routes>
        </>
    )
}

export default RoutePaths;