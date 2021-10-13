import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

const TIMEOUT = 5000;
let authIntervalTimer = null;

export const useAuth = () => {
  const dispatch = useDispatch();
  const [authTime, setAuthTime] = useState(null);

  // Get user fetch
  const getUser = useCallback(() => {
    const token = localStorage.getItem('auth_token');
    if (token) {
      const fetchObj = {
        method: 'GET',
        headers: {
          'Auth-Token': token,
          'Content-Type': 'application/json',
        },
      }

      fetch('http://localhost:3000/get-user-by-token', fetchObj)
        .then(res => res.json())
        .then(data => {
          if (data.user) {
            dispatch({ type: 'SET_USER', user: data.user });
            setAuthTime(new Date(data.user.last_logged_in).getTime());
          }
          else if (data.message) {
            console.log(data.message);
          }
          else {
            console.error('Sorry there was an error with the request');
          }
        })
        .catch(err => console.error('Sorry there was an error with that request', err));
    }
  }, [dispatch]);

  // useEffect to load user on initial load (runs one time when hook is initialized)
  useEffect(() => {
    getUser();
  }, [getUser])

  // Function to use to log in user (exported from hook)
  const loginUser = useCallback((username, password) => {
    const userObj = {
      user: {
        username,
        password,
      }
    }
  
    const fetchObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userObj)
    }
  
    fetch(`http://localhost:3000/login`, fetchObj)
      .then(res => res.json())
      .then(data => {
        if (data.token) {
          localStorage.setItem('auth_token', data.token);
          setAuthTime(new Date(data.user.last_logged_in).getTime());
          dispatch({ type: 'SET_USER', user: data.user })
        }
        else {
          localStorage.removeItem('auth_token');
          dispatch({ type: 'SET_USER', user: {} })
          alert(data.message);
        }
      })
      .catch(() => {
        localStorage.removeItem('auth_token');
        alert('Something went wrong');
      });
  }, [dispatch]);

  // Function to use to log out user (exported from hook)
  const logoutUser = useCallback(() => {
    localStorage.clear('auth-token');
    dispatch({ type: 'SET_USER', user: {} })
  }, [dispatch]);

  // Interval hook to continuously check timeout vs last signed in time.
  useEffect(() => {
    if (authIntervalTimer) {
      clearInterval(authIntervalTimer);
    }

    authIntervalTimer = setInterval(() => {
      if (authTime && (Date.now() > authTime + TIMEOUT)) {
        setAuthTime(null);
        logoutUser();
      }
    }, 1000);

    return () => clearInterval(authIntervalTimer);
  }, [authTime, logoutUser]);

  return { loginUser, logoutUser}
};
