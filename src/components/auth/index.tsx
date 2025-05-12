import { Box } from '@mui/material';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AppErrors } from '../../common/errors';
import { login } from '../../store/slice/auth';
import { instance } from '../../utils/axios';
import { useAppDispatch } from '../../utils/hook';
import LoginPage from './login';
import RegisterPage from './register';
import './style.scss';

const AuthRootComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [reapetPassword, setRepeatPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [userName, setUserName] = useState('');
  const location = useLocation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (location.pathname === '/login') {
      try {
        const userData = {
          email,
          password,
        };
        const user = await instance.post('/auth/login', userData);
        dispatch(login(user.data));
        navigate('/');
      } catch (error) {
        return error;
      }
    } else if (location.pathname === '/register') {
      if (password === reapetPassword) {
        try {
          const userData = {
            firstName,
            userName,
            email,
            password,
          };
          const newUser = await instance.post('/auth/register', userData);
          dispatch(login(newUser.data));
          navigate('/');
        } catch (error) {
          console.log(error);
          return error;
        }
      } else {
        throw new Error(AppErrors.PASSWORD_NOT_MATCH);
      }
    }
  };

  return (
    <div className="root">
      <form className="form" onSubmit={handleSubmit}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          max-width={640}
          margin="auto"
          padding={5}
          borderRadius={5}
          boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
        >
          {location.pathname === '/login' ? (
            <LoginPage navigate={navigate} setEmail={setEmail} setPassword={setPassword} />
          ) : location.pathname === '/register' ? (
            <RegisterPage
              navigate={navigate}
              setEmail={setEmail}
              setPassword={setPassword}
              setRepeatPassword={setRepeatPassword}
              setFirstName={setFirstName}
              setUserName={setUserName}
            />
          ) : null}
        </Box>
      </form>
    </div>
  );
};

export default AuthRootComponent;
