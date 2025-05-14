import { Button, TextField, Typography } from '@mui/material';
import { IPropsAuth } from '../../../common/types/auth';

const LoginPage = (props: IPropsAuth) => {
  const { navigate, register, errors } = props;
  return (
    <>
      <Typography variant="h2" fontFamily="Poppins" textAlign={'center'}>
        Authorization
      </Typography>
      <Typography variant="body1" marginBottom={3} fontFamily="Poppins" textAlign={'center'}>
        Write your e-mail and password
      </Typography>
      <TextField
        fullWidth={true}
        margin="normal"
        label="E-mail"
        variant="outlined"
        placeholder="write your email address"
        helperText={errors.email ? `${errors.email.message}` : ''}
        error={!!errors.email}
        {...register('email')}
      />
      <TextField
        fullWidth={true}
        margin="normal"
        label="Password"
        variant="outlined"
        type="password"
        placeholder="write your password"
        helperText={errors.password ? `${errors.password.message}` : ''}
        error={!!errors.password}
        {...register('password')}
      />
      <Button
        variant="contained"
        type="submit"
        sx={{ fontFamily: 'Poppins', marginTop: 2, marginBottom: 2, width: '70%' }}
      >
        Login
      </Button>
      <Typography variant="body1" sx={{ fontFamily: 'Poppins' }}>
        Do you don't have an account?
        <span className="incitingText" onClick={() => navigate('/register')}>
          Registration
        </span>
      </Typography>
    </>
  );
};

export default LoginPage;
