import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css"
import Logo from "./Logo";

export default function PageNav() {
  return (
    <nav className={styles.nav}>
      <Logo />
      <ul>
        {/* <li>
          NavLink rather than Link gives it a class which we can manipulate more easily with CSS, such as displaying which is active.
          <NavLink to='/'>Home</NavLink>
        </li> */}
        <li>
          <NavLink to='/pricing'>Pricing</NavLink>
        </li>
        <li>
          <NavLink to='/product'>Product</NavLink>
        </li>
        <li>
          <NavLink to='/login' className={styles.ctaLink}>Login</NavLink>
        </li>
      </ul>
    </nav>
  )
}
