import React, { PropsWithChildren } from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';

interface Props extends PropsWithChildren<{}> {}

const theme: DefaultTheme = {
  colors: {
    white: '#FFFFFF',
    black: '#000000',
    dark: '#333',
    primary: '#1E74DF',
    success: '#07BC0C',
    grey: '#545454',
    lightGrey: '#4c4c4c',
    selectbgcolor: '#fff',
    selectfontcolor: '#262626',
    selectarrowcolor: '#4d4d4d',
    selectdisabledfontcolor: '#999',
  },
  headers: {
    h1: {
      fontSize: '40px',
      fontFamily: null,
      fontWeight: 500,
      fontStyle: null,
    },
    h2: {
      fontSize: '32px',
      fontFamily: null,
      fontWeight: 500,
      fontStyle: null,
    },
    h3: {
      fontSize: '28px',
      fontFamily: null,
      fontWeight: 500,
      fontStyle: null,
    },
    h4: {
      fontSize: '24px',
      fontFamily: null,
      fontWeight: 500,
      fontStyle: null,
    },
    h5: {
      fontSize: '20px',
      fontFamily: null,
      fontWeight: 500,
      fontStyle: null,
    },
    h6: {
      fontSize: '16px',
      fontFamily: null,
      fontWeight: 500,
      fontStyle: null,
    },
  },
  fontWeight: {
    light: 300,
    normal: 400,
    medium: 500,
    bold: 600,
    bolder: 700,
  },
  breakPoints: {
    xs: 480,
    sm: 768,
    md: 992,
    lg: 1200,
  },
  boxShadow:{
    blockFinderShadow:  '0 1px 3px rgba(#000, .2)'
  }
};

const Theme = (props: Props) => {
  const { children } = props;

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
