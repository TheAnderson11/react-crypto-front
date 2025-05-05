import { CssBaseline, ThemeProvider } from '@mui/material';
import Home from './components/home';
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
            <Home />
          </LayoutComponent>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
};

export default App;
