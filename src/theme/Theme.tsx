// react
import React, { PropsWithChildren } from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';

interface Props extends PropsWithChildren<{}> {}

const theme: DefaultTheme = {
  colors: {
    white: '#FFFFFF',
    black: '#000000',
    primary: '#1E74DF',
    success: '#07BC0C',
    grey: '#545454',
    lightGrey: '#4c4c4c',
  },
};

const Theme = (props: Props) => {
  const { children } = props;

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
