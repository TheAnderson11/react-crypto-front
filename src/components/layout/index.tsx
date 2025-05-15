import { ChevronLeftOutlined } from '@mui/icons-material';
import { Box, IconButton, useMediaQuery } from '@mui/material';
import { useEffect, useState } from 'react';
import { ILayout } from '../../common/interfaces/layout';
import HeaderComponent from '../header';
import SideBarComponent from '../sidebar';
import { useStyles } from './style';

const LayoutComponent = ({ children }: ILayout) => {
  const [isOpen, setIsOpen] = useState(false);

  const isNonMobile = useMediaQuery('(min-width:600px)');
  const classes = useStyles(isNonMobile);

  useEffect(() => {
    if (!isNonMobile) setIsOpen(false);
  }, [isNonMobile]);

  return (
    <Box sx={classes.layoutWrapper}>
      {!isNonMobile && (
        <IconButton onClick={() => setIsOpen(!isOpen)}>
          <ChevronLeftOutlined />
        </IconButton>
      )}
      <SideBarComponent
        isNonMobile={isNonMobile}
        drawerWidth={250}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <Box sx={classes.layoutItems}>
        <HeaderComponent isOpen={isOpen} setIsOpen={setIsOpen} />
        {children}
      </Box>
    </Box>
  );
};

export default LayoutComponent;
