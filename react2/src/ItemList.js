import React from "react";



const ItemList = ({items})=>{

        

    return(
        <>
        <h2> Snack & Booze </h2>
        
        <h3> We have {items.snacks.length} Snacks & {items.drinks.length} Drinks</h3>
        </>
    )
}

export default ItemList;