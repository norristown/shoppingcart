import PageNav from "../components/PageNav";

function Cart({cartItems, onSetCartItems}) {
  return (
    <div>
      <PageNav />
      <h1>Cart</h1>
      
      <div  style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gridGap: "2rem",
        fontFamily: "sans-serif",
      }}>
      {cartItems.map((x) => (
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
              <button>-</button>
              <span></span>
              <button>+</button>
            </div>
           
          </div>
        </div>
      ))}
      </div>
    </div>
  );
}

export default Cart;
