interface Theme {
  colors: {
    white: string;
    black: string;
    primary: string;
    success: string;
  };
  styles: {
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
}

const theme: Theme = {
  colors: {
    white: '#FFFFFF',
    black: '#000000',
    primary: '#1E74DF',
    success: '#07BC0C',
  },
  styles: {
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
};

export default theme;
