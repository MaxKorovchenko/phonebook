const styles = {
  number: {
    fontSize: 120,
    color: 'aliceblue',
    textAlign: 'center',
    marginTop: 100,
  },
  title: {
    fontSize: 45,
    color: 'aliceblue',
    textAlign: 'center',
  },
};

const NotFoundPage = () => {
  return (
    <div>
      <p style={styles.number}>404</p>
      <h2 style={styles.title}>Page not found</h2>
    </div>
  );
};

export default NotFoundPage;
