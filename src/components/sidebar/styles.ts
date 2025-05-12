import { tokens } from '../../theme';

type Colors = ReturnType<typeof tokens>;

export const useStyles = (colors: Colors, drawerWidth: number) => ({
  drawer: {
    width: drawerWidth,
    '& .MuiDrawer-paper': {
      color: colors.secondary.DEFAULT,
      backgroundColor: colors.primary.DEFAULT,
      boxSizing: 'border-box',
      width: drawerWidth,
    },
  },
  brand: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    padding: '30px 15px',
    cursor: 'pointer',
  },
  navItem: {
    '&:hover': {
      backgroundColor: '#1900D5',
      color: '#fff',
      borderRadius: '4px',
    },
  },

  navBlock: {
    width: '100%',
    borderBottom: `1px solid ${colors.borderColor}`,
  },
  listStyle: {
    marginBottom: '55px',
  },
  boxStyleSecond: {
    width: '100%',
  },
});
