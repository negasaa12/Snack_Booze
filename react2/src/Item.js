import React from "react";
import { useParams } from "react-router-dom";
import { unroll } from "./unroll/unroll";
import "./item.css";


    const Item = ({items})=>{

        const {name} = useParams();
       
       
       
        
    const foundItem = items.drinks.find((item)=> item.name === name) ||items.snacks.find((item)=> item.name === name);
 
    return (
        <div className="item-details-container">
          <h2 className="item-name">{foundItem.name.toUpperCase()}</h2>
          <p className="item-description">{foundItem.description}</p>
          <p className="item-price">Price: ${foundItem.price}</p>
          
        </div>
      );

}
export default Item;