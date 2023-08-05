import React from "react";
import { Link } from "react-router-dom";
import "./Menuitem.css"


const MenuItems = ({ items, type }) => {
 

  return (
    <div className="menu-items-container">
      <h3 className="menu-items-title">Explore Our {type.charAt(0).toUpperCase() + type.slice(1)} Menu</h3>
      <ul className="menu-items-list">
        {items.map((item) => (
          <li className="menu-item" key={item.name}>
            <Link to={`/${type}/${item.name}`} className="menu-item-link">
              <span className="menu-item-name">{item.name.toUpperCase()}</span>
              <span className="menu-item-price">${item.price}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};


export default MenuItems;