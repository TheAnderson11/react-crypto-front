import { Button, TextField, Typography } from '@mui/material';
import { IPropsLogin } from '../../../common/types/auth';

const LoginPage = (props: IPropsLogin) => {
  const { setEmail, setPassword, navigate } = props;
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
