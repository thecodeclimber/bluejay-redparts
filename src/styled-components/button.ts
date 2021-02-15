import styled from 'styled-components';

const Button = styled.button`
$local-control-gutter: 14px;
margin: ($local-control-gutter / 2);
height: 44px;
min-height: 44px;
border-radius: 2px;
border: none;
padding: 0 40px;
transition:
    background .2s,
    color .2s;

@include define-button-scheme($btn-dark-scheme);

&:active {
    transition-duration: .1s,  .1s;
}
&:focus {
    outline: none;
}
  
`;
export default Button;
