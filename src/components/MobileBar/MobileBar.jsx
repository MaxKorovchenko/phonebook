import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';

import logo from 'assets/images/logo.png';

import styles from './MobileAppBar.module.css';
import { MobileMenu } from 'components/MobileMenu/MobileMenu';

export const MobileBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className={styles.wrapper}>
      <img className={styles.image} src={logo} alt="logo" />

      {showMenu ? (
        <button
          className={styles.btn}
          type="button"
          onClick={() => setShowMenu(false)}
        >
          <AiOutlineClose color={'aliceblue'} size={40} />
        </button>
      ) : (
        <button
          className={styles.btn}
          type="button"
          onClick={() => setShowMenu(true)}
        >
          <GiHamburgerMenu color={'aliceblue'} size={40} />
        </button>
      )}

      {showMenu && <MobileMenu onClose={() => setShowMenu(false)} />}
    </div>
  );
};
