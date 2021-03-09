import styled, { css } from 'styled-components';

export const DropcartStyledComponent = styled.div`
  display: block;
  width: 320px;
  background-color: #fff;
  box-shadow: 0 2px 20px rgb(0 0 0 / 20%);
  border-radius: 1.5px;
  padding: 24px;
  color: #262626;
`;

export const DropcartEmpty = styled.div`
  text-align: center;
  font-size: 15px;
  padding: 20px 0;
`;

export const DropcartList = styled.ul`
  list-style: none;
  padding: 0;
  margin: -8px 0 0;
`;

export const DropcartItem = styled.div`
  display: flex;
`;

export const DropcartItemImage = styled.div`
  flex-shrink: 0;
  width: 70px;
`;

export const ImageBody = styled.div`
  ${(props: { href?: any }) =>
    props.href &&
    css`
      padding-bottom: 100%;
      display: block;
      position: relative;
      width: 100%;
    `}
`;

export const ImageTag = styled.img`
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: scale-down;
  vertical-align: middle;
  border-style: none;
`;

export const DropcartItemInfo = styled.div`
  padding: 4px 0 5px;
  flex-grow: 1;
  margin: 0 10px;
`;

export const DropcartItemName = styled.div`
  font-size: 15px;
  line-height: 18px;
`;

export const DropcartItemNameLink = styled.div`
  ${(props: { href?: any }) =>
    props.href &&
    css`
      color: #262626;
    `}
`;

export const DropcartItemMeta = styled.div`
  display: flex;
  align-items: center;
  margin-top: 4px;
`;

export const DropcartItemQuantity = styled.div`
  font-weight: 400;
  position: relative;
  height: 16px;
  z-index: 0;
  font-size: 11px;
  color: #fff;
  padding: 1px 8.82352px 0;
  &:before {
    left: 0;
    transform: skewX(-20deg);
    transform-origin: left bottom;
    background: #1e74df;
    position: absolute;
    display: block;
    content: '';
    width: calc(100% - 5.82352px);
    height: 100%;
    top: 0;
    z-index: -1;
    border-radius: 2.5px 3px;
  }
  &:after {
    position: absolute;
    display: block;
    content: '';
    width: 8.32352px;
    height: 100%;
    top: 0;
    z-index: -1;
    left: 0;
    border-top-left-radius: 2.5px;
    border-bottom-left-radius: 2.5px;
    background: #1e74df;
  }
`;

export const DropcartItemPrice = styled.div`
  color: #262626;
  font-weight: 500;
  position: relative;
  height: 16px;
  z-index: 0;
  font-size: 11px;
  padding: 1px 10.82352px 0;
  &:before {
    left: 0;
    transform: skewX(-20deg);
    transform-origin: left bottom;
    background: #ebebeb;
    position: absolute;
    display: block;
    content: '';
    width: calc(100% - 5.82352px);
    height: 100%;
    top: 0;
    z-index: -1;
    border-radius: 2.5px 3px;
  }
`;

export const DropcartItemFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 2px;
  font-size: 13px;
  line-height: 17px;
  color: #262626;
`;

export const DropcartItemRemoveButton = styled.div`
  margin-right: -13px;
  flex-shrink: 0;
  width: 26px;
  height: 26px;
  border-radius: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: none;
  fill: currentColor;
  background-color: #fff;
  color: #ccc;
  &:hover {
    background-color: #f2f2f2;
    color: #999;
  }
`;

export const DropcartDivider = styled.div`
  height: 1px;
  background: #ebebeb;
  margin: 8px 0;
`;

export const DropcartTotal = styled.div`
  display: flex;
  font-size: 15px;
  margin-top: 18px;
  margin-bottom: 24px;
  font-size: 15px;
`;

export const DropcartActions = styled.div`
  display: flex;
`;
export const DropcartActionsButtonLeft = styled.div`
  font-size: 16px;
  flex-grow: 1;
  line-height: 19px;
  padding: calc(17px / 2) 16px;
`;

export const DropcartActionsButtonRight = styled.div`
  margin-left: 8px;
  font-size: 16px;
  flex-grow: 1;
  line-height: 19px;
  padding: calc(17px / 2) 16px;
`;

export const DropcartTabel = styled.table`
  width: 100%;
`;
export const DropcartTabelHeader = styled.th`
  font-weight: 500;
`;

export const DropcartTabelData = styled.td`
  text-align: right;
`;
