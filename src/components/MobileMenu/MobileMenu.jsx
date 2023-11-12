import { Link } from 'react-router-dom';
import styles from './MobileMenu.module.css';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { UserMenu } from 'components/UserMenu/UserMenu';

export const MobileMenu = ({ onClose }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
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
    </div>
  );
};
