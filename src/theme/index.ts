import { createTheme, PaletteMode, Theme, ThemeOptions } from '@mui/material';
import { createContext, useMemo, useState } from 'react';

export const tokens = (mode: PaletteMode) => ({
  ...(mode === 'dark'
    ? {
        primary: {
          DEFAULT: '#000000',
          100: '#000000',
          200: '#000000',
          300: '#000000',
          400: '#000000',
          500: '#0F0E0E',
          600: '#232323',
          700: '#3D3D3D',
          800: '#525252',
          900: '#5C5C5C',
        },
        secondary: {
          DEFAULT: '#7C7C7C',
        },
        black: {
          DEFAULT: '#000000',
          100: '#000000',
          200: '#000000',
          300: '#000000',
          400: '#000000',
          500: '#0F0E0E',
          600: '#292929',
          700: '#3D3D3D',
          800: '#525252',
          900: '#5C5C5C',
        },
        white: {
          DEFAULT: '#FFFFFF',
          100: '#F7F7F7',
        },
        gray: {
          DEFAULT: '#3C3C3C',
        },
        accentMain: '#0F0E0E',
        borderColor: '#3C3C3C',
        blue: '#1900D5',
      }
    : {
        white: {
          DEFAULT: '#FFFFFF',
          100: '#F7F7F7',
          200: '#D1D1D1',
        },
        primary: {
          DEFAULT: '#FFFFFF',
          500: '#F7F7F7',
        },
        secondary: {
          DEFAULT: '#7C7C7C',
        },
        black: {
          DEFAULT: '#000000',
          100: '#525252',
          200: '#3D3D3D',
          300: '#292929',
          400: '#141414',
          500: '#000000',
          600: '#000000',
          700: '#000000',
          800: '#000000',
          900: '#000000',
        },
        gray: {
          DEFAULT: '#3C3C3C',
        },
        accentMain: '#F7F7F7',
        borderColor: '#D1D1D1',
        blue: '#1900D5',
      }),
});

export const themeSettings = (mode: PaletteMode): ThemeOptions => {
  const colors = tokens(mode);
  return {
    palette: {
      mode,
      ...(mode === 'dark'
        ? {
            primary: {
              main: colors.black.DEFAULT,
            },
            secondary: {
              main: colors.secondary.DEFAULT,
            },
            neutral: {
              dark: colors.accentMain,
              light: colors.white[100],
            },
          }
        : {
            primary: {
              main: colors.white.DEFAULT,
            },
            secondary: {
              main: colors.secondary.DEFAULT,
            },
            neutral: {
              dark: colors.accentMain,
              light: colors.white[100],
            },
          }),
    },
    typography: {
      fontFamily: ['Poppins', 'sans-serif'].join(','),
      fontSize: 14,
      h1: {
        fontSize: 28,
        fontWeight: 600,
      },
      h2: {
        fontSize: 20,
        fontWeight: 600,
      },
      h3: {
        fontSize: 18,
        fontWeight: 600,
      },
      body1: {
        fontSize: 14,
        fontWeight: 500,
      },
    },
  };
};

interface ColorModeContextType {
  toggleColorMode: () => void;
}

export const ColorModeContext = createContext<ColorModeContextType>({
  toggleColorMode: () => {},
});

export const useMode = (): [Theme, ColorModeContextType] => {
  const [mode, setMode] = useState<PaletteMode>('dark');

  const colorMode = useMemo<ColorModeContextType>(
    () => ({
      toggleColorMode: () => setMode(prev => (prev === 'light' ? 'dark' : 'light')),
    }),
    [],
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return [theme, colorMode];
};
