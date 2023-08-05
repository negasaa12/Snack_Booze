import React from "react";
import "./Routes.css";
import { Route, Routes, NavLink , useNavigate} from "react-router-dom";
import ItemList from "./ItemList";
import { foodItems, alcoholicDrinks } from "./Inventory";
import MenuItems from "./MenuItem";
import Item from "./Item";
import NewItemForm from "./NewItemForm";
import { useState, useEffect } from "react";
import NotFound from "./NotFound";


const RoutePaths = () => {

   

    const items ={
      snacks: foodItems, drinks: alcoholicDrinks
    }
    const [products, setProducts] = useState(items);
    const navigate = useNavigate();
   
const additem = (name, price, description, category) => {
  setProducts((prevProducts) => ({
    ...prevProducts,
    [category]: [...prevProducts[category], { name, price, description }]
  }));
};



     
    return(
        <>
         <nav className="nav-container">
      <ul className="nav-ul">
        <li className="nav-li">
          <NavLink  className="nav-NavLink"exact to="/" >Home</NavLink>
        </li>
        <li className="nav-li">
          <NavLink className="nav-NavLink" to="/snacks" >
            Snacks
          </NavLink>
        </li>
        <li className="nav-li">
          <NavLink  className="nav-NavLink" to="/drinks" activeClassName="active">
           Drinks
          </NavLink>
        </li>
        <li className="nav-li">
          <NavLink  className="nav-NavLink" to="/new" activeClassName="active">
           Add
          </NavLink>
        </li>

      </ul>
    </nav>
        <Routes>
            <Route exact path="/" element={<ItemList items={products} />}></Route>
            <Route exact path="/snacks" element={<MenuItems  type="snacks"items={products.snacks}/>}></Route>
            <Route exact path="/snacks/:name" element={<Item  items={products}/>}></Route>
            <Route exact path="/drinks" element={<MenuItems type="drinks" items={products.drinks}/>}></Route>
            <Route exact path="/drinks/:name" element={<Item items={products}/>} ></Route>
            <Route exact path="/new" element={<NewItemForm additem={additem}/>} ></Route>
            <Route path="*" element={<NotFound/>}></Route>
        </Routes>
        </>
    )
}

export default RoutePaths;