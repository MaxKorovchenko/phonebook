import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';

import { selectContacts } from 'redux/contacts/selectors';

import styles from './ContactsForm.module.css';
import { addContact } from 'redux/contacts/operations';

const phoneRegex =
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
const phoneError =
  'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +';

const ContactsSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Please, enter contact name'),
  number: Yup.string()
    .matches(phoneRegex, phoneError)
    .required('Please, enter phone number'),
});

export const ContactsForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = (values, action) => {
    if (contacts.find(contact => contact.name === values.name)) {
      return alert(`${values.name} is already in contacts.`);
    }

    dispatch(addContact(values));
    action.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={ContactsSchema}
      onSubmit={handleSubmit}
    >
      <Form className={styles.form} autoComplete="off">
        <label className={styles.label}>
          Name
          <Field className={styles.input} type="text" name="name" required />
          <ErrorMessage
            className={styles.message}
            name="name"
            component="span"
          />
        </label>

        <label className={styles.label}>
          Number
          <Field className={styles.input} type="tel" name="number" required />
          <ErrorMessage
            className={styles.message}
            name="number"
            component="span"
          />
        </label>
        <button className={styles.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};
