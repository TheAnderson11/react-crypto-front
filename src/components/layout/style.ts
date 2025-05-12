export const useStyles = (isNonMobile: boolean) => ({
  layoutWrapper: {
    display: `${isNonMobile ? 'flex' : 'block'}`,
    justifyContent: 'space-between',
    width: '100%',
    height: '100%',
  },
  layoutItems: {
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
});
