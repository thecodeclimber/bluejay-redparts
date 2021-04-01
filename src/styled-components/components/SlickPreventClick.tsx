import styled from 'styled-components';

export const SlickPreventClickActive = styled.div`
  .slick-list:before {
    position: absolute;
    content: '';
    display: block;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 1000;
  }
`;
