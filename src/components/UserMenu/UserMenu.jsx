import { useDispatch, useSelector } from 'react-redux';

import { selectUser } from 'redux/auth/selectors';
import { logout } from 'redux/auth/operations';

import styles from './UserMenu.module.css';

export const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className={styles.container}>
      <p className={styles.text}>Hello {user.name}!</p>
      <button className={styles.btn} type="button" onClick={handleLogout}>
        Log Out
      </button>
    </div>
  );
};
