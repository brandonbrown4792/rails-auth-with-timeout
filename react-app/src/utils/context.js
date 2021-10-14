import { createContext } from 'react';

export const AuthContext = createContext({
  loginUser: null,
  logoutUser: null,
});