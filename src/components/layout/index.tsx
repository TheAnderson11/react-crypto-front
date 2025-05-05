import { Box, useMediaQuery } from '@mui/material';
import json2mq from 'json2mq';
import { useState } from 'react';
import { ILayout } from '../../common/types/layout';
import HeaderComponent from '../header';
import SideBarComponent from '../sidebar';

const LayoutComponent = ({ children }: ILayout) => {
  const [isOpen, setIsOpen] = useState(true);
  const isNonMobile = useMediaQuery(
    json2mq({
      minWidth: 600,
    }),
  );
  return (
    <Box display={isNonMobile ? 'flex' : 'block'} width="100%" height="100%">
      <SideBarComponent
        isNonMobile={isNonMobile}
        drawerWidth="250"
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <Box>
        <HeaderComponent />
        {children}
      </Box>
    </Box>
  );
};

export default LayoutComponent;
