import styled, { css } from 'styled-components';

export const SectionHeaderStyledComponent = styled.div``;

export const SectionHeaderBody = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-wrap: wrap;
`;

export const SectionHeaderTitle = styled.div`
  font-size: 20px;
  font-weight: ${(props) => `${props.theme.fontWeight.bolder}`};
  margin: 0;
  position: relative;
  top: 2px;
`;

export const SectionHeaderSpring = styled.div`
  flex-grow: 1;
`;
export const SectionHeaderLinks = styled.div`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  font-size: 14px;
  flex-wrap: wrap;
`;

export const SectionHeaderLinksItem = styled.div`
  direction: ltr;
  padding-right: 18px;
`;

export const SectionHeaderLinksLink = styled.div`
  color: ${(props) => `${props.theme.colors.listcolor}`};
  position: relative;
  transition: color 0.1s;
`;

export const SectionHeaderGroups = styled.div`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  overflow-x: auto;
  white-space: nowrap;
`;

export const SectionHeaderGroupsButton = styled.div`
  font-size: 14px;
  height: 23px;
  border: none;
  padding: 0 18.37131px;
  line-height: 23px;
  display: block;
  position: relative;
  z-index: 0;
  pointer-events: none;
  transition: color 0.1s;
  background: transparent;
  color: ${(props: { isActive?: boolean; theme?: any }) =>
    props.isActive
      ? `${props.theme.colors.white}`
      : `${props.theme.colors.listcolor}`};
  &:after {
    direction: ltr;
    left: 0;
    position: absolute;
    display: block;
    content: '';
    width: calc(100% - 8.37131px);
    height: 100%;
    top: 0;
    z-index: -1;
    pointer-events: auto;
    transition: background 0.1s;
    transform: skewX(-20deg);
    transform-origin: left bottom;
    border-top-left-radius: 2px;
    border-top-right-radius: 2.5px;
    border-bottom-left-radius: 2.5px;
    border-bottom-right-radius: 2px;
  }
  &:hover {
    color: ${(props: { isActive?: boolean; theme?: any }) =>
      props.isActive
        ? `${props.theme.colors.white}`
        : `${props.theme.colors.selectfontcolor}`};
  }
  &:hover:after {
    background: ${(props: { isActive?: boolean; theme?: any }) =>
      props.isActive
        ? `${props.theme.colors.dark}`
        : `${props.theme.colors.blockBrandDivider}`};
  }
  ${(props: { isActive?: boolean }) =>
    props.isActive &&
    css`
      color: ${(props) => `${props.theme.colors.white}`};
      &:after {
        background: ${(props) => `${props.theme.colors.dark}`};
      }
    `}
`;

export const SectionHeaderArrows = styled.div`
  direction: ltr;
  display: flex;
`;

export const SectionHeaderArrowNext = styled.div`
  margin-inline-start: -5px;
`;

export const SectionHeaderDivider = styled.div`
  width: 100%;
  height: 2px;
  margin-top: 8px;
  background: ${(props) => `${props.theme.colors.blockBrandDivider}`};
`;
