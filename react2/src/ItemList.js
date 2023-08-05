import React from "react";
import "./itemList.css";

// component to display the item list information.

//
const ItemList = ({items})=>{

     // Calculate the total number of snacks and drinks.
    const totalSnacks = items.snacks.length;
    const totalDrinks = items.drinks.length;
    const totalItems = totalSnacks + totalDrinks;

    return (
        <div className="itemList-container">
          <h3 className="itemList-h3">
            Welcome to Snacks & Booze
          </h3>
          <p className="itemList-p">
            We offer a wide variety of {totalItems} delicious treats, including:
          </p>
          <ul className="itemList-ul">
            <li className="itemList-li">
              <strong>{totalSnacks} Kinds of Snacks</strong>
            </li>
            <li>
              <strong>{totalDrinks} Refreshing Drinks</strong>
            </li>
          </ul>
          <p className="itemList-p">
            Whether you're craving something savory or looking for a refreshing beverage,
            we have something for everyone! Come and explore our delectable selection today.
          </p>
        </div>
      );
    };


export default ItemList;