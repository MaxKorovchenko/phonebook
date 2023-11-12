import { AuthNav } from 'components/AuthNav/AuthNav';
import { NavBar } from 'components/NavBar/NavBar';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';

export const DesktopBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <NavBar />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </>
  );
};
