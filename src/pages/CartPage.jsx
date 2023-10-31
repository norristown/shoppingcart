import PageNav from "../components/PageNav";
import CartWrapper from "../components/CartWrapper";
function CartPage({ cartItems, onSetCartItems, totalPrice, totalItems }) {
  function handleRemoveCartItem(id) {
    onSetCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      )
    );

    onSetCartItems((prev) => prev.filter((item) => item.quantity !== 0));
  }
  function handleAddCartItem(id) {
    onSetCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  }
  // const totalPrice = cartItems.reduce(
  //   (acc, curr) => acc + curr.price * curr.quantity,
  //   0
  // );
  // const totalItems = cartItems.reduce((acc, curr) => acc + curr.quantity, 0);
  return (
    <div>
      <PageNav totalItems={totalItems} />
      <CartWrapper
        cartItems={cartItems}
        handleAddCartItem={handleAddCartItem}
        handleRemoveCartItem={handleRemoveCartItem}
        totalPrice={totalPrice}
      />
    </div>
  );
}

export default CartPage;
