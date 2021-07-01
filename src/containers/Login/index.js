import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuthContext } from '../../context/authContext';
import Login from '../../pages/Login';

const LoginContainer = () => {
  const history = useHistory();
  const { user } = useAuthContext();

  useEffect(() => {
    if (user.isAuthenticated) {
      history.push('/dashboard');
    }
  }, [user.isAuthenticated]);

  return (
    <>
      <Login />
    </>
  );
};

export default LoginContainer;
