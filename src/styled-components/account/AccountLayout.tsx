import styled, { css } from 'styled-components';

export const AccountNav = styled.div`
  background-color: #fff;
  box-shadow: 0 1px 3px rgb(0 0 0 / 9%);
  @media (max-width: 991.98px) {
    overflow-x: auto;
    max-width: 100%;
  }
`;

export const AccountNavTitle = styled.h4`
  padding: 1.375rem 1.5rem;
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 0;
  @media (max-width: 991.98px) {
    display: none;
  }
`;

export const AccountNavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 15px;
  line-height: 20px;

  @media (min-width: 992px) {
    padding-bottom: 1.375rem;
  }

  @media (max-width: 991.98px) {
    display: flex;
    white-space: nowrap;
    padding: 0 8px;
  }
`;

export const AccountNavItem = styled.li`
  &:hover {
    background: #f2f2f2;
  }
  > a {
    cursor: pointer;
    display: block;
    padding: 7px 1.5rem;
    border: none;
    width: 100%;
    background: transparent;
    text-align: left;
    color: #6c757d;
    &:focus {
      outline: none;
    }
    @media (max-width: 991.98px) {
      padding: 14px 20px;
    }
    ${(props: { active?: boolean }) =>
      props.active &&
      css`
        color: inherit;
        font-weight: 500;
        @media (min-width: 992px) {
          box-shadow: 3px 0 #1e74df inset;
        }
        @media (max-width: 991.98px) {
          box-shadow: 0 -3px #1e74df inset;
        }
      `}
  }
`;

export const AccountNavDevider = styled.li`
  height: 1px;
  background: #ebebeb;
  margin: 10px 0;
`;

export const ActiveNavItemButton = styled.li`
  &:hover {
    background: #f2f2f2;
  }
  > button {
    cursor: pointer;
    display: block;
    padding: 7px 1.5rem;
    border: none;
    width: 100%;
    background: transparent;
    text-align: left;
    color: #6c757d;
    &:focus {
      outline: none;
    }
  }
  ${(props: { active?: boolean }) =>
    props.active &&
    css`
      color: inherit;
      font-weight: 500;
    `}
`;
