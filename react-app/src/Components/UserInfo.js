import React from 'react';
import { useSelector } from 'react-redux';

const styles = {
  containerStyles: {
    maxWidth: '400px',
    margin: '50px auto',
  }
}

const UserInformation = () => {
  const { user } = useSelector((state) => state.userReducer);

  return(
    <div style={styles.containerStyles}>
      <p>Username: {user.username}</p>
      <p>Name: {user.name}</p>
      <p>Description: {user.description}</p>
    </div>
  )
};

export default UserInformation;
