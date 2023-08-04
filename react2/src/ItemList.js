import React from "react";



const ItemList = ({foodItems, alcoholicDrinks})=>{



    return(
        <>
        <h2> Snack & Booze </h2>
        
        <div>
         We have {foodItems.length} Amazing Snacks to choose from
        </div>
        <div>
            We have {alcoholicDrinks.length} Amazing Drinks to choose from
        </div>
        </>
    )
}

export default ItemList;