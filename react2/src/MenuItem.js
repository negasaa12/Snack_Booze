import React from "react";
import { Link } from "react-router-dom";




const MenuItems = ({items,type})=> {


    console.log(items,type)

    return (
        <>
      <ul>
        {items.map((item) => (
          <li key={item.name}>
            <Link to={`/${type}/${item.name}`}>{item.name.toUpperCase()}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default MenuItems;