import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Store from "./pages/Store";
import Cart from "./pages/Cart";
import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";

function App() {
  // const [storeItems, setStoreItems] = useState([]);

  // useEffect(() => {
  //   async function getProducts() {
  //     const url = await fetch("https://fakestoreapi.com/products");
  //     const data = await url.json();
  //     console.log(data);
  //     setStoreItems(data);
  //   }
  //   getProducts();
  // }, []);
  return (
    

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="store" element={<Store />} />
        <Route path="cart" element={<Cart />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
