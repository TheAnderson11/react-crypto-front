import { tokens } from '../../theme';

type Colors = ReturnType<typeof tokens>;

export const useStyles = (colors: Colors) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '32px 24px',
    backgroundColor: colors.primary.DEFAULT,
    borderBottom: `1px solid ${colors.borderColor}`,
    maxHeight: '95px',
  },
  iconPosition: {
    paddingRight: '37px',
    borderRight: `1px solid ${colors.borderColor}`,
  },
  themeIcon: { marginRight: '45px' },
  searchRoot: {
    display: 'flex',
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
