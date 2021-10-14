import React from 'react';
import { SnackbarProvider } from 'notistack';

import AuthProvider from '../Contexts/AuthProvider';
import LoginForm from './LoginForm';
import UserInformation from './UserInfo';

function App() {
  return (
    <SnackbarProvider>
      <AuthProvider>
        <div style={{ margin: '100px 0'}}>
          <LoginForm />
          <UserInformation />
        </div>
      </AuthProvider>
    </SnackbarProvider>
  );
}

export default App;
