import { useDispatch, useSelector } from 'react-redux';

import { setFilter } from 'redux/filter/slice';
import { selectFilter } from 'redux/filter/selectors';
import { selectContacts } from 'redux/contacts/selectors';

import styles from './Filter.module.css';

export const Filter = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  return (
    <label className={styles.label}>
      Find contacts by name:
      <input
        className={styles.input}
        type="text"
        value={filter}
        onChange={e => dispatch(setFilter(e.target.value))}
        placeholder={`Total contacts: ${contacts.length}`}
        autoComplete="off"
      />
    </label>
  );
};
