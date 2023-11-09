import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectIsLoggedIn } from 'redux/auth/selectors';

import styles from './NavBar.module.css';

export const NavBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className={styles.wrapper}>
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
