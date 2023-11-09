import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ClipLoader } from 'react-spinners';
import PropTypes from 'prop-types';

import { deleteContact } from 'redux/contacts/operations';
import { Modal } from 'components/Modal/Modal';
import { EditForm } from 'components/EditForm/EditForm';

import styles from './ContactItem.module.css';

export const ContactItem = ({ id, name, number }) => {
  const [showModal, setShowModal] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const dispatch = useDispatch();

  const handleDelete = async () => {
    setIsDeleting(true);
    await dispatch(deleteContact(id));
    setIsDeleting(false);
  };

  return (
    <>
      <p>
        {name}: {number}
      </p>

      <div className={styles.wrapper}>
        <button
          className={styles.btn}
          type="button"
          onClick={() => setShowModal(true)}
        >
          Edit
        </button>
        <button
          className={styles.btn}
          type="button"
          onClick={handleDelete}
          disabled={isDeleting}
        >
          {isDeleting ? <ClipLoader color={'#fff'} size={15} /> : 'Delete'}
        </button>
      </div>

      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditForm
            onClose={() => setShowModal(false)}
            id={id}
            name={name}
            number={number}
          />
        </Modal>
      )}
    </>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
