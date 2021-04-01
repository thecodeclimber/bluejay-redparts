import styled, { css } from 'styled-components';

export const BreadcrumbStyledComponent = styled.div`
  background: transparent;
  line-height: 20px;
  font-size: 14px;
  color: ${(props) => `${props.theme.colors.listcolor}`};
  display: flex;
  flex-wrap: wrap;
  padding: 0.75rem 1rem;
  margin-bottom: 1rem;
  list-style: none;
  border-radius: 0.25rem;
`;

export const BreadcrumbList = styled.div`
  display: block;
  list-style: none;
  padding: 0;
  margin: -4px 0 0;
  width: 100%;
`;

export const BreadcrumbSpaceshipSafeArea = styled.div`
  direction: ltr;
  float: right;
  height: 21px;
  margin-top: 4px;
  width: calc(50% + 440px / 2 + 20px);
`;

const BreadcrumbItemFirst = css``;

const BreadcrumbItemLast = css``;

const BreadcrumbItemParent = css``;

const BreadcrumbItemCurrent = css``;

const SelectPosition = (props: any) => {
  if (props.isFirst) {
    return BreadcrumbItemLast;
  }
  if (props.isLast) {
    return BreadcrumbItemCurrent;
  }
};

export const BreadcrumbItem = styled.div`
  direction: ltr;
  margin-right: -7.12435px;
  float: left;
  margin-top: 4px;
  ${(props: { isFirst?: any; isLast?: any }) =>
    css`
      ${SelectPosition}
    `};
`;

export const BreadcrumbItemLink = styled.span`
  padding-left: 7px;
  display: flex;
  align-items: center;
  position: relative;
  z-index: 0;
  height: 21px;
  padding: 0 16.12435px;
  pointer-events: none;
  color: ${(props) => `${props.theme.colors.listcolor}`};
  &:hover {
    color: ${(props) => `${props.theme.colors.listcolor}`};
  }
  &:hover::before {
    color: ${(props) => `${props.theme.colors.listcolor}`};
    background-color: ${(props) => `${props.theme.colors.tagBgHoverColor}`};
  }
  &::before {
    direction: ltr;
    left: 6.062175px;
    right: 6.062175px;
    transform: skewX(-30deg);
    content: '';
    pointer-events: auto;
    position: absolute;
    background-color: ${(props) => `${props.theme.colors.bordercolor}`};
    top: 0;
    bottom: 0;
    z-index: -1;
    border-radius: 3px;
    transition: background 0.1s;
  }
  &::after {
    direction: ltr;
    left: 0;
    content: '';
    pointer-events: auto;
    position: absolute;
    background-color: ${(props) => `${props.theme.colors.bordercolor}`};
    top: 0;
    bottom: 0;
    z-index: -1;
    border-radius: 3px;
    transition: background 0.1s;
  }
`;

export const BreadcrumbTitleSafeArea = styled.div`
  direction: ltr;
  float: left;
  display: block;
  height: 21px;
  width: calc(50% + var(--block-header-title-width, 0px) / 2 + 64px);
  margin-top: 4px;
`;
