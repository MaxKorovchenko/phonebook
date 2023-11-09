import { useSelector } from 'react-redux';

import { AuthNav } from 'components/AuthNav/AuthNav';
import { NavBar } from 'components/NavBar/NavBar';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { selectIsLoggedIn } from 'redux/auth/selectors';

import styles from './AppBar.module.css';

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <NavBar />

        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </div>
    </div>
  );
};
