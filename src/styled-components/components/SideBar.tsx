import styled, { css } from 'styled-components';

export const SideBarHeader = styled.div`
  display: none;
  @media (max-width: ${(props) => `${props.theme.breakPoints.md}`}px) {
    display: flex;
    align-items: center;
    border-bottom: 1px solid ${(props) => `${props.theme.colors.bordercolor}`};
    flex-shrink: 0;
  }
`;
export const SideBarTitle = styled.div`
  @media (max-width: ${(props) => `${props.theme.breakPoints.md}`}px) {
    flex-grow: 1;
    font-size: 15px;
    font-weight: ${(props) => `${props.theme.fontWeight.medium}`};
    padding: 0 20px;
  }
`;
export const SideBarContent = styled.div`
  @media (max-width: 991.98px) {
    flex-grow: 1;
  }
`;

export const SideBarClose = styled.button`
  @media (max-width: ${(props) => `${props.theme.breakPoints.md}`}px) {
    width: 48px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    fill: currentColor;
    padding: 0 0 2px;
    flex-shrink: 0;
    transition: background-color 0.15s, color 0.15s;
    background-color: ${(props) => `${props.theme.colors.white}`};
    color: ${(props) => `${props.theme.colors.plusiconcolor}`};
    &:hover {
      background-color: ${(props) => `${props.theme.colors.cardbgcolor}`};
      color: ${(props) => `${props.theme.colors.selectarrowcolor}`};
    }
    &:focus {
      outline: none;
    }
  }
`;
