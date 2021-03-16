import styled, { css } from 'styled-components';

export const WidgetTagStyledComponent = styled.div`
  margin-top: 20px;
`;

export const WidgetHeader = styled.div`
  padding: 1.375rem 1.5rem;
`;

const Tag = css`
  font-size: 13px;
`;

export const WidgetTagsBody = styled.div`
  padding: 0 1.5rem 1.5rem;
  ${Tag}
`;

export const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-weight: ${(props) => `${props.theme.fontWeight.medium}`};
  margin: -2px;
  a {
    display: block;
    margin: 2px;
    background: ${(props) => `${props.theme.colors.tagBgColor}`};
    padding: 4px 11px;
    color: inherit;
    border-radius: 1.5px;
    transition: background 0.12s;

    &:hover {
      color: inherit;
      background: ${(props) => `${props.theme.colors.tagBgHoverColor}`};
    }
    &:active {
      transition-duration: 0s;
      background: ${(props) => `${props.theme.colors.tagBgActiveColor}`};
    }
  }
`;
