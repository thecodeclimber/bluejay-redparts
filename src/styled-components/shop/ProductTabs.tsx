import styled, { css } from 'styled-components';

export const ProductTabsList = styled.ul`
  display: flex;
  padding: 0;
  margin: 0 0 -1px;
  list-style: none;
  overflow-x: auto;
`;

export const ProductTabsItem = styled.li`
  position: relative;
  a {
    font-size: 16px;
    font-weight: 500;
    color: inherit;
    display: flex;
    padding: 14px 18px 13px;
    transition: background 0.12s, box-shadow 0.12s;
    &:hover {
      background: ${(props) => `${props.theme.colors.tabbgcolor}`};
      box-shadow: 0 -1px ${(props) => `${props.theme.colors.tagBgHoverColor}`} inset;
    }
    ${(props: { active?: boolean }) =>
      props.active &&
      css`
        background: transparent;
        box-shadow: 0 -2px ${(props) => `${props.theme.colors.primary}`} inset;
        &:hover {
          background: transparent;
          box-shadow: 0 -2px ${(props) => `${props.theme.colors.primary}`} inset;
        }
        &:active {
          background: transparent;
          box-shadow: 0 -2px ${(props) => `${props.theme.colors.primary}`} inset;
        }
      `}
  }
  &:first-child {
    margin-left: auto;
  }
  &:last-child {
    margin-right: auto;
  }
`;

export const ProductTabsItemCounter = styled.span`
  color: ${(props) => `${props.theme.colors.primary}`};
  font-size: 14px;
  top: -4px;
  position: relative;
  margin-left: 3px;
  margin-right: -3px;
`;

export const ProductTabsContent = styled.div`
  border-top: 1px solid ${(props) => `${props.theme.colors.bordercolor}`};
`;

export const ProductTabsPane = styled.div`
  display: block;
  overflow: hidden;
  height: 0;
  opacity: 0;
  transition: opacity 0.5s;
  ${(props: { active?: boolean }) =>
    props.active &&
    css`
      padding: 42px 48px 48px;
      overflow: visible;
      height: auto;
      opacity: 1;
      max-width: calc(100% - 0.001px);
    `}
`;

export const ProductProductTabs = styled.div`
  background-color: ${(props) => `${props.theme.colors.white}`};
  box-shadow: 0 1px 3px ${(props) => `${props.theme.colors.boxshadowcolor}`};
  grid-column: 1/3;
  grid-row: 4;
  margin-top: 20px;
  @media (max-width: ${(props) => `${props.theme.breakPoints.lg}`}px) {
    grid-column: 1/4;
    grid-row: 4;
  }
  @media (max-width: ${(props) => `${props.theme.breakPoints.sm}`}px) {
    grid-column: 1;
    grid-row: 5;
  }
`;