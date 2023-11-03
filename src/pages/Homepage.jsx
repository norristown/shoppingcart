import PageNav from "../components/PageNav";

function Homepage({ totalItems }) {
  return (
    <>
      <PageNav totalItems={totalItems} />
      <div className="grid">
        <h1 className="text-9xl text-yellow-500 font-bold text-center tracking-[2rem] uppercase">
          Norristown
        </h1>
        <h4 className="text-7xl text-center">Consume</h4>
      </div>
    </>
  );
}

export default Homepage;
