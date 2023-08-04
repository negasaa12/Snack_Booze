import React from "react";



const ItemList = ({items})=>{

        

    return(
        <>
        <h2> Snack & Booze </h2>
        
        <h3> We have {items.snacks.length}</h3>
        </>
    )
}

export default ItemList;