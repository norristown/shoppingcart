export default function CartWrapper({
  cartItems,
  handleRemoveCartItem,
  handleAddCartItem,
  totalPrice,
}) {
  return (
    <div>
      {" "}
      <h1>Cart</h1>
      <h2>Total: {(Math.round(totalPrice * 100) / 100).toFixed(2)}</h2>
      <button>Checkout</button>
      {cartItems.length === 0 ? (
        <div>Your Cart Is Empty</div>
      ) : (
        <div
          style={{
            display: "flex",
            fontFamily: "sans-serif",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          {cartItems.map((x) =>
            x.quantity === 0 ? null : (
              <div
                key={x.id}
                style={{
                  border: "3px solid black",
                  display: "flex",
                  gap: "2rem",
                  alignItems: "center",
                }}
              >
                <img
                  src={x.image}
                  style={{
                    height: "auto",
                    width: "100px",
                  }}
                  alt="product"
                />
                <div>
                  <p>{x.title}</p>
                  <p>Price: {(Math.round((x.price * x.quantity) * 100) / 100).toFixed(2)}</p>
                </div>

                <div style={{ display: "flex", flexDirection: "column" }}>
                  <div style={{ display: "flex" }}>
                    <button onClick={() => handleRemoveCartItem(x.id)}>
                      -
                    </button>
                    <span>Quantity: {x.quantity}</span>
                    <button onClick={() => handleAddCartItem(x.id)}>+</button>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
}
