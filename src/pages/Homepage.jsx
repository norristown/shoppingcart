import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";

function Homepage({ totalItems }) {
  return (
    <>
      <PageNav totalItems={totalItems} />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1>N O R R I S T O W N</h1>
      </div>
    </>
  );
}

export default Homepage;
