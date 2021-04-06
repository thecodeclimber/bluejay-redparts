import styled, { css } from 'styled-components';

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
