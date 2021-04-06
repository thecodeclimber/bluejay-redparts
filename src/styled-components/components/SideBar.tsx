import styled, { css } from 'styled-components';

export const SideBarBody = styled.div``;

export const SideBarBackDrop = styled.div``;

export const SideBar = styled.div`
  ${(props: { isopen?: boolean }) =>
    props.isopen &&
    css`
      visibility: visible;
      transition-delay: 0s;
      ${SideBarBody} {
        direction: ltr;
        left: 0;
        transform: translateX(0);
        position: fixed;
        top: 0;
        bottom: 0;
        z-index: 1000;
        background: #fff;
        width: 300px;
        transition: transform 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        will-change: transform;
        overflow: hidden;
        display: flex;
        flex-direction: column;
      }
      ${SideBarBackDrop} {
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        z-index: 1000;
        background: rgba(51, 51, 51, 0.8);
        opacity: 1;
        will-change: opacity;
        transition: opacity 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      }
    `}
`;

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
