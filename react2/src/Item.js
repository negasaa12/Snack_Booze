import React from "react";
import { useParams } from "react-router-dom";
   import { unroll } from "./unroll/unroll";



    const Item = ({items})=>{

        const {name} = useParams();
        const  unfoldedItems = unroll(items);
       
       
        
    const foundItem = unfoldedItems.find((item)=> item.name === name);
 
    return (
       <>
       <h2> {foundItem.name}</h2>
       <p>{foundItem.description}</p>
       <p>{foundItem.price}</p>
       </>)

}
export default Item;