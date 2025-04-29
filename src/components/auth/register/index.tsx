import { Button, TextField, Typography } from '@mui/material';
import React, { JSX } from 'react';
import { IPropsRegister } from '../../../common/types/auth';

const RegisterPage: React.FC<IPropsRegister> = (props: IPropsRegister): JSX.Element => {
  const { setEmail, setPassword, setRepeatPassword, setFirstName, setUserName, navigate } = props;
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
        label="Name"
        onChange={e => setFirstName(e.target.value)}
        variant="outlined"
        placeholder="write your name"
      />
      <TextField
        fullWidth={true}
        margin="normal"
        label="UserName"
        onChange={e => setUserName(e.target.value)}
        variant="outlined"
        placeholder="write your username"
      />
      <TextField
        fullWidth={true}
        margin="normal"
        label="E-mail"
        onChange={e => setEmail(e.target.value)}
        variant="outlined"
        placeholder="write your email address"
      />
      <TextField
        fullWidth={true}
        margin="normal"
        label="Password"
        onChange={e => setPassword(e.target.value)}
        variant="outlined"
        type="password"
        placeholder="write your password"
      />
      <TextField
        fullWidth={true}
        margin="normal"
        label="Password"
        onChange={e => setRepeatPassword(e.target.value)}
        variant="outlined"
        type="password"
        placeholder="repeat your password again"
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
