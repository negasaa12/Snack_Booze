import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NewItemForm = ({ additem }) => {
    const initial_State = {
      name: "",
      price: "",
      description: "",
      category: "drinks", // Setting default category to "drinks"
    };
  
    const navigate = useNavigate();
    const [formData, setFormData] = useState(initial_State);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((formData) => ({
        ...formData,
        [name]: value,
      }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const { name, price, description, category } = formData;
      additem(name, price, description, category); // Pass the category along with other data
      setFormData(initial_State);
      navigate(`/${category}`);
    };
  
    return (
      <>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name" // Add the name attribute for accessing the value in handleChange
            value={formData.name}
            placeholder="name"
            onChange={handleChange}
          />
          <input
            type="text"
            name="price" // Add the name attribute for accessing the value in handleChange
            value={formData.price}
            placeholder="price"
            onChange={handleChange}
          />
          <textarea
            name="description" // Add the name attribute for accessing the value in handleChange
            value={formData.description}
            placeholder="description"
            onChange={handleChange}
            rows="7"
            cols="50"
          />
          <select name="category" value={formData.category} onChange={handleChange}>
            <option value="drinks">Drink</option>
            <option value="snacks">Snack</option>
          </select>
          <button type="submit">Add Item</button>
        </form>
      </>
    );
  };

export default NewItemForm;