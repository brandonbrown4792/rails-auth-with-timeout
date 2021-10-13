import React from 'react';

import { useAuth } from '../utils/useAuth';
import LoginForm from './LoginForm';
import UserInformation from './UserInfo';

function App() {
  const { loginUser, logoutUser } = useAuth();
  return (
    <div style={{ margin: '100px 0'}}>
      <LoginForm loginUser={loginUser} logoutUser={logoutUser} />
      <UserInformation />
    </div>
  );
}

export default App;
