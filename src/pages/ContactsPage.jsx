import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import { ContactsForm } from 'components/ContactsForm/ContactsForm';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';
import { getAllContacts } from 'redux/contacts/operations';
import { selectError } from 'redux/contacts/selectors';

const styles = {
  container: {
    width: 800,
    margin: '20px auto',
    padding: 20,
    boxShadow: '1px 1px 10px 5px rgb(224, 213, 213)',
    backgroundColor: 'rgb(61, 50, 160)',
  },

  title: {
    marginBottom: 30,
    color: 'aliceblue',
    textAlign: 'center',
    letterSpacing: '0.03em',
    textShadow: '2px 2px 10px rgb(1, 10, 13)',
  },
};

const ContactsPage = () => {
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllContacts());
  }, [dispatch]);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>PHONEBOOK</h1>
      <ContactsForm />
      <Filter />

      {error && (
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
      )}
      <ContactsList />

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
