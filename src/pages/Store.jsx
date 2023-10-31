import PageNav from "../components/PageNav";
import ProductWrapper from "../components/ProductWrapper";

function Store({ cartItems, onSetCartItems, totalItems }) {
  return (
    <div>
      <PageNav totalItems={totalItems} />
      <h1>Store</h1>
      <ProductWrapper cartItems={cartItems} onSetCartItems={onSetCartItems} />
    </div>
  );
}

export default Store;
