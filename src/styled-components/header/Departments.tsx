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
  background: #fff;
  color: #262626;
  font-weight: 500;
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
    background: #333;
    color: #fff;
  }
  @media (min-width: 1200px) and (max-width: 1399.98px) {
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
  background-color: #fff;
  box-shadow: 0 2px 20px rgb(0 0 0 / 20%);
  color: #262626;
`;

export const DepartmentsList = styled.ul`
  flex-shrink: 0;
  list-style: none;
  margin: 0;
  padding: 0;
  font-size: 15px;
  line-height: 20px;
  font-weight: 500;
  @media (min-width: 1200px) and (max-width: 1399.98px) {
    width: 210px;
  }
`;

export const DepartmentsListPadding = styled.li`
  @media (min-width: 1200px) and (max-width: 1399.98px) {
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
    background-color: #ebebeb;
  }
  @media (min-width: 1200px) and (max-width: 1399.98px) {
    padding: 6px 26px 6px 17px;
  }
`;

export const DepartmentsItemList = styled.li`
  ${(props: { itemHover?: any }) =>
    props.itemHover &&
    css`
      color: inherit;
      background-color: #ebebeb;
    `}
`;

export const DepartmentsItemArrow = styled.span`
  fill: #bfbfbf;
  position: absolute;
  top: calc(50% - 12px);
    @media (min-width: 1200px) and (max-width: 1399.98px) {
    right: 11px;
    transform: scaleX(1);
  }
`;
