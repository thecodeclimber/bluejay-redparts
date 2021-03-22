import styled, { css } from 'styled-components';

export const SideBarBody = styled.div`
  @media (max-width: ${(props) => `${props.theme.breakPoints.md}`}px) {
    position: fixed;
    top: 0;
    bottom: 0;
    z-index: 1000;
    background: ${(props) => `${props.theme.colors.white}`};
    width: 300px;
    transition: transform 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    will-change: transform;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    left: 0;
    transform: translateX(-100%);
  }
`;

export const SideBarBackDrop = styled.div`
  @media (max-width: ${(props) => `${props.theme.breakPoints.md}`}px) {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 1000;
    background: ${(props) => `${props.theme.colors.backdropbgcolor}`};
    opacity: 0;
    will-change: opacity;
    transition: opacity 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }
`;
const MobileSideBar = css`
  @media (max-width: ${(props) => `${props.theme.breakPoints.md}`}px) {
    visibility: hidden;
    transition: visibility 0s 0.25s;
    ${(props: { isopen?: boolean; offcanvas?: any }) =>
      props.isopen &&
      css`
        visibility: visible;
        transition-delay: 0s;
        ${SideBarBackDrop} {
          opacity: 1;
        }
        ${SideBarBody} {
          transform: translateX(0);
        }
      `}
  }
`;
const SideBarAlways = css`
  visibility: hidden;
  transition: visibility 0s 0.25s;
  ${(props: { isopen?: boolean; offcanvas?: any }) =>
    props.isopen &&
    css`
      visibility: visible;
      transition-delay: 0s;
      ${SideBarBackDrop} {
        opacity: 1;
      }
      ${SideBarBody} {
        transform: translateX(0);
      }
    `}
`;

export const Sidebar = styled.div`
  ${(props: { isopen?: boolean; offcanvas?: any }) => {
    if (props.offcanvas === 'mobile') {
      return MobileSideBar;
    }
    if (props.offcanvas === 'always') {
      return SideBarAlways;
    }
  }}
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

export const SideBarContent = styled.div`
  @media (max-width: 991.98px) {
    flex-grow: 1;
    overflow-y: auto;
    overflow-x: hidden;
  }
`;