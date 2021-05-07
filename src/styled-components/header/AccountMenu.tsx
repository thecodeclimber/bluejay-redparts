import styled, { css } from 'styled-components';

export const AccountMenuStyledComponent = styled.div`
  display: block;
  width: 280px;
  background-color: ${(props) => `${props.theme.colors.white}`};
  box-shadow: 0 2px 20px rgb(0 0 0 / 20%);
  border-radius: 1.5px;
  color: ${(props) => `${props.theme.colors.selectfontcolor}`};
`;

export const AccountMenuFormTitle = styled.div`
  text-align: center;
  padding: 32px 0 26px;
  font-weight: ${(props) => `${props.theme.fontWeight.normal}`};
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
  color: ${(props) => `${props.theme.colors.redcolor}`};
`;

export const AccountMenuFormButton = styled.div`
  margin-top: 32px;
  text-align: center;
`;

export const AccountMenuFormLink = styled.div`
  font-size: 14px;
  text-align: center;
  color: ${(props) => `${props.theme.colors.listcolor}`};
`;

export const AccountMenuFormAnchorLink = styled.div`
  color: ${(props) => `${props.theme.colors.listcolor}`};
  ${(props: { href?: any }) =>
    props.href &&
    css`
      &:hover {
        color: ${(props) => `${props.theme.colors.selectfontcolor}`};
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
  color: ${(props) => `${props.theme.colors.ItemDetailsColor}`};
  margin-top: 1px;
`;

export const AccountMenuDivider = styled.div`
  height: 1px;
  background: ${(props) => `${props.theme.colors.blockBrandDivider}`};
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
      font-weight: ${(props) => `${props.theme.fontWeight.normal}`};
      text-align: left;
      &:hover {
        background: ${(props) => `${props.theme.colors.tagBgColor}`};
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
  font-weight: ${(props) => `${props.theme.fontWeight.normal}`};
  &:hover {
    background: ${(props) => `${props.theme.colors.tagBgColor}`};
    color: inherit;
  }
`;
