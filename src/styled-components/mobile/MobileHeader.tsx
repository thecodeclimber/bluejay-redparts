import styled from 'styled-components';

export const MobileContainer = styled.div`
  display: block;
  background: #1e74df;
  box-shadow: #1e74df;
  position: relative;
  z-index: 100;

  @media (min-width: 1200px) {
    display: none;
  }
`;

export const MobileHeaderBody = styled.div`
  height: 50px;
  display: flex;
`;

export const MobileHeaderIndicator = styled.div`
  display: flex;
  margin-left: auto;
`;

export const MobileHeaderLogo = styled.a`
  display: flex;
  align-items: center;
  padding: 0 14px;
`;

export const MobileHeaderMenuButton = styled.header`
  width: 52px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
  border: none;
  background: #1e74df;
  fill: #fff;
  &:hover {
    background: #00000026;
  }
  &:active {
    background: #007bff;
  }
  &:focus {
    outline: none;
  }

  svg {
    display: block;
  }
`;

export const MobileHeaderSearch = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  max-width: 440px;
  flex-grow: 1;
  padding: 0 12px;
  margin: 0 auto;

  @media (max-width: 768px) {
    top: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    max-width: none;
    padding: 0;
    margin: 0;
    z-index: 1;
    transform: translateY(-100%);
    transition: transform 0.3s;
  }
`;
