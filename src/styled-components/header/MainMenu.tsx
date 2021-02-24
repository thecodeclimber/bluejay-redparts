import styled from 'styled-components';

export const MainMenu = styled.div`
  height: 100%;
`;

export const MainMenuList = styled.ul`
  position: relative;
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  height: 100%;
`;

export const MainMenuItem = styled.li`
  position: relative;
  display: list-item;
  text-align: -webkit-match-parent;
  list-style: none;
  color: #262626;
  &:hover {
    background-color: #f2f2f2;
    color: inherit;
    visibility: visible;
    opacity: 1;
    -webkit-transform: rotateX(0);
    -ms-transform: rotateX(0);
    transform: rotateX(0);
  }
`;

export const MainMenuLink = styled.a`
  height: 100%;
  padding-left: 11px;
  padding-right: 23px;
  padding-top: 0;
  padding-bottom: 0;
  font-weight: 500;
  position: relative;
  border-radius: 0;
  display: flex;
  align-items: center;
  color: inherit;
  white-space: nowrap;
  font-size: 15px;
  text-decoration: none;
  background-color: transparent;
  cursor: pointer;
  box-sizing: border-box;
  svg {
    color: #bfbfbf;
    right: 10px;
    top: calc(50% - 2px);
    position: absolute;
    fill: currentColor;
    overflow: hidden;
    vertical-align: middle;
  }
  &:hover {
    background-color: #f2f2f2;
    color: inherit;
    visibility: visible;
    opacity: 1;
    transform: rotateX(0);
  }
`;

export const MainMenuSubMenu = styled.div`
  left: 0;
  position: absolute;
  z-index: 1;
  top: 100%;
  opacity: 0;
  visibility: hidden;
  transform-origin: top;
  transform: rotateX(45deg);
  transition: transform 0.2s, opacity 0.2s;
  color: #262626;
  &:hover {
    visibility: visible;
    opacity: 1;
    transform: rotateX(0);
  }
`;

export const MainMenuMegaMenu = styled.div`
  padding: 26px 30px 30px;
  background-color: #fff;
  box-shadow: 0 2px 20px rgb(0 0 0 / 20%);
  width: calc((1110px - 30px) / 6 * 2 + 30px);
`;
