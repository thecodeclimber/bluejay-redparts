import styled, { css } from 'styled-components';

const isOpenAddress = css`
  height: auto;
  opacity: 1;
`;

const isOpenCreatAccount = css`
  height: auto;
  opacity: 1;
`;

const HandleOpen = (props: any) => {
  if (props.isOpenAddress) {
    return isOpenAddress;
  }
  if (props.isOpenCreatAccount) {
    return isOpenCreatAccount;
  }
};

export const CollapseAreaAccount = styled.div`
  height: 0;
  opacity: 0;
  overflow: hidden;
  transition: height 0.2s ease-in-out, opacity 0.2s ease-in-out;
  ${(props: { isOpenCreatAccount?: any }) => css`
    ${HandleOpen}
  `}
`;

export const CollapseAreaAddress = styled.div`
  height: 0;
  opacity: 0;
  overflow: hidden;
  transition: height 0.2s ease-in-out, opacity 0.2s ease-in-out;
  ${(props: { isOpenAddress?: any }) => css`
    ${HandleOpen}
  `}
`;
