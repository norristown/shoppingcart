import { useState, useEffect } from "react";

export default function ProductWrapper() {
  const [storeItems, setStoreItems] = useState([]);
  const [cartItems, setCartItems] = useState([
    // {
    //   id: "",
    //   quantity: 0,
    //   price: "",
    // },
  ]);
  // function handleAddToCart(id) {
  //   storeItems.map((item) => {
  //     if (item.id !== id) {
  //       setCartItems((prev) => [
  //         ...prev,
  //         {
  //           id: item.id,
  //           quantity: 1,
  //           price: item.price,
  //         },
  //       ]);
  //     } else {
  //       setCartItems((prev) => [...prev, {}]);
  //     }
  //   });
  //   console.log(cartItems);
  // }

  function handleAddToCart(id) {
    const itemToAdd = storeItems.find((item) => item.id === id);

    if (itemToAdd) {
      const isInCart = cartItems.find((item) => item.id === id);

      if (isInCart) {
        setCartItems((prev) =>
          prev.map(
            (cartItem) =>
              cartItem.id === id && {
                ...cartItem,
                quantity: cartItem.quantity + 1,
              }
          )
        );
      } else {
        setCartItems((prev) => [
          ...prev,
          {
            id: itemToAdd.id,
            quantity: 1,
            price: itemToAdd.price,
          },
        ]);
      }
    }
  }

  useEffect(() => {
    async function getProducts() {
      const url = await fetch("https://fakestoreapi.com/products");
      const data = await url.json();
      console.log(data);
      setStoreItems(data);
    }
    getProducts();
    console.log(cartItems);
    const total = cartItems.reduce(
      (acc, curr) => acc + curr.price * curr.quantity,
      0
    );
    console.log(total);
  }, [cartItems]);

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
