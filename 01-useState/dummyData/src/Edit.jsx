import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./App.css";

function Edit({ products, updateProduct }) {
  const { id } = useParams();
  const navi = useNavigate();
  const [formData, setFormData] = useState({
    productName: "",
    description: "",
    price: "",
  });

  useEffect(() => {
    const productToEdit = products.find(
      (product) => product.id === parseInt(id)
    );
    if (productToEdit) {
      setFormData(productToEdit);
    }
  }, [products, id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    updateProduct(parseInt(id), {
      ...formData,
      price: Number(formData.price),
    });
    navi("/");
  };

  return (
    <div>
      <h1>Edit Product</h1>
      <form onSubmit={handleUpdate}>
        <div>
          <label htmlFor="productName">Product Name:</label>
          <input
            id="productName"
            name="productName"
            type="text"
            value={formData.productName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <input
            id="description"
            name="description"
            type="text"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input
            id="price"
            name="price"
            type="number"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default Edit;
