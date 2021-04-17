import styled, { css } from 'styled-components';

const TextColor = css`
  color: #fff;
`;

export const TopbarStyledComponent = styled.div`
  display: flex;
  height: 100%;
  font-size: 14px;
  line-height: 1;
`;

export const TopbarItemText = styled.div`
  ${TextColor}
  font-weight: 500;
  display: flex;
  -moz-box-align: center;
  align-items: center;
  padding: 0 10px;
`;

export const TopbarItemSpring = styled.div`
  flex-grow: 1;
`;

export const TopbarButtonLabel = styled.div`
  color: #9e9e9e;
  font-weight: 400;
  margin-right: 3px;
  transition: color 0.12s;
`;

export const TopbarItemTitle = styled.div`
  ${TextColor}
`;

export const TopbarLink = styled.div`
  display: flex;
  ${(props: { href?: string }) =>
    props.href &&
    css`
      color: #9e9e9e;
      font-weight: 400;
      cursor: pointer;
      display: flex;
      transition: color 0.12s;
      &:hover {
        ${TextColor}
      }
    `}
`;
