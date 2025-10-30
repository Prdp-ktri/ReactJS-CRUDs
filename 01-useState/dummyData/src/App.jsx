import "./App.css";
import Add from "./Add";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Edit from "./Edit";
import ProductList from "./ProductList";
import { useState } from "react";

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      productName: "Hitachi 2 Ton AC",
      description: "Good AC",
      price: 40000,
    },
    {
      id: 2,
      productName: "Godrej 1.5 Ton AC",
      description: "Great AC",
      price: 35000,
    },
  ]);

  const addProduct = (newProduct) => {
    setProducts((currentProducts) => [...currentProducts, newProduct]);
  };

  const deleteProduct = (id) => {
    setProducts((currentProducts) =>
      currentProducts.filter((product) => product.id !== id)
    );
  };

  const updateProduct = (id, updatedProduct) => {
    setProducts((currentProducts) =>
      currentProducts.map((product) =>
        product.id === id ? { ...updatedProduct, id: id } : product
      )
    );
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ProductList products={products} deleteProduct={deleteProduct} />
            }
          />
          <Route path="/add" element={<Add addProduct={addProduct} />} />
          <Route
            path="/edit/:id"
            element={<Edit products={products} updateProduct={updateProduct} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
