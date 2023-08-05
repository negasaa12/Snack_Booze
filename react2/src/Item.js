import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./item.css";


    const Item = ({items})=>{

        const {name} = useParams();
        const navigate = useNavigate();
       const foundItem = items.drinks.find((item)=> item.name === name) ||items.snacks.find((item)=> item.name === name);

       if (!foundItem) {
        // Delay the navigation using setTimeout to ensure it doesn't interrupt the rendering process
        setTimeout(() => {
          navigate('/');
        }, 0);
    
        return null; // Return null to avoid rendering anything while navigating
      }
      
      return (
          <div className="item-details-container">
            <h2 className="item-name">{foundItem.name.toUpperCase()}</h2>
              <p className="item-description">{foundItem.description}</p>
              <p className="item-price">Price: ${foundItem.price}</p>
          
            </div>
      );

}
export default Item;