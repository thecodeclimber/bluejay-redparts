import styled from 'styled-components';

export const MegaMenu = styled.div`
  position: relative;
`;

export const MegaMenuImage = styled.div`
  position: absolute;
  bottom: 0;
  display: block;
  @media (max-width: ${(props) => `${props.theme.breakPoints.lg}`}px) {
    transform: scale(0.81);
  }
`;
