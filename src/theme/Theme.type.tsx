import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface Theme {
    colors: {
      white: string;
      black: string;
      primary: string;
      link: string;
      success: string;
      grey: string;
      lightGrey: string;
      selectbgcolor: string;
      selectfontcolor: string;
      selectarrowcolor: string;
      selectdisabledfontcolor: string;
      blockBrandsItemName: string;
    };
    headers: {
      h1: {
        fontSize: string;
        fontFamily: any;
        fontWeight: number;
        fontStyle: any;
      };
      h2: {
        fontSize: string;
        fontFamily: any;
        fontWeight: number;
        fontStyle: any;
      };
      h3: {
        fontSize: string;
        fontFamily: any;
        fontWeight: number;
        fontStyle: any;
      };
      h4: {
        fontSize: string;
        fontFamily: any;
        fontWeight: number;
        fontStyle: any;
      };
      h5: {
        fontSize: string;
        fontFamily: any;
        fontWeight: number;
        fontStyle: any;
      };
      h6: {
        fontSize: string;
        fontFamily: any;
        fontWeight: number;
        fontStyle: any;
      };
    };
    fontWeight: {
      light: number;
      normal: number;
      medium: number;
      bold: number;
      bolder: number;
    };
    breakPoints: {
      xs: any,
      sm: any,
      md: any,
      lg: any,
      xl: any
    },
  }
}
