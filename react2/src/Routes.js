import React from "react";
import { Route, Routes, NavLink} from "react-router-dom";
import ItemList from "./ItemList";
import { foodItems, alcoholicDrinks } from "./Inventory";
import MenuItems from "./MenuItem";
import Item from "./Item";
import NewItemForm from "./NewItemForm";
import { useState, useEffect } from "react";

const RoutePaths = () => {

    // const [snacks,setSnacks] = useState(foodItems);
    // const [drinks, setDrinks] = useState(alcoholicDrinks);

    // const addSnack = (name,price,description) => {
    //     setDrinks([...snacks, {name: name, price: price, description}])
    // }

    const items ={
      snacks: foodItems, drinks: alcoholicDrinks
    }
    const [products, setProducts] = useState(items);

   
const additem = (name, price, description, category) => {
  setProducts((prevProducts) => ({
    ...prevProducts,
    [category]: [...prevProducts[category], { name, price, description }]
  }));
};



    console.log( "ROUTESSSSS STATE", products);
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
        <li>
          <NavLink to="/new" activeClassName="active">
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
        </Routes>
        </>
    )
}

export default RoutePaths;