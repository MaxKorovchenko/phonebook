import { useSelector } from 'react-redux';

import { ContactItem } from 'components/ContactItem/ContactItem';
import { selectContacts } from 'redux/contacts/selectors';
import { selectFilter } from 'redux/filter/selectors';

import styles from './ContactsList.module.css';

export const ContactsList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    <section className={styles.section}>
      <ul>
        {visibleContacts.map(({ id, name, number }) => (
          <li className={styles.item} key={id}>
            <ContactItem id={id} name={name} number={number} />
          </li>
        ))}
      </ul>
    </section>
  );
};
