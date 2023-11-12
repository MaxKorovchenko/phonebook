import { useMediaQuery } from 'react-responsive';

import { MobileBar } from 'components/MobileBar/MobileBar';
import { DesktopBar } from 'components/DesktopBar/DesktopBar';

import styles from './AppBar.module.css';

export const AppBar = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isDesktop = useMediaQuery({ minWidth: 768 });

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {isMobile && <MobileBar />}
        {isDesktop && <DesktopBar />}
      </div>
    </div>
  );
};
