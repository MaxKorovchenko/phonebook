import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { register } from 'redux/auth/operations';

import styles from './RegisterForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(
      register({
        name: e.target.name.value,
        email: e.target.email.value,
        password: e.target.password.value,
      })
    );

    e.target.reset();
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>REGISTER</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label}>
          Username
          <input type="text" name="name" />
        </label>

        <label className={styles.label}>
          Email
          <input type="email" name="email" />
        </label>

        <label className={styles.label}>
          Password
          <input type="password" name="password" />
        </label>

        <button className={styles.btn}>CREATE ACCOUNT</button>

        <div className={styles.signWrapper}>
          <p>Already have an account?</p>
          <Link to="/login" className={styles.link}>
            Sign In
          </Link>
        </div>
      </form>
    </div>
  );
};
