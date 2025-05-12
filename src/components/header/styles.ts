import { tokens } from '../../theme';

type Colors = ReturnType<typeof tokens>;

export const useStyles = (colors: Colors) => ({
  root: {
    position: 'static',
    background: `${colors.primary.DEFAULT} !important`,
    borderBottom: `1px solid ${colors.borderColor}`,
    boxShadow: 'none',
  },
  toolbar: {
    justifyContent: 'space-between',
    padding: '25px 45px',
  },
  menuIcon: {
    marginRight: '10px',
    cursor: 'pointer',
  },
  iconPosition: {
    paddingRight: '37px',
    borderRight: `1px solid ${colors.borderColor}`,
  },
  themeIcon: { marginRight: '45px' },
  searchRoot: {
    display: 'flex',
    maxHeight: '45px',
    marginLeft: '28px',
    borderRadius: '9px',
    backgroundColor: colors.primary[600],
  },
  searchInput: { padding: '12px 18px' },
  searchHover: {
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
});
