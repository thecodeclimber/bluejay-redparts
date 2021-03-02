import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
html {
    height: 100%;
}

body {
    height: 100%;
    background: #fafafa;
    color: #262626;
    font-family: "Roboto", "sans-serif";
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    overflow-y: scroll;
    backface-visibility: hidden;
    text-align: left;
    direction: ltr;
}

#__next {
    height: 100%;
}

a {
    color: #007bff;
}
a:hover {
    color: #007bff;
    text-decoration: none;
}

label {
    margin-bottom: .25rem;
    font-size: 15px;
}

.header,
.mobile-header {
    display: none;
}

`;

export default GlobalStyles;
