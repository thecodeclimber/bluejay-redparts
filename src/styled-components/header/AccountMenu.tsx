import styled, { css } from 'styled-components';

export const AccountMenuStyledComponent = styled.div`
  display: block;
  width: 280px;
  background-color: #fff;
  box-shadow: 0 2px 20px rgb(0 0 0 / 20%);
  border-radius: 1.5px;
  color: #262626;
`;

export const AccountMenuFormTitle = styled.div`
  text-align: center;
  padding: 32px 0 26px;
  font-weight: 500;
`;

export const AccountMenuForm = styled.form`
  padding: 0 30px 32px;
  display: block;
  margin-top: 0em;
`;

export const AccountMenuFormForgotLink = styled.div`
  ${(props: { href?: any }) =>
    props.href &&
    css`
      font-size: 14px;
      text-align: center;
    `}
`;

export const InvalidFeedback = styled.div`
  display: none;
  width: 100%;
  margin-top: 0.25rem;
  font-size: 80%;
  color: #dc3545;
`;

export const AccountMenuFormButton = styled.div`
  margin-top: 32px;
  text-align: center;
`;

export const AccountMenuFormLink = styled.div`
  font-size: 14px;
  text-align: center;
  color: #6c757d;
`;

export const AccountMenuFormAnchorLink = styled.div`
  color: #6c757d;
  ${(props: { href?: any }) =>
    props.href &&
    css`
      &:hover {
        color: #262626;
      }
    `}
`;

export const AccountMenuUser = styled.div`
  ${(props: { href?: any }) =>
    props.href &&
    css`
      display: flex;
      align-items: center;
      padding: 14px 20px;
      color: inherit;
    `}
`;

export const AccountMenuUserAvatar = styled.div`
  margin-right: 14px;
  width: 44px;
  flex-shrink: 0;
  img {
    border-radius: 100%;
    max-width: 100%;
  }
`;

export const AccountMenuUserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const AccountMenuUserName = styled.div`
  font-size: 15px;
  line-height: 20px;
`;

export const AccountMenuUserEmail = styled.div`
  font-size: 14px;
  line-height: 18px;
  color: #6c757d;
  margin-top: 1px;
`;

export const AccountMenuDivider = styled.div`
  height: 1px;
  background: #ebebeb;
`;

export const AccountMenuAnchorLink = styled.ul`
  ${(props: { href?: any }) =>
    props.href &&
    css`
      display: block;
      color: inherit;
      font-size: 15px;
      font-family: inherit;
      line-height: inherit;
      padding: 5px 20px;
      border: none;
      width: 100%;
      background: transparent;
      font-weight: 500;
      text-align: left;
      &:hover {
        background: #f2f2f2;
        color: inherit;
      }
    `}
`;

export const AccountMenuLinks = styled.ul`
  list-style: none;
  padding: 12px 0;
  margin: 0;
`;

export const AccountMenuLogoutButton = styled.button`
  display: block;
  color: inherit;
  font-size: 15px;
  font-family: inherit;
  line-height: inherit;
  padding: 5px 20px;
  text-align: left;
  border: none;
  width: 100%;
  background: transparent;
  font-weight: 500;
  &:hover {
    background: #f2f2f2;
    color: inherit;
  }
`;
