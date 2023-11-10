import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ErrorMessage, Field, Formik, Form } from 'formik';

import { register } from 'redux/auth/operations';
import { RegisterSchema } from 'helpers/validationSchemas/registerSchema';

import styles from './RegisterForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, action) => {
    dispatch(register(values));

    action.resetForm();
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>REGISTER</h2>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
        }}
        validationSchema={RegisterSchema}
        onSubmit={handleSubmit}
      >
        <Form className={styles.form} autoComplete="off">
          <label className={styles.label}>
            Username
            <Field className={styles.input} type="text" name="name" />
            <ErrorMessage
              className={styles.errorName}
              name="name"
              component="span"
            />
          </label>

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
            <p>Already have an account?</p>
            <Link to="/login" className={styles.link}>
              Sign In
            </Link>
          </div>
        </Form>
      </Formik>
    </div>
  );
};
