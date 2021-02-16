import styled from 'styled-components';
import device from './device';
import * as palette from './variables';

const SearchButton = styled.button`
  margin: ${palette.localControlGutter / 2}px;
  background: ${(props) => props.theme.colors.primary};
  height: 44px;
  min-height: 44px;
  border-radius: 2px;
  border: none;
  padding: 0 40px;
  transition: background 0.2s, color 0.2s;
  color: ${(props) => props.theme.colors.white};
  &:active {
    transition-duration: 0.1s, 0.1s;
    background: ${(props) => props.theme.colors.lightGrey};
  }
  &:hover {
    background: ${(props) => props.theme.colors.grey};
    color: #fff;
  }
  &:focus {
    outline: none;
  }

  @media ${device.lg} {
    height: 40px;
    min-height: 40px;
    margin-top: (7px + 28px);
  }
  @media ${device.xl} {
    width: ${palette.localControlWidth}px;
    flex-basis: ${palette.localControlWidth}px;
    margin-top: (7px + 28px);
  }
  @media (max-width: 399px) {
    margin-top: (7px + 14px);
  }
`;

export default SearchButton;
