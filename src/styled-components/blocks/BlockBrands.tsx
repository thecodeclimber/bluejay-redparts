import styled from 'styled-components';
import AppLink from '~/components/shared/AppLink';

export const BlockBrandsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  border: 1px solid ${(props) => `${props.theme.colors.blockBrandDivider}`};
`;

export const BlockBrandsItem = styled.li`
  text-align: center;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: ${(props) =>
      `${props.theme.breakPoints.lg}px`}) and (max-width: ${(props) =>
      `${props.theme.breakPoints.xl}px`}) {
    width: calc((100% - 7px) / 7);
  }
  @media (min-width: ${(props) =>
      `${props.theme.breakPoints.md}px`}) and (max-width: ${(props) =>
      `${props.theme.breakPoints.lg}px`}) {
    width: calc((100% - 6px) / 6);
  }
  @media (min-width: ${(props) =>
      `${props.theme.breakPoints.sm}px`}) and (max-width: ${(props) =>
      `${props.theme.breakPoints.sm}px`}) {
    width: calc((100% - 4px) / 4);
  }
`;

export const BlockBrandsItemName = styled.span`
  display: block;
  font-size: 11px;
  font-weight: ${(props) => `${props.theme.fontWeight.medium}`};
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: ${(props) => `${props.theme.colors.blockBrandsItemName}`};
  margin-top: 4px;
  margin-bottom: -2px;
  transition: color 0.15s;
`;

export const BlockBrandsLayout = styled.div`
  @media (min-width: ${(props) =>
      `${props.theme.breakPoints.lg}px`}) and (max-width: ${(props) =>
      `${props.theme.breakPoints.xl}px`}) {
    width: 1px;
  }
`;

export const BlockBrandsItemLink = styled(AppLink)`
  position: relative;
  display: block;
  padding: 12px 28px;
  width: 100%;
  color: ${(props) => `${props.theme.colors.link}`};
  text-decoration: none;
  &:before {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: rgba(0, 0, 0, 0.02);
    opacity: 0;
    transition: opacity 0.15s;
  }

  img {
    max-width: 100%;
    max-height: 72px;
    filter: grayscale(1);
    opacity: 0.7;
    transition: filter 0.15s, opacity 0.15s;
  }
  &:hover {
    &:before {
      opacity: 1;
    }
    img {
      filter: grayscale(0);
      opacity: 1;
    }
    ${BlockBrandsItemName} {
      color: ${(props) => `${props.theme.colors.blockBrandHoverFontColor}`};
    }
  }
`;

export const BlockBrandsDivider = styled.li`
  background: ${(props) => `${props.theme.colors.blockBrandDivider}`};
`;
