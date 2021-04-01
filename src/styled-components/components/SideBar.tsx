import styled, { css } from 'styled-components';

// export const SideBarBody = styled.div`
//   display: block;
// `;

// export const SideBarBackDrop = styled.div`
//   @media (max-width: ${(props) => `${props.theme.breakPoints.md}`}px) {
//     position: fixed;
//     left: 0;
//     top: 0;
//     right: 0;
//     bottom: 0;
//     z-index: 1000;
//     background: rgba(51, 51, 51, 0.8);
//     opacity: 0;
//     will-change: opacity;
//     transition: opacity 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94);
//   }
// `;

// const MobileSideBar = css`
//   @media (max-width: ${(props) => `${props.theme.breakPoints.md}`}px) {
//     visibility: hidden;
//     transition: visibility 0s 0.25s;
//     ${(props: { isopen?: boolean; offcanvas?: any }) =>
//       props.isopen &&
//       css`
//         visibility: visible;
//         transition-delay: 0s;
//         ${SideBarBackDrop} {
//           opacity: 1;
//         }
//         ${SideBarBody} {
//           left: 0;
//           position: fixed;
//           top: 0;
//           bottom: 0;
//           z-index: 1000;
//           background: #fff;
//           width: 300px;
//           transition: transform 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94);
//           will-change: transform;
//           overflow: hidden;
//           display: flex;
//           flex-direction: column;
//           transform: translateX(0);
//         }
//       `}
//   }
// `;
// const SideBarAlways = css`
//   visibility: hidden;
//   transition: visibility 0s 0.25s;
//   ${SideBarBody} {
//     position: fixed;
//     top: 0;
//     bottom: 0;
//     z-index: 1000;
//     background: ${(props) => `${props.theme.colors.white}`};
//     width: 300px;
//     transition: transform 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94);
//     will-change: transform;
//     overflow: hidden;
//     display: flex;
//     flex-direction: column;
//   }
//   ${SideBarBody} {
//     direction: ltr;
//     left: 0;
//     transform: translateX(-100%);
//   }
// `;

// const SidebarOpen = css`
//   visibility: visible;
//   transition-delay: 0s;
//   ${SideBarBackDrop} {
//     opacity: 1;
//     visibility: visible;
//     will-change: opacity;
//     transition: opacity 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94);
//   }
//   ${SideBarBody} {
//     display: block;
//     transition: visibility 0s 0.25s;
//     transform: translateX(0);
//   }
// `;

// export const Sidebar = styled.div`
//   ${(props: { isopen?: boolean; offcanvas?: any }) => {
//     if (props.isopen) {
//       console.log('prop');
//       return SidebarOpen;
//     }
//     if (props.offcanvas === 'mobile') {
//       console.log('mobile');
//       return MobileSideBar;
//     }
//     if (props.offcanvas === 'always') {
//       return SideBarAlways;
//     }
//   }}
// `;

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
    overflow-y: auto;
    overflow-x: hidden;
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
