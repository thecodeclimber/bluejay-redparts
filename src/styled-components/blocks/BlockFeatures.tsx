import styled, { css } from 'styled-components';

const TopStrip = css`
  border-bottom: 2px solid ${(props) => `${props.theme.colors.bordercolor}`};
`;
const BottomStrip = css`
  border-top: 2px solid ${(props) => `${props.theme.colors.bordercolor}`};
`;

export const BlockFeatureslist = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 8px 40px;
  ${(props: { layout?: any }) => {
    if (props.layout === 'bottom-strip') {
      return BottomStrip;
    }
    if (props.layout === 'top-strip') {
      return TopStrip;
    }
  }}
  border-top: 2px solid ${(props) => `${props.theme.colors.bordercolor}`};
  @media (max-width: ${(props) => `${props.theme.breakPoints.xl}`}px) {
    padding: 0;
  }
  @media (min-width: ${(props) =>
      `${props.theme.breakPoints.sm}`}px) and (max-width: ${(props) =>
      `${props.theme.breakPoints.md}`}px) {
    padding: 4px 0;
  }
  @media (max-width: ${(props) => `${props.theme.breakPoints.sm}`}px) {
    flex-wrap: wrap;
    padding: 16px 0;
  }
`;

export const BlockFeaturesItem = styled.li`
  display: flex;
  width: calc((100% - 3px) / 4);
  padding: 1.5rem 1rem;
  justify-content: center;
  @media (max-width: ${(props) => `${props.theme.breakPoints.xl}`}px) {
    padding: 1.5rem 1.5rem;
    justify-content: flex-start;
  }
  @media (max-width: ${(props) => `${props.theme.breakPoints.lg}`}px) {
    padding: 1.375rem 0.75rem;
  }
  @media (min-width: ${(props) =>
      `${props.theme.breakPoints.sm}`}px) and (max-width: ${(props) =>
      `${props.theme.breakPoints.md}`}px) {
    flex-direction: column;
    text-align: center;
    justify-content: center;
  }
  @media (max-width: ${(props) => `${props.theme.breakPoints.sm}`}px) {
    width: 50%;
    padding: 0.75rem 1.25rem;
  }
  @media (max-width: 575px) and (min-width: 400px) {
    flex-direction: column;
    text-align: center;
    justify-content: center;
  }
  @media (max-width: 399px) {
    width: 100%;
    padding: 0.675rem 1.25rem;
  }
`;

export const BlockFeaturesItemIcon = styled.div`
  display: flex;
  align-items: center;
  fill: ${(props) => `${props.theme.colors.primary}`};
  margin-right: 1.375rem;
  @media (max-width: ${(props) => `${props.theme.breakPoints.lg}`}px) {
    margin-right: 1rem;
  }
  @media (min-width: ${(props) =>
      `${props.theme.breakPoints.sm}`}px) and (max-width: ${(props) =>
      `${props.theme.breakPoints.md}`}px) {
    display: block;
    margin-bottom: 12px;
    margin-right: 0;
  }
  @media (max-width: 575px) and (min-width: 400px) {
    margin-right: 0;
  }
  @media (max-width: 399px) {
    margin-right: 18px;
  }
`;

export const BlockFeaturesItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (min-width: ${(props) =>
      `${props.theme.breakPoints.sm}`}px) and (max-width: ${(props) =>
      `${props.theme.breakPoints.md}`}px) {
    display: block;
  }
  @media (max-width: 575px) and (min-width: 400px) {
    display: block;
  }
`;

export const BlockFeaturesItemTitle = styled.div`
  font-size: 18px;
  line-height: 1.125;
  padding: 0.1666666667em 0;
  font-weight: 500;
  @media (max-width: ${(props) => `${props.theme.breakPoints.xl}`}px) {
    font-size: 16px;
  }
`;

export const BlockFeaturesItemSubTitle = styled.div`
  color: ${(props) => `${props.theme.colors.subtitilecolor}`};
  font-size: 15px;
  line-height: 1.25;
  padding: 0.1111111111em 0;
  @media (max-width: ${(props) => `${props.theme.breakPoints.xl}`}px) {
    font-size: 14px;
  }
`;
