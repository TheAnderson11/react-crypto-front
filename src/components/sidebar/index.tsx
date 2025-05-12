import { useLocation, useNavigate } from 'react-router-dom';
/* import {
  ,
  SettingsOutlined, MenuBookOutlined,
  AutoGraphOutlined, HomeOutlined, ChevronLeftOutlined,
  ChevronRightOutlined
} from '@mui/icons-material'; */
import { LogoutOutlined } from '@mui/icons-material';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from '@mui/material';
import { useEffect, useMemo, useState } from 'react';
import logo from '../../assets/images/sidebar/logo.svg';
import { navMenu } from '../../common/moks/navigate';
import { tokens } from '../../theme';
import FlexBetween from '../flex-between';
import { useStyles } from './styles';

const SideBarComponent = ({ ...props }) => {
  const { drawerWidth, isOpen, setIsOpen } = props;
  const { pathname } = useLocation();
  const [active, setActive] = useState('');
  const navigate = useNavigate();
  const theme = useTheme();
  const colors = useMemo(() => tokens(theme.palette.mode), [theme.palette.mode]);
  const classes = useStyles(colors, drawerWidth);

  useEffect(() => {
    setActive(pathname.substring(1));
  }, [pathname]);

  return (
    <Box component="nav">
      {isOpen && (
        <Drawer
          open={isOpen}
          onClose={() => setIsOpen(false)}
          variant="persistent"
          anchor="left"
          sx={classes.drawer}
        >
          <Box sx={classes.navBlock}>
            <Box>
              <FlexBetween>
                <Box sx={classes.brand}>
                  <img src={logo} alt="Logo image" />
                  <Typography
                    variant="h1"
                    color={
                      theme.palette.mode === 'dark' ? colors.white.DEFAULT : colors.black.DEFAULT
                    }
                  >
                    Demo
                  </Typography>
                </Box>
              </FlexBetween>
            </Box>
            <List sx={classes.listStyle}>
              {navMenu.map(items => (
                <ListItem key={items.id}>
                  <ListItemButton
                    onClick={() => navigate(`${items.path}`)}
                    sx={{
                      ...classes.navItem,
                      backgroundColor: active === items.path ? colors.blue : '',
                      color: active === items.path ? colors.white.DEFAULT : '',
                      '& .MuiSvgIcon-root': {
                        color: active === items.path ? `${colors.white.DEFAULT} !important` : '',
                      },
                      '&:hover .MuiSvgIcon-root': {
                        color: colors.white.DEFAULT,
                      },
                    }}
                  >
                    <ListItemIcon>{items.icon}</ListItemIcon>
                    <ListItemText>
                      <Typography variant="body1">{items.name}</Typography>
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
          <Box sx={classes.boxStyleSecond}>
            <List>
              <ListItem>
                <ListItemButton sx={classes.navItem}>
                  <ListItemIcon>
                    <LogoutOutlined />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography>Logout</Typography>
                  </ListItemText>
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        </Drawer>
      )}
    </Box>
  );
};

export default SideBarComponent;
