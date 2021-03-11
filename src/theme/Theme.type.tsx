import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      white: string;
      black: string;
      primary: string;
      success: string;
      grey: string;
      lightGrey: string;
      selectbgcolor: string;
      selectfontcolor: string;
      selectarrowcolor: string;
      selectdisabledfontcolor: string;
      widgetsearchbuttoncolor: string;
      widgetsearchbuttonhovercolor: string;
      widgetsearchbuttonhoverbgcolor: string;
      widgetsearchbuttonactivebgcolor: string;
      widgetproductimagebordercolor:string;
      widgetnewsletterbgcolor:string;
      widgetnewslettertextcolor:string;
      widgetanchorhovercolor: string;
      widgetauthorbordercolor: string;
      plusiconcolor:string;
      cardbgcolor:string;
      widgetchildbgcolor:string;
      facebook: string;
      twitter: string;
      youtube: string;
      instagram: string;
      rss: string;
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
      xs: number;
      sm: number;
      md: number;
      lg: number;
    };
  }
}
