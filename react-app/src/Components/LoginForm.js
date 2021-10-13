import React from 'react';

const styles = {
  containerStyles: {
    margin: '0 auto',
    maxWidth: '400px',
  },
};

const LoginForm = ({ loginUser, logoutUser }) => {
  const handleLogin = e => {
    e.preventDefault();
    loginUser(e.target.username.value, e.target.password.value);
    e.target.reset();
  }

  const handleLogout = () => {
    logoutUser();
  }

  return (
    <div style={styles.containerStyles}>
      <form onSubmit={handleLogin}>
        <label>Username: </label>
        <input style={styles.inputStyles} name="username" />
        <br />
        <label>Password: </label>
        <input style={styles.inputStyles} name="password" />
        <br />
        <button type="submit">Login</button>
      </form>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default LoginForm;
