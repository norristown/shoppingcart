import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";

function PageNav({ totalItems }) {
  return (
    <div className={styles.nav}>
      <ul>
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
