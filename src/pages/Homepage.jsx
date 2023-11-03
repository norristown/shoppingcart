import PageNav from "../components/PageNav";
import Footer from "../components/Footer";
function Homepage({ totalItems }) {
  return (
    <>
      <PageNav totalItems={totalItems} />
      <div className="grid h-screen">
        <h1 className="text-9xl text-stone-900 font-bold text-center tracking-[2rem] uppercase">
          Norristown
        </h1>
        <h4 className="text-7xl text-center uppercase">Consume</h4>
      </div>
      <Footer />
    </>
  );
}

export default Homepage;
