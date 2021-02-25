import styled, { css } from 'styled-components';

export const MegaMenuLinks = styled.ul` 
list-style: none;
padding: 0;
margin: 0;
`;

// export const MegaMenuItemLinksItemLink = styled.a`
//    ${(props :{ href?: any }) =>
//          !props.href ?
//          css `
//          font-weight: 400;
//          font-size: 14px;
//          color: inherit;
//          text-decoration: none;
//          background-color: transparent;
//         cursor: pointer
//         list-style: none;
//         margin-top: 5px;
//         &:hover {
//         color: #1961bb;
//        }
//          `:
//         css `
//         font-size: 15px;
//         color: #6c757d;
//         color: inherit;
//         transition: color .15s;
//         font-weight: 500;
//         text-decoration: none;
//         border-bottom: 1px solid #ebebeb;
//         padding-bottom: 12px;
//         margin-bottom: 5px;
//         background-color: transparent;
//         cursor: pointer;

//         list-style: none;
//        &:hover {
//         color: #1961bb;
//        }
//       @media (min-width: 1200px) {
//         font-size: 15px;
//       }
//         `}

// `;

export const MegaMenuItemLinksItemLink = styled.a`
  ${(props: { href?: any }) =>
    props.href &&
    css`
      color: inherit;
      transition: color 0.15s;
      font-weight: 500;
      font-size: 10px;
      padding-top: 12px;
      margin-top: 5px;
      text-decoration: none;
      
      background-color: transparent;
      @media (min-width: 1200px) and (max-width: 1399.98px) {
        font-size: 15px;
      }
    `}
`;
