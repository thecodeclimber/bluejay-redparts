import styled, { css } from 'styled-components';

export const MenuStyledComponent = styled.div`
  display: block;
  color: #262626;
  background-color: #fff;
  box-shadow: 0 1px 15px rgb(0 0 0 / 10%), 0 1px 3px rgb(0 0 0 / 10%);
  width: 200px;
  font-size: 15px;
  line-height: 22px;
  font-weight: 500;
`;

export const MenuItemHasSubmenu = styled.div`
  position: relative;
`;

export const MenuSubmenu = styled.div`
  left: 100%;
  position: absolute;
  top: -8px;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.2s;
`;

// const MenuSubmenuClose = css`
//   left: 100%;
//   position: absolute;
//   top: -8px;
//   visibility: hidden;
//   opacity: 0;
//   transition: opacity 0.2s;
// `;

export const MenuItem = styled.li`
  ${(props: { submenu?: boolean }) =>
    props.submenu &&
    css`
      position: relative;
    `}
  &:hover {
    ${MenuSubmenu} {
      opacity: 1;
      visibility: visible;
    }
  }
`;

export const MenuList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 8px 0;
`;

export const MenuLink = styled.div`
  ${(props: { href?: any }) =>
    props.href &&
    css`
      color: inherit;
      display: block;
      position: relative;
      cursor: pointer;
      padding: 5px 28px 5px 16px;
      &:hover {
        color: inherit;
        background-color: #ebebeb;
      }
    `}
`;

export const MenuArrow = styled.span`
  fill: #bfbfbf;
  position: absolute;
  top: calc(50% - 12px);
  right: 14px;
`;
