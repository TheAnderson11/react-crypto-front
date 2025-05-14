import { Button, TextField, Typography } from '@mui/material';
import { IPropsAuth } from '../../../common/types/auth';

const RegisterPage = (props: IPropsAuth) => {
  const { navigate, register, errors } = props;
  return (
    <>
      <Typography variant="h2" fontFamily="Poppins" textAlign={'center'}>
        Registration
      </Typography>
      <Typography variant="body1" marginBottom={3} fontFamily="Poppins" textAlign={'center'}>
        Enter your registration details
      </Typography>
      <TextField
        fullWidth={true}
        margin="normal"
        label="FirstName"
        variant="outlined"
        placeholder="write your username"
        helperText={errors.firstName ? `${errors.firstName.message}` : ''}
        error={!!errors.firstName}
        {...register('firstName')}
      />
      <TextField
        fullWidth={true}
        margin="normal"
        label="UserName"
        variant="outlined"
        placeholder="write your name"
        helperText={errors.userName ? `${errors.userName.message}` : ''}
        error={!!errors.userName}
        {...register('userName')}
      />
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
      <TextField
        fullWidth={true}
        margin="normal"
        label="ReapetPassword"
        variant="outlined"
        type="password"
        placeholder="repeat your password again"
        helperText={errors.repeatPassword ? `${errors.repeatPassword.message}` : ''}
        error={!!errors.repeatPassword}
        {...register('repeatPassword')}
      />
      <Button
        variant="contained"
        type="submit"
        sx={{ fontFamily: 'Poppins', marginTop: 2, marginBottom: 2, width: '70%' }}
      >
        Registration
      </Button>
      <Typography variant="body1" sx={{ fontFamily: 'Poppins' }}>
        Do you have an account?
        <span className="incitingText" onClick={() => navigate('/login')}>
          Authorization
        </span>
      </Typography>
    </>
  );
};

export default RegisterPage;
