import { yupResolver } from '@hookform/resolvers/yup';
import { Box } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import { IPropsAuth } from '../../common/interfaces/auth';
import { login } from '../../store/slice/auth';
import { instance } from '../../utils/axios';
import { useAppDispatch } from '../../utils/hook';
import { loginSchema, registerSchema } from '../../utils/yup';
import LoginPage from './login';
import RegisterPage from './register';
import { useStyles } from './styles';

const AuthRootComponent = () => {

  const classes = useStyles();
  const location = useLocation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const schema = location.pathname === '/login' ? loginSchema : registerSchema;
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IPropsAuth>({
    resolver: yupResolver(schema),
  });

  const handleSubmitForm = async (data: IPropsAuth) => {
    if (location.pathname === '/login') {
      try {
        const userData = {
          email: data.email,
          password: data.password,
        };
        const user = await instance.post('/auth/login', userData);
        dispatch(login(user.data));
        navigate('/');
      } catch (error) {
        console.log(error);
        return error;
      }
    } else if (location.pathname === '/register') {
      try {
        const userData = {
          firstName: data.firstName,
          userName: data.userName,
          email: data.email,
          password: data.password,
        };
        const newUser = await instance.post('/auth/register', userData);
        dispatch(login(newUser.data));
        navigate('/');
      } catch (error) {
        console.log(error);
        return error;
      }
    }
  };

  return (
    <Box sx={classes.root}>
      <Box sx={classes.form} component="form" onSubmit={handleSubmit(handleSubmitForm)}>
        <Box sx={classes.description}>
          {location.pathname === '/login' ? (
            <LoginPage navigate={navigate} register={register} errors={errors} />
          ) : location.pathname === '/register' ? (
            <RegisterPage navigate={navigate} register={register} errors={errors} />
          ) : null}
        </Box>
      </Box>
    </Box>
  );
};

export default AuthRootComponent;
