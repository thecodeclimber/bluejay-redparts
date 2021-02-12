// react
import React, { PropsWithChildren } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../../theme';

interface Props extends PropsWithChildren<{}> {}

const Theme = (props: Props) => {
  const { children } = props;

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
