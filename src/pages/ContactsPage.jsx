import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';

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

      {/* {error && (
        <h2
          style={{
            textAlign: 'center',
            fontSize: 24,
            color: 'aliceblue',
            padding: 20,
          }}
        >
          something went wrong 😥
        </h2>
      )} */}

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
        theme="white"
      />
    </div>
  );
};

export default ContactsPage;
