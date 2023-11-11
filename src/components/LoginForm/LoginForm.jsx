import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ErrorMessage, Field, Formik, Form } from 'formik';

import { login } from 'redux/auth/operations';
import { LoginSchema } from 'helpers/validationSchemas/loginSchema';

import styles from './LoginForm.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, action) => {
    dispatch(login(values));

    action.resetForm();
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>LOGIN</h2>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={LoginSchema}
        onSubmit={handleSubmit}
      >
        <Form className={styles.form} autoComplete="on">
          <label className={styles.label}>
            Email
            <Field className={styles.input} type="email" name="email" />
            <ErrorMessage
              className={styles.errorEmail}
              name="email"
              component="span"
            />
          </label>

          <label className={styles.label}>
            Password
            <Field className={styles.input} type="password" name="password" />
            <ErrorMessage
              className={styles.errorPassword}
              name="password"
              component="span"
            />
          </label>

          <button className={styles.btn} type="submit">
            CREATE ACCOUNT
          </button>

          <div className={styles.signWrapper}>
            <p>Don't have an account?</p>
            <Link to="/register" className={styles.link}>
              Sign Up
            </Link>
          </div>
        </Form>
      </Formik>
    </div>
  );
};
