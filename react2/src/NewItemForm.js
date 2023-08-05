import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewItemForm = ({ additem }) => {
  const initial_State = {
    name: "",
    price: "",
    description: "",
    category: "drinks",
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
    additem(name, price, description, category);
    setFormData(initial_State);
    navigate(`/${category}`);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          placeholder="name"
          onChange={handleChange}
        />
        <label htmlFor="price">Price:</label>
        <input
          type="text"
          id="price"
          name="price"
          value={formData.price}
          placeholder="price"
          onChange={handleChange}
        />
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          placeholder="description"
          onChange={handleChange}
          rows="7"
          cols="50"
        />
        <label htmlFor="category">Category:</label>
        <select id="category" name="category" value={formData.category} onChange={handleChange}>
          <option value="drinks">Drink</option>
          <option value="snacks">Snack</option>
        </select>
        <button type="submit">Add Item</button>
      </form>
    </>
  );
};

export default NewItemForm;
