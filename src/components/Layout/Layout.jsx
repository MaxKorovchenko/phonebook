import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { AppBar } from 'components/AppBar/AppBar';
import { Footer } from 'components/Footer/Footer';

import styles from './Layout.module.css';

export const Layout = () => {
  return (
    <div className={styles.container}>
      <header>
        <AppBar />
      </header>

      <main>
        <Suspense
          fallback={<p style={{ color: 'aliceblue' }}>Loading page...</p>}
        >
          <Outlet />
        </Suspense>
      </main>

      <Footer />

      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};
