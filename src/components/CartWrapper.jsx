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
      <h2>Total: {totalPrice}</h2>
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
                  <p>Price: {x.price * x.quantity}</p>
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
