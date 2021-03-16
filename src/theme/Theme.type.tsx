import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      white: string;
      black: string;
      dark: string;
      primary: string;
      link: string;
      success: string;
      grey: string;
      lightGrey: string;
      selectbgcolor: string;
      blockFinderBgColor: string;
      selectfontcolor: string;
      selectarrowcolor: string;
      selectdisabledfontcolor: string;
      blockcategoriesbgcolor: string;
      blockcategoriesbodycolor: string;
      linkcolor: string;
      listcolor: string;
      blockBrandDivider: string;
      blockBrandHoverFontColor: string;
      blockBrandsItemName: string;
      tagBgColor: string;
      tagBgHoverColor: string;
      tagBgActiveColor: string;
      widgetsearchbuttoncolor: string;
      widgetsearchbuttonhovercolor: string;
      widgetsearchbuttonhoverbgcolor: string;
      widgetsearchbuttonactivebgcolor: string;
      widgetproductimagebordercolor: string;
      widgetnewsletterbgcolor: string;
      widgetnewslettertextcolor: string;
      widgetanchorhovercolor: string;
      widgetauthorbordercolor: string;
      blockbanneritemtitlecolor: string;
      plusiconcolor: string;
      cardbgcolor: string;
      widgetchildbgcolor: string;
      facebook: string;
      twitter: string;
      youtube: string;
      instagram: string;
      rss: string;
      subtitlecolor: string;
      shadowcolor: string;
      boxshadowcolor: string;
      bordercolor: string;
      subtitilecolor: string;
      itemhover:string;
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
      xl: number;
    };
    background: {
      blockbanneritemlineargradient: string;
      blockbanneritemmobilelineargradient: string;
    };
    boxShadow: {
      blockFinderTextShadow: string;
    };
  }
}

