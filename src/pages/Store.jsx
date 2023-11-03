import PageNav from "../components/PageNav";
import ProductWrapper from "../components/ProductWrapper";

function Store({ cartItems, onSetCartItems, totalItems }) {
  return (
    <div>
      <PageNav totalItems={totalItems} />
      <h1 className="text-9xl text-yellow-500 font-bold text-center tracking-[2rem] uppercase">
        Norristown
      </h1>
      <ProductWrapper cartItems={cartItems} onSetCartItems={onSetCartItems} />
    </div>
  );
}

export default Store;
