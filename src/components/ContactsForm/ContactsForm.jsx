import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { selectContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';
import { ContactsSchema } from 'helpers/validationSchemas/contactsSchema';

import styles from './ContactsForm.module.css';

export const ContactsForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = (values, action) => {
    if (contacts.find(contact => contact.name === values.name)) {
      return toast.error(`${values.name} is already in contacts.`);
    }

    dispatch(addContact(values))
      .then(res => {
        if (res.meta.requestStatus === 'rejected') {
          throw new Error('Failed to add contact. Please try again.');
        }
        toast.info(`${res.payload.name} successfully added to your phonebook.`);
      })
      .catch(e => {
        toast.error(e.message);
      });

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
