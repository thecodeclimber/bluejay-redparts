import styled, { css } from 'styled-components';

export const MegaMenuLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const MegaMenuLinkItem = styled.li`
  margin-top: 4px;
`;

export const MegaMenuItemLinksItemLink = styled.a`
  white-space: pre;
  ${(props: { hasSubLinks?: any }) =>
    !props.hasSubLinks
      ? css`
         font-weight: 400;
         font-size: 14px;
         color: #6c757d;
         text-decoration: none;
         background-color: transparent;
         line-height: 18px;
         cursor: pointer
         list-style: none;
        &:hover {
        color: #1961bb;
       }
         `
      : css`
          font-size: 15px;
          color: #6c757d;
          color: inherit;
          transition: color 0.15s;
          font-weight: 500;
          text-decoration: none;
          border-bottom: 1px solid #ebebeb;
          background-color: transparent;
          padding-bottom: 5px;
          cursor: pointer;
          list-style: none;
          &:hover {
            color: #1961bb;
          }
          @media (min-width: 1200px) {
            font-size: 15px;
          }
        `}
`;
