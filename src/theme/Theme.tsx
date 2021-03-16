import React, { PropsWithChildren } from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';

interface Props extends PropsWithChildren<{}> {}

const theme: DefaultTheme = {
  colors: {
    white: '#FFFFFF',
    black: '#000000',
    dark: '#333',
    primary: '#1E74DF',
    link: '#007bff',
    success: '#07BC0C',
    grey: '#545454',
    lightGrey: '#4c4c4c',
    selectbgcolor: '#fff',
    selectfontcolor: '#262626',
    selectarrowcolor: '#4d4d4d',
    selectdisabledfontcolor: '#999',
    blockcategoriesbgcolor:'#f6f6f6',
    blockcategoriesbodycolor: '#00000014',
    linkcolor:'#007bff',
    listcolor:'#6c757d',
    blockBrandDivider: '#ebebeb',
    blockBrandHoverFontColor:'#737373',
    blockBrandsItemName: '#b3b3b3',
    tagBgColor: '#f2f2f2',
    tagBgHoverColor: '#e5e5e5',
    tagBgActiveColor: '#d9d9d9',
    widgetsearchbuttoncolor: '#bfbfbf',
    widgetsearchbuttonhovercolor: '#a6a6a6',
    widgetsearchbuttonhoverbgcolor: '#f5f5f5',
    widgetsearchbuttonactivebgcolor: '#f0f0f0',
    widgetproductimagebordercolor:'#00000014',
    widgetnewsletterbgcolor:'#333',
    widgetnewslettertextcolor: '#9e9e9e',
    widgetanchorhovercolor: '#007bff',
    widgetauthorbordercolor: '#ebebeb',
    blockbanneritemtitlecolor:'#ffdf40',
    plusiconcolor:'#ccc',
    cardbgcolor:'#f2f2f2',
    widgetchildbgcolor:'#f5f5f5',
    facebook:'#3c5a99',
    twitter:'#00a2e8',
    youtube:'#e52e2e',
    instagram:'#815dc7',
    rss:'#ffc338'
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
    xl: 1400,
  },
  background : {
   blockbanneritemlineargradient: 'linear-gradient(to right,rgba(26, 26, 26, 0.98) 25%,rgba(26, 26, 26, 0) 90%)',
   blockbanneritemmobilelineargradient: 'linear-gradient(to right, rgba(26, 26, 26, 0.98) 35%,rgba(26, 26, 26, 0) 100%)',
  },
   boxShadow:{
    blockFinderTextShadow:  '0 1px 3px rgba(#000, .2)'
  }
};

const Theme = (props: Props) => {
  const { children } = props;

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
