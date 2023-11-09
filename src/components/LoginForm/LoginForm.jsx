import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { login } from 'redux/auth/operations';

import styles from './LoginForm.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(
      login({
        email: e.target.email.value,
        password: e.target.password.value,
      })
    );

    e.target.reset();
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>LOGIN</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label}>
          Email
          <input type="email" name="email" />
        </label>

        <label className={styles.label}>
          Password
          <input type="password" name="password" />
        </label>

        <button className={styles.btn}>LOGIN</button>

        <div className={styles.signWrapper}>
          <p>Don't have an account?</p>
          <Link to="/register" className={styles.link}>
            Sign Up
          </Link>
        </div>
      </form>
    </div>
  );
};
