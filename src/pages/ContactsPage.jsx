import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ContactsForm } from 'components/ContactsForm/ContactsForm';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';
import { getAllContacts } from 'redux/contacts/operations';
import { selectError } from 'redux/contacts/selectors';

import styles from './ContactsPage.module.css';

const ContactsPage = () => {
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllContacts());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>CONTACTS</h2>
      <div className={styles.wrapper}>
        <div>
          <ContactsForm />
          <Filter />
        </div>

        <ContactsList />
      </div>

      {error && (
        <h2 className={styles.error}>
          Something went wrong 😥. Try again later
        </h2>
      )}
    </div>
  );
};

export default ContactsPage;
