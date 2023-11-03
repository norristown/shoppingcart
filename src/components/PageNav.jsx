import { NavLink } from "react-router-dom";

function PageNav({ totalItems }) {
  return (
    <div className="bg-rose-700 text-stone-800 font-semibold py-3">
      <ul className="flex justify-between text-2xl mx-96">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/store">Store</NavLink>
        </li>
        <li>
          <NavLink to="/cart">Cart ({totalItems})</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default PageNav;
