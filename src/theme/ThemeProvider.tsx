import React, { FC } from 'react';
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';

import ThemeConfig from './ThemeConfig';

const theme = createTheme(ThemeConfig);

const ThemeProvider: FC = ({ children }) => {
  return (
    <MuiThemeProvider theme={theme}>
      {children}
    </MuiThemeProvider>
  );
};

export default ThemeProvider;

