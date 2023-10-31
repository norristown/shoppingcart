import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Store from "./pages/Store";
import CartPage from "./pages/CartPage";
import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const totalPrice = cartItems.reduce(
    (acc, curr) => acc + curr.price * curr.quantity,
    0
  );
  const totalItems = cartItems.reduce((acc, curr) => acc + curr.quantity, 0);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage totalItems={totalItems} />} />
        <Route
          path="store"
          element={
            <Store
              cartItems={cartItems}
              onSetCartItems={setCartItems}
              totalItems={totalItems}
            />
          }
        />
        <Route
          path="cart"
          element={
            <CartPage
              cartItems={cartItems}
              onSetCartItems={setCartItems}
              totalPrice={totalPrice}
              totalItems={totalItems}
            />
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
