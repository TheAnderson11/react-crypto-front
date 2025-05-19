import { Box, TextField, Typography, useTheme } from '@mui/material';
import { useMemo } from 'react';
import { IPropsAuth } from '../../../common/interfaces/auth';
import { tokens } from '../../../theme';
import AppButton from '../../app-button';

const RegisterPage = (props: IPropsAuth) => {
  const { navigate, register, errors } = props;
  const theme = useTheme();
  const colors = useMemo(() => tokens(theme.palette.mode), [theme.palette.mode]);
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
      <AppButton variant="contained" type="submit">
        Registration
      </AppButton>
      <Typography variant="body1" sx={{ fontFamily: 'Poppins' }}>
        Do you have an account?
        <Box
          component="span"
          sx={{
            color: colors.black[900],
            marginLeft: '10px',
            cursor: 'pointer',
          }}
          onClick={() => navigate('/login')}
        >
          Authorization
        </Box>
      </Typography>
    </>
  );
};

export default RegisterPage;
