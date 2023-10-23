import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [storeItems, setStoreItems] = useState([
    {
      title: "",
      category: "",
      description: "",
      id: "",
      image: "",
      price: "",
      rating: { rating: "", count: "" },
    },
  ]);

  useEffect(() => {
    async function getProducts() {
      const url = await fetch("https://fakestoreapi.com/products");
      const data = await url.json();
      setStoreItems(data);
    }
    getProducts();
  });
  return (
    <>
      <p>Hello</p>
    </>
  );
}

export default App;
