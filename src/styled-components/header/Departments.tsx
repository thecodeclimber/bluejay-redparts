import styled, { css } from 'styled-components';

export const DepartmentsMenu = styled.div`
  position: absolute;
  transition-delay: 0s;
  visibility: visible;
  opacity: 1;
  transform: translateY(0);
`;

export const DepartmentsStyledComponent = styled.div`
  display: block;
  position: relative;
`;

export const DepartmentsButtonTitle = styled.span`
  display: block;
`;

export const DepartmentsButton = styled.button`
  padding: 5px 43px 5px 37px;
  height: 100%;
  width: 230px;
  text-align: left;
  background: ${(props) => `${props.theme.colors.white}`};
  color: ${(props) => `${props.theme.colors.selectfontcolor}`};
  font-weight: ${(props) => `${props.theme.fontWeight.medium}`};
  position: relative;
  fill: currentColor;
  text-transform: none;
  border: none;
  cursor: pointer;
  border-radius: 2px;
  font-family: inherit;
  font-size: 15px;
  transition: background-color 0.2s, color 0.2s;
  &:hover {
    background: ${(props) => `${props.theme.colors.blockFinderBgColor}`};
    color: ${(props) => `${props.theme.colors.white}`};
  }
  @media (min-width: ${(props) =>
      `${props.theme.breakPoints.lg}`}px) and (max-width: ${(props) =>
      `${props.theme.breakPoints.xl}`}px) {
    width: 210px;
  }
`;

export const DepartmentsButtonIcon = styled.span`
  left: 14px;
  transform: scaleX(1);
  position: absolute;
  fill: currentColor;
  display: inline-block;
  transition: color 0.2s;
`;

const DepartmentsButtonOpen = css`
  transform: rotate(180deg);
  transition: transform 0.2s, color 0.2s;
`;

const DepartmentsButtonClose = css`
  transform: rotate(0deg);
  transition: transform 0.2s, color 0.2s;
`;

const handleArrowIcon = (props: any) => {
  if (props.isOpen) {
    return DepartmentsButtonOpen;
  }
  return DepartmentsButtonClose;
};

export const DepartmentsButtonArrow = styled.span`
  ${(props: { isOpen?: any }) =>
    css`
      right: 14px;
      display: block;
      fill: currentColor;
      position: absolute;
      top: calc(50% - 10px);
      ${handleArrowIcon}
    `}
`;

export const DepartmentsArrow = styled.div`
  width: 41px;
  position: absolute;
  width: 31px;
  height: 21px;
  pointer-events: none;
  bottom: 100%;
  overflow: hidden;
`;

export const DepartmentsBody = styled.div`
  order-radius: 1.5px;
  pointer-events: auto;
  display: flex;
  float: left;
  background-color: ${(props) => `${props.theme.colors.white}`};
  box-shadow: 0 2px 20px rgb(0 0 0 / 20%);
  color: ${(props) => `${props.theme.colors.selectfontcolor}`};
`;

export const DepartmentsList = styled.ul`
  flex-shrink: 0;
  list-style: none;
  margin: 0;
  padding: 0;
  font-size: 15px;
  line-height: 20px;
  font-weight: ${(props) => `${props.theme.fontWeight.medium}`};
  @media (min-width: ${(props) =>
      `${props.theme.breakPoints.lg}`}px) and (max-width: ${(props) =>
      `${props.theme.breakPoints.xl}`}px) {
    width: 210px;
  }
`;

export const DepartmentsListPadding = styled.li`
  @media (min-width: ${(props) =>
      `${props.theme.breakPoints.lg}`}px) and (max-width: ${(props) =>
      `${props.theme.breakPoints.xl}`}px) {
    height: 10px;
  }
`;

export const DepartmentsItemLink = styled.a`
  color: inherit;
  display: block;
  position: relative;
  text-decoration: none;
  width: 100%;
  &:hover {
    color: inherit;
    background-color: ${(props) => `${props.theme.colors.blockBrandDivider}`};
  }
  @media (min-width: ${(props) =>
      `${props.theme.breakPoints.lg}`}px) and (max-width: ${(props) =>
      `${props.theme.breakPoints.xl}`}px) {
    padding: 6px 26px 6px 17px;
  }
`;

export const DepartmentsItemList = styled.li`
  ${(props: { itemHover?: any }) =>
    props.itemHover &&
    css`
      color: inherit;
      background-color: ${(props) => `${props.theme.colors.blockBrandDivider}`};
    `}
`;

export const DepartmentsItemArrow = styled.span`
  fill: ${(props) => `${props.theme.colors.widgetsearchbuttoncolor}`};
  position: absolute;
  top: calc(50% - 12px);
  @media (min-width: ${(props) =>
      `${props.theme.breakPoints.lg}`}px) and (max-width: ${(props) =>
      `${props.theme.breakPoints.xl}`}px) {
    right: 11px;
    transform: scaleX(1);
  }
`;

export const DepartmentsMegamenu = styled.div`
  direction: ltr;
  box-shadow: 1px 0 #ebebeb inset;
  min-height: 100%;
  display: none;
  @media (min-width: 1200px) and (max-width: 1399.98px) {
    padding: 17px 20px 20px;
  }
  ${(props: { itemSize?: any; currentItem?: any }) =>
    props.itemSize &&
    props.currentItem &&
    css`
      display: block;
      @media (min-width: 1200px) and (max-width: 1399.98px) {
        width: 198px;
      }
    `}
`;
