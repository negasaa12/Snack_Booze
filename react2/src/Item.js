import React from "react";
import { useParams } from "react-router-dom";
import { unroll } from "./unroll/unroll";



    const Item = ({items})=>{

        const {name} = useParams();
       
       
       
        
    const foundItem = items.drinks.find((item)=> item.name === name) ||items.snacks.find((item)=> item.name === name);
 
    return (
       <>
       <h2> {foundItem.name}</h2>
       <p>{foundItem.description}</p>
       <p>{foundItem.price}</p>
       </>)

}
export default Item;