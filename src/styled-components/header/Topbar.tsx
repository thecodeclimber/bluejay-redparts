import styled, { css } from 'styled-components';

const TextColor = css`
  color: ${(props) => `${props.theme.colors.white}`};
`;

export const TopbarStyledComponent = styled.div`
  display: flex;
  height: 100%;
  font-size: 14px;
  line-height: 1;
`;

export const TopbarItemText = styled.div`
  ${TextColor}
  font-weight: ${(props) => `${props.theme.fontWeight.medium}`};
  display: flex;
  -moz-box-align: center;
  align-items: center;
  padding: 0 10px;
`;

export const TopbarItemSpring = styled.div`
  flex-grow: 1;
`;

export const TopbarButtonLabel = styled.div`
  color: ${(props) => `${props.theme.colors.widgetnewslettertextcolor}`};
  font-weight: ${(props) => `${props.theme.fontWeight.normal}`};
  margin-right: 3px;
  transition: color 0.12s;
`;

export const TopbarItemTitle = styled.div`
  ${TextColor}
`;

export const TopbarLink = styled.div`
  display: flex;
  ${(props: { href?: any }) =>
    props.href &&
    css`
      color: ${(props) => `${props.theme.colors.widgetnewslettertextcolor}`};
      font-weight: ${(props) => `${props.theme.fontWeight.normal}`};
      cursor: pointer;
      display: flex;
      transition: color 0.12s;
      &:hover {
        ${TextColor}
      }
    `}
`;
