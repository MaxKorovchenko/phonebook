import { NavLink } from 'react-router-dom';

import styles from './AuthNav.module.css';

export const AuthNav = () => {
  return (
    <div className={styles.wrapper}>
      <NavLink className={styles.link} to="register">
        Sign Up
      </NavLink>
      <NavLink className={styles.link} to="login">
        Sign In
      </NavLink>
    </div>
  );
};
