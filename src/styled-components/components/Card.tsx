import styled, { css } from 'styled-components';

export const CardStyledComponent = styled.div`
  background-color: #fff;
  box-shadow: 0 1px 3px rgb(0 0 0 / 9%);
  border: none;
  border-radius: 0;
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-clip: border-box;
`;

export const CardHeader = styled.div`
  background: transparent;
  padding: 1.25rem 2rem;
  border: none;
  margin-bottom: 0;
  &:first-child {
    border-radius: calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0;
  }
`;

export const CardDivider = styled.div`
  height: 1px;
  background: #ebebeb;
`;

const CardTitleLg = css`
  font-size: 28px;
`;

export const CardLoader = styled.div`
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  pointer-events: none;
  z-index: 2;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;

export const CardTitle = styled.div`
  font-size: 24px;
  font-weight: ${(props) => `${props.theme.fontWeight.medium}`};
  padding-bottom: 8px;
  border-bottom: 1px solid
    ${(props) => `${props.theme.colors.blockBrandDivider}`};
  margin-bottom: 2rem;
  margin-top: -4px;
  ${(props: { cardtitlelg?: boolean }) =>
    props.cardtitlelg &&
    css`
      ${CardTitleLg}
    `};
`;

export const CardBodyPadding2 = styled.div`
  padding: 2rem;
  @media (max-width: ${(props) => `${props.theme.breakPoints.xs}`}px) {
    padding: 1.5rem;
  }
`;
