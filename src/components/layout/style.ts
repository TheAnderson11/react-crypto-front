export const useStyles = (isNonMobile: boolean) => ({
  layoutWrapper: {
    display: `${isNonMobile ? 'flex' : 'block'}`,
    justifyContent: 'space-between',
    width: '100%',
    height: '100%',
  },
  layoutItems: {
    display: 'flex',
    width: isNonMobile ? 'calc(100% - 250px)' : '100%',
    flexDirection: 'column',
    justifyContent: 'center',
  },
});
