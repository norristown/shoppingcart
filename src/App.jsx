import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Store from "./pages/Store";
import Cart from "./pages/Cart";
import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";

function App() {
  const [cartItems, setCartItems] = useState([]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="store" element={<Store cartItems={cartItems} onSetCartItems={setCartItems} />} />
        <Route path="cart" element={<Cart cartItems={cartItems} onSetCartItems={setCartItems} />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
