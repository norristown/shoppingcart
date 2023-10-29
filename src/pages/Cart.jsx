import PageNav from "../components/PageNav";

function Cart({cartItems, onSetCartItems}) {
  function handleRemoveCartItem(id) {

    onSetCartItems(prev => prev.map(item => item.id === id ? 
      { ...item, quantity: item.quantity - 1 } : item ))

    onSetCartItems(prev => prev.filter(item => item.quantity !== 0))

  }
  function handleAddCartItem(id) {
    onSetCartItems(prev => prev.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item))
  }
  return (
    <div>
      <PageNav />
      <h1>Cart</h1>
      {cartItems.length === 0 ? <div>Your Cart Is Empty</div> : 
        <div  style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gridGap: "2rem",
          fontFamily: "sans-serif",
        }}>
        {cartItems.map((x) => (
          x.quantity === 0 ? null : 
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
              <p>Quantity: {x.quantity}</p>
              <p>Price: {x.price * x.quantity}</p>
       
            </div>
  
            <img
              src={x.image}
              style={{ height: "auto", width: "100px", marginBottom: "2rem" }}
              alt="product"
            />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div>
                <button onClick={() => handleRemoveCartItem(x.id)}>-</button>
                <span></span>
                <button onClick={() => handleAddCartItem(x.id)}>+</button>
              </div>
             
            </div>
          </div>
        ))}
        </div>
      }
      
    </div>
  );
}

export default Cart;
