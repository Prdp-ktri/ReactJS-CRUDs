import React from "react";
import { Link } from "react-router-dom";

function ProductList({ products, deleteProduct }) {
  return (
    <div>
      <h2>Current Products:</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.productName} - {product.description} - {product.price}
            <Link to={`/edit/${product.id}`}>
              <button>Edit</button>
            </Link>
            <button onClick={() => deleteProduct(product.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <Link to="/add">
        <button>Add New Product</button>
      </Link>
    </div>
  );
}

export default ProductList;
