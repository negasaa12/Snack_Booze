import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


const NewItemForm = ({additem})=>{
    
    const initial_State = {
        name: "",
        price: null,
        description: ""

    };
    const navigate = useNavigate();
    
    const [formData, setFormData] = useState(initial_State);
   
    

    const handleChange = (e)=>{
        const {name, value} = e.target;
       
        setFormData(formData=>({
            ...formData,
            [name]: value
        }))
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        const {name,price, description}= formData;
        additem(name,price,description);
        setFormData(initial_State);
        navigate("/snacks")
    }

    return(
        <>
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            values={formData.name}
            placeholder="name"
            onChange={handleChange}
            />
             <input 
            type="text"
            values={formData.price}
            placeholder="price"
            onChange={handleChange}
            />
             <input 
            type="text"
            values={formData.description}
            placeholder="description"
            onChange={handleChange}
            rows="7" cols="50"
            />               
            <button>Add Item</button>
        </form>
        
        </>
    )
}

export default NewItemForm;