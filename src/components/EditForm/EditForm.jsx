import { useDispatch } from 'react-redux';
import { ErrorMessage, Field, Formik, Form } from 'formik';
import PropTypes from 'prop-types';

import { editContact } from 'redux/contacts/operations';
import { ContactsSchema } from 'helpers/validationSchemas/contactsSchema';

import styles from './EditForm.module.css';

export const EditForm = ({ onClose, id, name, number }) => {
  const dispatch = useDispatch();

  const handleSubmit = (values, action) => {
    dispatch(editContact({ id, ...values }));
    onClose();
    action.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name,
        number,
      }}
      validationSchema={ContactsSchema}
      onSubmit={handleSubmit}
    >
      <Form className={styles.form} autoComplete="off">
        <label className={styles.label}>
          Name
          <Field className={styles.input} type="text" name="name" required />
          <ErrorMessage
            className={styles.errorName}
            name="name"
            component="span"
          />
        </label>

        <label className={styles.label}>
          Number
          <Field className={styles.input} type="tel" name="number" required />
          <ErrorMessage
            className={styles.errorNumber}
            name="number"
            component="span"
          />
        </label>
        <button className={styles.btn} type="submit">
          EDIT CONTACT
        </button>
      </Form>
    </Formik>
  );
};

EditForm.propTypes = {
  onClose: PropTypes.func,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
