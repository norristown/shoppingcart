import PageNav from "../components/PageNav";
import ProductWrapper from "../components/ProductWrapper";

function Store({cartItems, onSetCartItems}) {
  
  return (
    <div>
      <PageNav />
      <h1>Store</h1>
      <ProductWrapper cartItems={cartItems} onSetCartItems={onSetCartItems} />
    </div>
  );
}

export default Store;
