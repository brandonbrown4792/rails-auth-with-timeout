import React from 'react';

import AuthProvider from '../Context/AuthContext';
import LoginForm from './LoginForm';
import UserInformation from './UserInfo';

function App() {
  return (
    <AuthProvider>
      <div style={{ margin: '100px 0'}}>
        <LoginForm />
        <UserInformation />
      </div>
    </AuthProvider>
  );
}

export default App;
