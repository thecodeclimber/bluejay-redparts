import styled, { css } from 'styled-components';

export const PostBody = styled.div`
  padding: 48px;
  line-height: 1.625;
`;

export const PostPagination = styled.div`
  border-top: 1px solid ${(props) => `${props.theme.colors.blockBrandDivider}`};
  margin: -28px 48px 0;
  padding-top: 20px;
  padding-bottom: 48px;
`;

export const PostPaginationTitle = styled.div`
  font-size: 12px;
  color: ${(props) => `${props.theme.colors.selectdisabledfontcolor}`};
  text-transform: uppercase;
  margin-bottom: 5px;
`;

export const PostPaginationList = styled.div`
  font-size: 15px;

  ul {
    display: flex;
    list-style: none;
    padding: 0;
    margin: -3px;
  }
  li {
    margin: 3px;
  }
`;

export const PostPaginationLink = styled.span`
  padding: 2px 8px;
  display: block;
  border-radius: 1.5px;
  transition: background 0.2s;
  background-color: ${(props) =>
    `${props.theme.colors.widgetsearchbuttonactivebgcolor}`};
  color: ${(props) => `${props.theme.colors.selectfontcolor}`};
  ${(props: { isActive?: boolean }) =>
    !props.isActive &&
    css`
      &:hover {
        background-color: ${(props) => `${props.theme.colors.tagBgHoverColor}`};
        color: ${(props) => `${props.theme.colors.selectfontcolor}`};
      }
    `};
  ${(props: { isActive?: boolean }) =>
    props.isActive &&
    css`    
    background-color: ${(props) => `${props.theme.colors.primary}`};
    color: ${(props) => `${props.theme.colors.white}`};;
    cursor: default;
}`};
`;

export const PostFooter = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0 48px 48px;
  margin-top: -24px;
`;

const Tags = css`
  font-size: 13px;
`;

export const TagsList = styled.div`
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
  }
`;

const TagsSm = css`
  ${TagsList} a {
    padding: 2px 8px;
  }
`;

export const PostTags = styled.span`
  direction: ltr;
  margin-right: 32px;
  ${Tags}
  ${TagsSm}
`;

export const PostShareLinks = styled.div`
  padding-bottom: 1px;
`;

export const PostAuthor = styled.div`
  display: flex;
  align-items: center;
  margin: -24px 48px 0;
  padding: 24px 0 48px;
  border-top: 1px solid ${(props) => `${props.theme.colors.blockBrandDivider}`}; ;
`;

export const PostAuthorAvatar = styled.div`
  direction: ltr;
  margin-right: 20px;
  overflow: hidden;
  flex-shrink: 0;
  border-radius: 2px;
`;

export const PostAuthorInfo = styled.div`
  @media (min-width: ${(props) =>
      `${props.theme.breakPoints.xs}`}px) and (max-width: ${(props) =>
      `${props.theme.breakPoints.sm}`}px) {
    text-align: center;
    margin-top: 16px;
  } ;
`;

export const PostAuthorName = styled.div`
  font-weight: ${(props) => `${props.theme.fontWeight.medium}`}; ;
`;

export const PostAuthorAbout = styled.div`
  font-size: 15px;
  margin-top: 4px;
`;

export const PostViewCard = styled.div`
  margin-top: 24px;
  background-color: ${(props) => `${props.theme.colors.white}`};
  box-shadow: 0 1px 3px rgb(0 0 0 / 9%);
  position: relative;
`;

export const PostNavigationBody = styled.div`
  display: flex;
`;

export const PostNavigationItemImage = styled.div`
  direction: ltr;
  margin-right: 18px;
  overflow: hidden;
  border-radius: 2px;
  flex-shrink: 0;
  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
  }
`;

export const PostNavigationDirection = styled.div`
  display: flex;
  font-size: 14px;
  line-height: 21px;
  color: ${(props) => `${props.theme.colors.selectdisabledfontcolor}`}; ;
`;

export const PostNavigationDirectionArrow = styled.div`
  direction: ltr;
  margin-right: 8px;
  display: flex;
  align-items: center;
  fill: currentColor;
  padding-bottom: 1px;
  opacity: 0.8;
  svg {
    transform: scaleX(1);
    overflow: hidden;
    display: block;
    vertical-align: middle;
  }
`;

export const PostNavigationItemTitle = styled.div`
  font-size: 15px;
  line-height: 22px;
  margin-top: 3px;
`;

export const PostNavigationItemNext = styled.div`
  text-align: end;
  display: flex;
  padding: 20px;
  align-items: center;
  width: 50%;
  color: inherit;
  transition: background 0.12s;
  &:hover {
    background: ${(props) => `${props.theme.colors.tagBgColor}`};
    color: inherit;
  }
  ${PostNavigationDirectionArrow} {
    margin-left: 8px;
  }
  ${PostNavigationDirection} {
    justify-content: flex-end;
  }
  ${PostNavigationItemImage} {
    margin-left: 18px;
  }
`;

export const PostNavigationItemPrev = styled.div`
  text-align: start;
  display: flex;
  padding: 20px;
  align-items: center;
  width: 50%;
  color: inherit;
  transition: background 0.12s;
  &:hover {
    background: ${(props) => `${props.theme.colors.tagBgColor}`};
    color: inherit;
  }
  ${PostNavigationDirectionArrow} {
    margin-right: 8px;
  }
  ${PostNavigationDirection} {
    justify-content: flex-start;
  }
  ${PostNavigationItemImage} {
    margin-right: 18px;
  }
`;

export const PostViewCardTitle = styled.div`
  padding: 44px 0 8px;
  margin: 0 48px 40px;
  font-size: 28px;
  font-weight: ${(props) => `${props.theme.fontWeight.bolder}`};
  border-bottom: 1px solid
    ${(props) => `${props.theme.colors.blockBrandDivider}`}; ;
`;

export const CommentsViewPagination = styled.div`
  margin-top: 36px;
`;

export const PostViewCardBody = styled.div`
  padding: 0 48px 48px;
  @media (min-width: ${(props) =>
      `${props.theme.breakPoints.xs}`}px) and (max-width: ${(props) =>
      `${props.theme.breakPoints.sm}`}px) {
    padding: 0 32px 32px;
  }
  @media (max-width: ${(props) => `${props.theme.breakPoints.xs}`}px) {
    padding: 0 24px 24px;
  }
`;
