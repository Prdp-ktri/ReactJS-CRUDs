import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

function Add({ addProduct }) {
  const [newProductData, setNewProductData] = useState({
    productName: "",
    description: "",
    price: "",
  });

  const navi = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProductData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddProduct = (e) => {
    e.preventDefault();

    const newProduct = {
      ...newProductData,
      id: Date.now(), // Use a more reliable unique ID
      price: Number(newProductData.price),
    };

    addProduct(newProduct);

    setNewProductData({
      productName: "",
      description: "",
      price: "",
    });

    navi("/");
  };

  return (
    <>
      <form onSubmit={handleAddProduct}>
        <label htmlFor="productName">Product Name:</label>
        <input
          value={newProductData.productName}
          type="text"
          name="productName"
          onChange={handleChange}
        />
        <br />
        <label htmlFor="description">Product Description:</label>
        <input
          value={newProductData.description}
          type="text"
          name="description"
          onChange={handleChange}
        />
        <br />
        <label htmlFor="price">Price:</label>
        <input
          type="number"
          value={newProductData.price}
          name="price"
          onChange={handleChange}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Add;
