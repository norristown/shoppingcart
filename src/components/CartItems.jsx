import { useReducer } from "react";

const initial = { quantity: 0 };
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { quantity: state.quantity + 1 };
    case "decrement":
      return { quantity: state.quantity - 1 };
    default:
      throw new Error();
  }
}
export default function CartItems() {
  const [cart, setCart] = useReducer(reducer, initial);

  return (
    <>
      <span>{cart}</span>
      <button onClick={() => setCart({ type: "decrement" })}>-</button>
      <button onClick={() => setCart({ type: "increment" })}>+</button>
    </>
  );
}
