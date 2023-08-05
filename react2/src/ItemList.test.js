import React from "react";
import {render, fireEvent} from "@testing-library/react";
import ItemList from "./ItemList";
import { foodItems, alcoholicDrinks } from "./Inventory";

const items = {
    snacks: foodItems,
    drinks: alcoholicDrinks
  };

 it("renders ItemList", ()=>{
    
      render(<ItemList items={items}/>)

 })

 

it("matches snapshot", ()=>{

    
    const { asFragment } = render(<ItemList items={items}/>);
    expect(asFragment()).toMatchSnapshot();
})
