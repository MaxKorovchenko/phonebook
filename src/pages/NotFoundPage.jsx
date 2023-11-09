const styles = {
  number: {
    fontSize: 150,
    color: 'aliceblue',
    textAlign: 'center',
    marginTop: 200,
  },
  title: {
    fontSize: 50,
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
