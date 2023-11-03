import PageNav from "../components/PageNav";
import ProductWrapper from "../components/ProductWrapper";
import Footer from "../components/Footer";
function Store({ cartItems, onSetCartItems, totalItems }) {
  return (
    <div>
      <PageNav totalItems={totalItems} />
      <ProductWrapper cartItems={cartItems} onSetCartItems={onSetCartItems} />
      <Footer />
    </div>
  );
}

export default Store;
