import { CssBaseline, ThemeProvider } from '@mui/material';
import { Outlet } from 'react-router-dom';
import LayoutComponent from './components/layout';
import { ColorModeContext, useMode } from './theme';

const App = () => {
  const [theme, colorMode] = useMode();

  return (
    <>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <LayoutComponent>
            <Outlet />
          </LayoutComponent>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
};

export default App;
