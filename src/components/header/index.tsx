import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SearchIcon from '@mui/icons-material/Search';
import { Box, Grid, IconButton, InputBase, useTheme } from '@mui/material';
import { useContext, useMemo } from 'react';
import { ColorModeContext, tokens } from '../../theme';
import { useAppSelector } from '../../utils/hook';
import { useStyles } from './styles';

const HeaderComponent = () => {
  const authState = useAppSelector(state => state.auth.user);
  const theme = useTheme();
  const colors = useMemo(() => tokens(theme.palette.mode), [theme.palette.mode]);
  const colorMode = useContext(ColorModeContext);
  const classes = useStyles(colors);
  console.log(authState);

  return (
    <Box sx={classes.root}>
      <Grid>{authState.firstName ? `Welcome ${authState.firstName}` : 'Загрузка...'}</Grid>
      <Box display="flex">
        <Grid sx={classes.iconPosition}>
          <IconButton onClick={colorMode.toggleColorMode} sx={classes.themeIcon}>
            {theme.palette.mode === 'dark' ? <DarkModeIcon /> : <LightModeIcon />}
          </IconButton>
          <IconButton>
            <NotificationsNoneIcon />
          </IconButton>
        </Grid>
        <Grid sx={classes.searchRoot}>
          <InputBase placeholder="Search" sx={classes.searchInput} />
          <IconButton sx={classes.searchHover}>
            <SearchIcon />
          </IconButton>
        </Grid>
      </Box>
    </Box>
  );
};

export default HeaderComponent;
