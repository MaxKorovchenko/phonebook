import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectIsLoggedIn } from 'redux/auth/selectors';
import logo from 'assets/images/logo2.png';

import styles from './NavBar.module.css';

export const NavBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className={styles.wrapper}>
      <img className={styles.image} src={logo} alt="logo" />
      <NavLink className={styles.link} to="/">
        Home
      </NavLink>

      {isLoggedIn && (
        <NavLink className={styles.link} to="contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
