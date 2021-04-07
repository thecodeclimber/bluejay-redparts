import styled from 'styled-components';

export const Contacts = styled.div``;

export const ContactsMap = styled.div`
  position: relative;
  height: 400px;
  @media (max-width: ${(props) => `${props.theme.breakPoints.md}`}px) {
    height: 380px;
  }
  @media (max-width: ${(props) => `${props.theme.breakPoints.sm}`}px) {
    height: 360px;
  }
  iframe {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
`;
