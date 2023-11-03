import { NavLink } from "react-router-dom";


function PageNav({ totalItems }) {
  return (
    <div className="bg-yellow-500 text-stone-800 font-semibold py-3">
      <ul className="flex justify-around text-2xl" >
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
