import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { createPortal } from 'react-dom';

import { selectIsLoggedIn } from 'redux/auth/selectors';
import { UserMenu } from 'components/UserMenu/UserMenu';

import styles from './MobileMenu.module.css';

const mobileRoot = document.querySelector('#mobile-root');

export const MobileMenu = ({ onClose }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return createPortal(
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Link to="/" className={styles.link} onClick={onClose}>
          Home
        </Link>

        {isLoggedIn && (
          <Link to="contacts" className={styles.link} onClick={onClose}>
            Contacts
          </Link>
        )}

        {isLoggedIn ? (
          <UserMenu />
        ) : (
          <>
            <Link to="register" className={styles.link} onClick={onClose}>
              Sign Up
            </Link>
            <Link to="login" className={styles.link} onClick={onClose}>
              Sign In
            </Link>
          </>
        )}
      </div>
    </div>,
    mobileRoot
  );
};
