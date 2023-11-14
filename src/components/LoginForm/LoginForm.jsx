import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ErrorMessage, Field, Formik, Form } from 'formik';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { login } from 'redux/auth/operations';
import { LoginSchema } from 'helpers/validationSchemas/loginSchema';

import styles from './LoginForm.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, action) => {
    dispatch(login(values))
      .then(res => {
        if (res.meta.requestStatus === 'rejected') {
          throw new Error('Invalid email or password');
        }
        toast.info(`Welcome ${res.payload.user.name}`);
      })
      .catch(e => {
        toast.error(e.message);
      });

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
            LOGIN
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
