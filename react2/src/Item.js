import React from "react";
import { useParams } from "react-router-dom";
const unroll = require("/home/kelly/react_section/react-3/unroll/unroll")



    const Item = ({items})=>{

        const {name} = useParams();
        const  unfoldedItems = unroll(items);
        console.log(unfoldedItems);
       
        
    const foundItem = unfoldedItems.find((item)=> item.name === name);
 
    return (
       <>
       <h2> {foundItem.name}</h2>
       <p>{foundItem.description}</p>
       </>)

}
export default Item;