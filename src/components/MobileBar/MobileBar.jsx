import { useEffect, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';

import logo from 'assets/images/logo.png';
import { MobileMenu } from 'components/MobileMenu/MobileMenu';

import styles from './MobileBar.module.css';

export const MobileBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    document.body.style.overflow = showMenu ? 'hidden' : 'auto';
  }, [showMenu]);

  return (
    <div className={styles.wrapper}>
      <img className={styles.image} src={logo} alt="logo" />

      {showMenu ? (
        <button
          className={styles.btn}
          type="button"
          onClick={() => setShowMenu(false)}
          aria-label="Close Menu"
        >
          <AiOutlineClose color={'aliceblue'} size={40} />
        </button>
      ) : (
        <button
          className={styles.btn}
          type="button"
          onClick={() => setShowMenu(true)}
          aria-label="Open Menu"
        >
          <GiHamburgerMenu color={'aliceblue'} size={40} />
        </button>
      )}

      {showMenu && <MobileMenu onClose={() => setShowMenu(false)} />}
    </div>
  );
};
