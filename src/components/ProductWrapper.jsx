function ProductWrapper({ storeItems }) {
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
          <p>{x.title}</p>
          <p>{x.description}</p>
          <p>{x.price}</p>
          <p>{x.rating.rate}</p>
          <p>{x.rating.count}</p>
          <img src={x.image} style={{ height: "auto", width: "100px" }} />
          <button>add to cart</button>
        </div>
      ))}
    </div>
  );
}
