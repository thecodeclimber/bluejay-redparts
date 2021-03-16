import styled, { css } from 'styled-components';

const BlockSpaceLayoutBeforFooter = css`
  height: 80px;
`;

const layout = (props: any) => {
  if (props.layout === 'before-footer') {
    return BlockSpaceLayoutBeforFooter;
  }
};

export const BlockSpaceStyledComponent = styled.div`
  display: block;
  ${(props: { layout?: any }) =>
    css`
      ${layout}
    `};
`;
