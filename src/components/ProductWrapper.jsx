import { useState, useEffect } from "react";

export default function ProductWrapper({ cartItems, onSetCartItems }) {
  const [storeItems, setStoreItems] = useState([]);
  const [quantity, setQuantity] = useState(() =>
    Array.from({ length: 20 }, (_, index) => ({
      id: index + 1,
      quantity: 1,
    }))
  );

  function handleAddToCart(id) {
    const itemToAdd = storeItems.find((item) => item.id === id);
    const itemQuantity = quantity.find(
      (item) => item.id === id && item
    ).quantity;

    if (itemToAdd) {
      const isInCart = cartItems.find((item) => item.id === id);

      if (isInCart) {
        onSetCartItems((prev) =>
          prev.map((cartItem) =>
            cartItem.id === id
              ? {
                  ...cartItem,
                  quantity: cartItem.quantity + itemQuantity,
                }
              : cartItem
          )
        );
      } else {
        onSetCartItems((prev) => [
          ...prev,
          {
            id: itemToAdd.id,
            title: itemToAdd.title,
            quantity: itemQuantity,
            price: itemToAdd.price,
            image: itemToAdd.image,
          },
        ]);
      }
    }
  }

  function handleChange(e, id) {
    setQuantity((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: Number(e.target.value) } : item
      )
    );
  }

  function handleIncrement(id, buttonValue) {
    if (buttonValue === "+") {
      setQuantity((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity++ } : item
        )
      );
    } else {
      setQuantity((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity-- } : item
        )
      );
    }
  }

  useEffect(() => {
    async function getProducts() {
      const url = await fetch("https://fakestoreapi.com/products");
      const data = await url.json();
      setStoreItems(data);
    }
    getProducts();
  }, [cartItems]);

  return (
    <div className="grid grid-cols-4 gap-10 mt-10 mx-80">
      {storeItems.map((x) => (
        <div key={x.id} className="flex flex-col justify-between">
          <p className="font-semibold text-center">{x.title}</p>
          <img className="mx-auto w-1/2" src={x.image} alt="product" />
          <div>
            <p className="text-center">
              Rating: {x.rating.rate}/5 ({x.rating.count} Reviews)
            </p>
            <p className="font-semibold text-center">Price: ${x.price}</p>
            <div className="flex-col text-center">
              <button
                onClick={() => handleIncrement(x.id, "-")}
                disabled={
                  quantity.find((item) => item.id === x.id && item).quantity ===
                  1
                }
                className="focus:outline-none text-white bg-red-600 hover:bg-red-700  font-medium rounded-lg text-sm px-2 mr-2 mb-2 "
              >
                -
              </button>
              <input
                className="text-stone-900 w-1/12 text-center mr-2"
                id={x.id}
                value={
                  quantity.find((item) => item.id === x.id && item).quantity
                }
                onChange={(e) => handleChange(e, x.id)}
              ></input>
              <button
                className="focus:outline-none text-white bg-green-600 hover:bg-green-700  font-medium rounded-lg text-sm px-2 mr-2 mb-2 "
                id={x.id}
                onClick={() => handleIncrement(x.id, "+")}
              >
                +
              </button>
              <button
                onClick={() => handleAddToCart(x.id)}
                id={x.id}
                className="focus:outline-none text-white bg-green-600 hover:bg-green-700  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 w-full"
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
