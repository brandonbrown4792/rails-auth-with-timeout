import React from 'react';
import { AuthContext } from '../utils/context';

import { useAuth } from '../utils/useAuth';
import LoginForm from './LoginForm';
import UserInformation from './UserInfo';

function App() {
  const { loginUser, logoutUser } = useAuth();

  // Map auth functions to an object to pass into auth context
  const authContextObj = {
    loginUser: loginUser,
    logoutUser: logoutUser,
  }

  return (
    <AuthContext.Provider value={authContextObj}>
      <div style={{ margin: '100px 0'}}>
        <LoginForm />
        <UserInformation />
      </div>
    </AuthContext.Provider>
  );
}

export default App;
