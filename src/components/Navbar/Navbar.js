import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';
export function Navbar() {
  return (
    <nav className={s.navigation}>
      <div className="container">
        <NavLink exact to="/" className={s.link} activeClassName={s.activeLink}>
          Home
        </NavLink>
        <NavLink to="/movies" className={s.link} activeClassName={s.activeLink}>
          Movies
        </NavLink>
      </div>
    </nav>
  );
}
