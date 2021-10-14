import React, { createContext } from 'react';
import { useAuth } from '../utils/useAuth';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const { loginUser, logoutUser } = useAuth();
  
  // Map auth functions to an object to pass into auth context
  const authContextObj = {
    loginUser: loginUser,
    logoutUser: logoutUser,
  };

  return (
    <AuthContext.Provider value={authContextObj}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;