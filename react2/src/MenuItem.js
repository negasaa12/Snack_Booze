import React from "react";
import { Link } from "react-router-dom";



const MenuItems = ({foodItems})=> {

    
    return (
        <>

        {foodItems.map((food)=> (
            <ul>  
            <Link>{food.name}</Link>
            </ul>
        ))}
       
        </>
    
    )
}

export default MenuItems;