import { useState, useEffect } from "react";

export default function ProductWrapper() {
  const [storeItems, setStoreItems] = useState([]);

  const [cartItems, setCartItems] = useState({
    id: "",
    quantity: 0,
    price: "",
  });
  function handleAddToCart(id) {
    storeItems.map((item) => {
      if (item.id === id) {
        setCartItems((prev) => {
          return { ...prev, item };
        });
        console.log(cartItems);
      }

      return id;
    });
  }

  useEffect(() => {
    async function getProducts() {
      const url = await fetch("https://fakestoreapi.com/products");
      const data = await url.json();
      console.log(data);
      setStoreItems(data);
    }
    getProducts();
  }, []);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gridGap: "2rem",
        fontFamily: "sans-serif",
      }}
    >
      {storeItems.map((x) => (
        <div
          key={x.id}
          style={{
            border: "3px solid black",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div>
            <p>Id: {x.id}</p>
            <p>Title: {x.title}</p>
            <p>Description: {x.description}</p>
            <p>Price: {x.price}</p>
            <p>Rating.rate: {x.rating.rate}</p>
            <p>Rating.count: {x.rating.count}</p>
          </div>

          <img
            src={x.image}
            style={{ height: "auto", width: "100px", marginBottom: "2rem" }}
            alt="product"
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div>
              <button>-</button>
              <span></span>
              <button>+</button>
            </div>
            <button onClick={() => handleAddToCart(x.id)} id={x.id}>
              Add To Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
