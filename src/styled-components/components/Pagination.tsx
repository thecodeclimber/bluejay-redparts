import styled, { css } from 'styled-components';

export const PaginationPagination = styled.ul`
  display: flex;
  list-style: none;
  border-radius: 0.25rem;
  margin-bottom: 0;
  padding: 0;
  flex-wrap: wrap;
  justify-content: center;
`;

export const PageLink = styled.button`
  font-size: 15px;
  line-height: 18px;
  border-radius: 2px;
  padding: 6px 10px;
  transition: background 0.15s;
  cursor: pointer;
  border: none;
  user-select: none;
  background-color: ${(props) => `${props.theme.colors.switcherbgcolor}`};
  color: ${(props) => `${props.theme.colors.selectfontcolor}`};
  &:hover {
    z-index: 2;
    text-decoration: none;
    border-color: ${(props) => `${props.theme.colors.paginationbordercolor}`};
    background-color: ${(props) => `${props.theme.colors.tagBgHoverColor}`};
    color: ${(props) => `${props.theme.colors.selectfontcolor}`};
  }
  &:active {
    transition-duration: 0s;
    background-color: ${(props) => `${props.theme.colors.itemhover}`};
    color: ${(props) => `${props.theme.colors.selectfontcolor}`};
  }
  &:focus {
    box-shadow: none;
  }
`;

export const CurrentPageLink = styled.span`
  position: relative;
  display: block;
  margin-left: 0;
  border: 0 solid ${(props) => `${props.theme.colors.paginationbordercolor}`};
  font-size: 15px;
  line-height: 18px;
  border-radius: 2px;
  padding: 6px 10px;
  transition: background 0.15s;
  user-select: none;
`;

export const PageLinkWithArrow = styled(PageLink)`
  display: flex;
  align-items: center;
`;

export const PageItem = styled.li`
  margin-right: 6px;
  ${(props: { isdisabled?: boolean; isactive?: boolean }) =>
    props.isdisabled &&
    css`
      ${PageLink} {
        background-color: ${(props) => `${props.theme.colors.switcherbgcolor}`};
        color: ${(props) => `${props.theme.colors.blockBrandsItemName}`};
        pointer-events: none;
        cursor: auto;
        border-color: ${(props) =>
          `${props.theme.colors.paginationbordercolor}`};
      }
    `}
  ${(props: { isdisabled?: boolean; isactive?: boolean }) =>
    props.isactive &&
    css`
      ${CurrentPageLink} {
        background-color: ${(props) => `${props.theme.colors.primary}`};
        color: ${(props) => `${props.theme.colors.white}`};
        cursor: default;
        z-index: 3;
        border-color: ${(props) => `${props.theme.colors.primary}`};
      }
    `}
  &:first-child {
    ${PageLink} {
      border-radius: 2px;
    }
  }
  &:last-child {
    margin-right: 0;
    ${PageLink} {
      border-radius: 2px;
    }
  }
`;

export const PageLinkArrow = styled.span`
  display: block;
  margin: 3px 0 4px;
  fill: currentColor;
  opacity: 0.8;
  transform: scaleX(1);
  svg {
    display: block;
  }
`;

export const PageLinkArrowLeft = styled(PageLinkArrow)`
  margin-left: -1px;
  margin-right: 1px;
`;

export const PageLinkArrowRight = styled(PageLinkArrow)`
  margin-left: 1px;
  margin-right: -1px;
`;

export const PageItemDot = styled(PageItem)`
  display: flex;
  align-items: center;
`;

export const PaginationDots = styled.div`
  position: relative;
  width: 2px;
  height: 2px;
  border-radius: 1px;
  background: ${(props) => `${props.theme.colors.paginationdotbgcolor}`};
  margin: 0 4px;
  &:before,
  &:after {
    display: block;
    content: '';
    position: absolute;
    width: inherit;
    height: inherit;
    border-radius: inherit;
    background: inherit;
  }
  &:before {
    top: -5px;
    left: -5px;
  }
  &:after {
    bottom: -5px;
    right: -5px;
  }
`;