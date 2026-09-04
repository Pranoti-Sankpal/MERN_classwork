import { useState } from "react";

function App() {

  const [products] = useState([
    { id: 1, name: "Shoes", price: 2000, inStock: true },
    { id: 2, name: "Shirt", price: 1500, inStock: false },
    { id: 3, name: "Watch", price: 3000, inStock: true }
  ]);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Product Mall</h1>

      {/* List Rendering */}
      {products.map((item) => (
        <div key={item.id} style={{
          border: "1px solid black",
          margin: "10px",
          padding: "10px"
        }}>

          <h3>{item.name}</h3>
          <p>Price: ₹{item.price}</p>

          {/* Conditional UI */}
          {item.inStock ? (
            <p style={{ color: "green" }}>In Stock</p>
          ) : (
            <p style={{ color: "red" }}>Out of Stock</p>
          )}

        </div>
      ))}

    </div>
  );
}

export default App;