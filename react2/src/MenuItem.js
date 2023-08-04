import React from "react";
import { Link } from "react-router-dom";



const MenuItems = ({items,type})=> {

    
    return (
        <>
      <ul>
        {items.map((item) => (
          <li key={item.name}>
            <Link to={`/${type}/${item.name}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default MenuItems;