export default function CartWrapper({
  cartItems,
  handleRemoveCartItem,
  handleAddCartItem,
  totalPrice,
}) {
  return (
    <div className="mx-96">
      <div className="flex justify-end items-center gap-10 py-5">
        <h2 className="font-semibold">
          Total: {(Math.round(totalPrice * 100) / 100).toFixed(2)}
        </h2>
        <button
          className="focus:outline-none text-white bg-green-600 hover:bg-green-700  
        font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
        >
          Checkout
        </button>
      </div>

      {cartItems.length === 0 ? (
        <div>Your Cart Is Empty</div>
      ) : (
        <div className="flex flex-col gap-2">
          {cartItems.map((x) =>
            x.quantity === 0 ? null : (
              <div
                key={x.id}
                className="rounded flex items-center gap-12 bg-stone-100 shadow-lg py-5 px-2 w-2/3"
              >
                <img className="w-40" src={x.image} alt="product" />

                <div style={{ display: "flex", flexDirection: "column" }}>
                  <div style={{ display: "flex" }}>
                    <button onClick={() => handleRemoveCartItem(x.id)}>
                      -
                    </button>
                    <span>Quantity: {x.quantity}</span>
                    <button onClick={() => handleAddCartItem(x.id)}>+</button>
                  </div>
                </div>
                <div>
                  <p>{x.title}</p>
                  <p>
                    Price:{" "}
                    {(Math.round(x.price * x.quantity * 100) / 100).toFixed(2)}
                  </p>
                </div>
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
}
