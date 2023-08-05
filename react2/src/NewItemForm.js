import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./NewItemForm.css";
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
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name" className="form-label">
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          placeholder="Enter the name"
          onChange={handleChange}
          className="form-input"
        />
        <label htmlFor="price" className="form-label">
          Price:
        </label>
        <input
          type="text"
          id="price"
          name="price"
          value={formData.price}
          placeholder="Enter the price"
          onChange={handleChange}
          className="form-input"
        />
        <label htmlFor="description" className="form-label">
          Description:
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          placeholder="Enter the description"
          onChange={handleChange}
          rows="7"
          cols="50"
          className="form-textarea"
        />
        <label htmlFor="category" className="form-label">
          Category:
        </label>
        <select
          id="category"
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="form-select"
        >
          <option value="drinks">Drink</option>
          <option value="snacks">Snack</option>
        </select>
        <button type="submit" className="form-button">
          Add Item
        </button>
      </form>
    </div>
  );
};

export default NewItemForm;
