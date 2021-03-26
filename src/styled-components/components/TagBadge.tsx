import styled  from 'styled-components';

export const TagBadge = styled.div`
  display: inline-block;
  text-transform: uppercase;
  font-size: 11px;
  font-weight: ${(props) => `${props.theme.fontWeight.medium}`};
  line-height: 1;
  z-index: 0;
  color: ${(props) => `${props.theme.colors.white}`};
  height: 18px;
  padding: 4px 14px 0;
  &:before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: -1;
    border-radius: 2.5px;
    transform-origin: center;
    left: 3.5px;
    right: 3.5px;
    background: ${(props) => `${props.theme.colors.badgebgcolor}`};
    transform: skewX(-20deg);
  }
`;