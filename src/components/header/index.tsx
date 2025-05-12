import { DarkMode, LightMode, MenuOutlined, NotificationsNone, Search } from '@mui/icons-material';
import {
  AppBar,
  Box,
  Grid,
  IconButton,
  InputBase,
  Toolbar,
  Typography,
  useTheme,
} from '@mui/material';
import { useContext, useMemo } from 'react';
import { ColorModeContext, tokens } from '../../theme';
import { useAppSelector } from '../../utils/hook';
import FlexBetween from '../flex-between';
import { useStyles } from './styles';

const HeaderComponent = (props: any) => {
  const { isOpen, setIsOpen } = props;
  const authState = useAppSelector(state => state.auth.user);
  const theme = useTheme();
  const colors = useMemo(() => tokens(theme.palette.mode), [theme.palette.mode]);
  const colorMode = useContext(ColorModeContext);
  const classes = useStyles(colors);

  return (
    <AppBar sx={classes.root}>
      <Toolbar sx={classes.toolbar}>
        <FlexBetween>
          <MenuOutlined sx={classes.menuIcon} onClick={() => setIsOpen(!isOpen)} />
          <Typography variant="h3">Welcome Alex</Typography>
        </FlexBetween>
        <Box display="flex">
          <Grid sx={classes.iconPosition}>
            <IconButton onClick={colorMode.toggleColorMode} sx={classes.themeIcon}>
              {theme.palette.mode === 'dark' ? <DarkMode /> : <LightMode />}
            </IconButton>
            <IconButton>
              <NotificationsNone />
            </IconButton>
          </Grid>
          <Grid sx={classes.searchRoot}>
            <InputBase placeholder="Search" sx={classes.searchInput} />
            <IconButton sx={classes.searchHover}>
              <Search />
            </IconButton>
          </Grid>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderComponent;
