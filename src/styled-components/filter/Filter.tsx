import styled, { css } from 'styled-components';

export const FilterTitle = styled.div`
  direction: ltr;
  text-align: left;
  display: block;
  border: none;
  padding: 6px 10px;
  cursor: pointer;
  width: calc(100% + 20px);
  position: relative;
  color: inherit;
  font-weight: ${(props) => `${props.theme.fontWeight.bolder}`};
  font-size: 15px;
  line-height: 18px;
  border-radius: 2px;
  margin: 0 -10px;
  transition: background-color 0.2s, fill 0.2s;
  background: transparent;
  fill: ${(props) => `${props.theme.colors.plusiconcolor}`};
  &:hover {
    transition-duration: 0.1s, 0.1s;
    background: ${(props) => `${props.theme.colors.cardbgcolor}`};
    fill: ${(props) => `${props.theme.colors.blockBrandsItemName}`};
  }
`;

export const FilterArrow = styled.span`
  position: absolute;
  top: 6px;
  transition: transform 0.2s;
  direction: ltr;
  right: 10px;
  ${(props: { isOpen?: boolean }) =>
    props.isOpen &&
    css`
      transform: rotateZ(180deg);
    `};
`;

export const FilterBody = styled.div`
  margin: 0 -1.5rem;
  overflow: hidden;
  visibility: hidden;
  height: 0;
  opacity: 0;
  transition: height 0.2s, opacity 0.2s, visibility 0s 0.2s;
  ${(props: { isOpen?: boolean }) =>
    props.isOpen &&
    css`
      transition-delay: 0s, 0s;
      visibility: visible;
      height: auto;
      opacity: 1;
      ${FilterArrow} {
      }
    `}
`;

export const FilterContainer = styled.div`
  padding: 10px 1.5rem 16px;
`;
