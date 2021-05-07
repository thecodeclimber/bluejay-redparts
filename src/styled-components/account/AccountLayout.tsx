import styled, { css } from 'styled-components';

export const AccountNav = styled.div`
  background-color: ${(props) => `${props.theme.colors.white}`};
  box-shadow: 0 1px 3px rgb(0 0 0 / 9%);
  @media (max-width: ${(props) => `${props.theme.breakPoints.md}`}px) {
    overflow-x: auto;
    max-width: 100%;
  }
`;

export const AccountNavTitle = styled.h4`
  padding: 1.375rem 1.5rem;
  font-size: 20px;
  font-weight: ${(props) => `${props.theme.fontWeight.medium}`};
  margin-bottom: 0;
  @media (max-width: ${(props) => `${props.theme.breakPoints.md}`}px) {
    display: none;
  }
`;

export const AccountNavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 15px;
  line-height: 20px;

  @media (min-width: ${(props) => `${props.theme.breakPoints.md}`}px) {
    padding-bottom: 1.375rem;
  }

  @media (max-width: ${(props) => `${props.theme.breakPoints.md}`}px) {
    display: flex;
    white-space: nowrap;
    padding: 0 8px;
  }
`;

export const AccountNavItem = styled.li`
  &:hover {
    background: ${(props) => `${props.theme.colors.tagBgColor}`};
  }
  > a {
    cursor: pointer;
    display: block;
    padding: 7px 1.5rem;
    border: none;
    width: 100%;
    background: transparent;
    text-align: left;
    color: ${(props) => `${props.theme.colors.listcolor}`};
    &:focus {
      outline: none;
    }
    @media (max-width: ${(props) => `${props.theme.breakPoints.md}`}px) {
      padding: 14px 20px;
    }
    ${(props: { active?: boolean }) =>
      props.active &&
      css`
        color: inherit;
        font-weight: ${(props) => `${props.theme.fontWeight.medium}`};
        @media (min-width: ${(props) => `${props.theme.breakPoints.md}`}px) {
          box-shadow: 3px 0 ${(props) =>
            `${props.theme.colors.primary}`}; inset;
        }
        @media (min-width: ${(props) => `${props.theme.breakPoints.md}`}px) {
          box-shadow: 0 -3px ${(props) =>
            `${props.theme.colors.primary}`}; inset;
        }
      `}
  }
`;

export const AccountNavDevider = styled.li`
  height: 1px;
  background: ${(props) => `${props.theme.colors.blockBrandDivider}`};
  margin: 10px 0;
`;

export const ActiveNavItemButton = styled.li`
  &:hover {
    background: ${(props) => `${props.theme.colors.tagBgColor}`};
  }
  > button {
    cursor: pointer;
    display: block;
    padding: 7px 1.5rem;
    border: none;
    width: 100%;
    background: transparent;
    text-align: left;
    color: ${(props) => `${props.theme.colors.listcolor}`};
    &:focus {
      outline: none;
    }
  }
  ${(props: { active?: boolean }) =>
    props.active &&
    css`
      color: inherit;
      font-weight: ${(props) => `${props.theme.fontWeight.medium}`};
    `}
`;
