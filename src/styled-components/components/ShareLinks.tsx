import styled from 'styled-components';

export const ShareLinksList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 11px;
  line-height: 18px;
  font-weight: ${(props) => `${props.theme.fontWeight.medium}`};
  white-space: nowrap;
`;

export const ShareLinksItem = styled.li`
  & + & {
    margin-left: 4px;
  }
  a {
    border-radius: 1.5px;
    display: block;
    padding: 2px 7px 1px;
    &,
    &:hover {
      color: inherit;
      text-decoration: none;
    }
  }
`;

export const ShareLinksItemTypeLike = styled(ShareLinksItem)`
  a {
    background: ${(props) => `${props.theme.colors.likebgcolor}`};
    color: ${(props) => `${props.theme.colors.white}`};

    &:hover {
      color: ${(props) => `${props.theme.colors.white}`};
      background: ${(props) => `${props.theme.colors.likebghovercolor}`};
    }
  }
`;

export const ShareLinksItemTypeTweet = styled(ShareLinksItem)`
  a {
    background: ${(props) => `${props.theme.colors.tweetbgcolor}`};
    color: ${(props) => `${props.theme.colors.white}`};

    &:hover {
      color: ${(props) => `${props.theme.colors.white}`};
      background: ${(props) => `${props.theme.colors.tweetbghovercolor}`};
    }
  }
`;

export const ShareLinksItemTypePin = styled(ShareLinksItem)`
  a {
    background: ${(props) => `${props.theme.colors.pinbgcolor}`};
    color: ${(props) => `${props.theme.colors.white}`};

    &:hover {
      color: ${(props) => `${props.theme.colors.white}`};
      background: ${(props) => `${props.theme.colors.pinbghovercolor}`};
    }
  }
`;

export const ShareLinksItemTypeCounter = styled(ShareLinksItem)`
  a {
    background: ${(props) => `${props.theme.colors.white}`};
    color: ${(props) => `${props.theme.colors.blockBrandHoverFontColor}`};
    box-shadow: inset 0 0 0 1px
      ${(props) => `${props.theme.colors.countercolor}`};

    &:hover {
      color: ${(props) => `${props.theme.colors.counterhovercolor}`};
    }
  }
`;