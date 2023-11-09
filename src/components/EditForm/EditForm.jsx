import { useDispatch } from 'react-redux';
import { useState } from 'react';
import PropTypes from 'prop-types';

import { editContact } from 'redux/contacts/operations';

import styles from './EditForm.module.css';

export const EditForm = ({ onClose, id, name, number }) => {
  const [nameToEdit, setNameToEdit] = useState(name);
  const [numberToEdit, setNumberToEdit] = useState(number);

  const handleNameChange = e => setNameToEdit(e.target.value);
  const handleNumberChange = e => setNumberToEdit(e.target.value);

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(editContact({ id, name: nameToEdit, number: numberToEdit }));
    onClose();
    e.target.reset();
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit} autoComplete="off">
        <label className={styles.label}>
          Username
          <input
            type="text"
            name="name"
            value={nameToEdit}
            onChange={handleNameChange}
            required
          />
        </label>

        <label className={styles.label}>
          Number
          <input
            type="tel"
            name="number"
            value={numberToEdit}
            onChange={handleNumberChange}
            required
          />
        </label>

        <button className={styles.btn}>EDIT CONTACT</button>
      </form>
    </div>
  );
};

EditForm.propTypes = {
  onClose: PropTypes.func,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
