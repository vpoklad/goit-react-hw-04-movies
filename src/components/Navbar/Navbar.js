import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';
export default function Navbar() {
  return (
    <nav className={s.navigation}>
     
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? s.activeLink : s.link)}
        >
          Home
        </NavLink>
        <NavLink
          to="/movies"
          className={({ isActive }) => (isActive ? s.activeLink : s.link)}
        >
          Movies
        </NavLink>
        <NavLink
          to="/persons"
          className={({ isActive }) => (isActive ? s.activeLink : s.link)}
        >
          Persons
        </NavLink>
      
    </nav>
  );
}
