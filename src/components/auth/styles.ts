import { tokens } from '../../theme';

type Colors = ReturnType<typeof tokens>;

export const useStyles = (colors: Colors) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
    height: '100vh',
    padding: '20px',
  },
  form: {
    flex: 1,
  },
  description: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    maxWidth: 640,
    margin: 'auto',
    padding: 5,
    borderRadius: 5,
    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
  },

});
