// import original module declarations
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
    }
  }
}
