import { yupResolver } from '@hookform/resolvers/yup';
import { Box } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import { ILoginForm, IRegisterForm } from '../../common/types/auth';
import { login } from '../../store/slice/auth';
import { instance } from '../../utils/axios';
import { useAppDispatch } from '../../utils/hook';
import { loginSchema, registerSchema } from '../../utils/yup';
import LoginPage from './login';
import RegisterPage from './register';
import './style.scss';

const schema = location.pathname === '/login' ? loginSchema : registerSchema;
const AuthRootComponent = () => {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<ILoginForm | IRegisterForm>({
    resolver: yupResolver(schema),
  });

  const handleSubmitForm = async (data: any) => {
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
    <div className="root">
      <form className="form" onSubmit={handleSubmit(handleSubmitForm)}>
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
            <LoginPage navigate={navigate} register={register} errors={errors} />
          ) : location.pathname === '/register' ? (
            <RegisterPage navigate={navigate} register={register} errors={errors} />
          ) : null}
        </Box>
      </form>
    </div>
  );
};

export default AuthRootComponent;
