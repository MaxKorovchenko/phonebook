import phonebook from 'assets/images/phonebook.jpg';
import styles from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={styles.container}>
      <h1>Welcome to Your Phonebook!</h1>
      <div className={styles.wrapper}>
        <div className={styles.textWrapper}>
          <p className={styles.text}>
            Discover the joy of managing your contacts with our user-friendly
            phonebook app.
          </p>
          <p className={styles.text}>
            Register in a few simple steps and unlock a world of organized
            communication.
          </p>
          <p className={styles.text}>
            Effortlessly add, edit, and search for contacts with our intuitive
            interface.
          </p>
        </div>

        <img className={styles.image} src={phonebook} alt="phonebook" />
      </div>
    </div>
  );
};

export default HomePage;
