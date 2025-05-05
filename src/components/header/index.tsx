import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SearchIcon from '@mui/icons-material/Search';
import { Box, Grid, IconButton, InputBase, useTheme } from '@mui/material';
import { useContext } from 'react';
import { ColorModeContext, tokens } from '../../theme';
import { useAppSelector } from '../../utils/hook';
import { useStyles } from './styles';

const HeaderComponent = () => {
  const user = useAppSelector(state => state.auth.user);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const classes = useStyles();

  return (
    <Box display="flex" justifyContent="space-between" px="32px" py="24px">
      <Grid>Welcome {user.userName}</Grid>
      <Box display="flex">
        <Grid
          onClick={colorMode.toggleColorMode}
          sx={{ pr: '37px', borderRight: `1px solid ${colors.gray.DEFAULT}` }}
        >
          <IconButton sx={{ mr: '45px' }}>
            {theme.palette.mode === 'dark' ? <DarkModeIcon /> : <LightModeIcon />}
          </IconButton>
          <IconButton>
            <NotificationsNoneIcon />
          </IconButton>
        </Grid>
        <Grid
          sx={{
            display: 'flex',
            ml: '28px',
            borderRadius: '9px',
            backgroundColor: colors.primary[600],
          }}
        >
          <InputBase placeholder="Search" sx={{ px: '18px', py: '12px' }} />
          <IconButton className={classes.root}>
            <SearchIcon />
          </IconButton>
        </Grid>
      </Box>
    </Box>
  );
};

export default HeaderComponent;
