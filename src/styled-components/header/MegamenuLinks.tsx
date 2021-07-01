import styled, { css } from 'styled-components';

export const MegaMenuLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const MegaMenuLinkItem = styled.li`
  margin-top: 4px;
`;

export const MegaMenuItemLinksItemLink = styled.div`
  white-space: pre;
  &:hover {
    cursor: pointer;
  }
  ${(props: { href?: any; hassublinks?: any }) =>
    !props.hassublinks
      ? css`
         font-weight: ${(props) => `${props.theme.fontWeight.normal}`};
         font-size: 14px;
         color: ${(props) => `${props.theme.colors.listcolor}`};
         text-decoration: none;
         background-color: transparent;
         line-height: 18px;
         cursor: pointer
         list-style: none;
        &:hover {
        color: ${(props) => `${props.theme.colors.blueColor}`};
       }
         `
      : css`
          font-size: 15px;
          color: ${(props) => `${props.theme.colors.listcolor}`};
          color: inherit;
          transition: color 0.15s;
          font-weight: ${(props) => `${props.theme.fontWeight.medium}`};
          text-decoration: none;
          border-bottom: 1px solid
            ${(props) => `${props.theme.colors.blockBrandDivider}`};
          background-color: transparent;
          padding-bottom: 5px;
          cursor: pointer;
          list-style: none;
          &:hover {
            color: ${(props) => `${props.theme.colors.blueColor}`};
          }
          @media (min-width: ${(props) => `${props.theme.breakPoints.lg}`}px) {
            font-size: 15px;
          }
        `}
`;
