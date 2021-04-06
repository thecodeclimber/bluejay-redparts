import styled, { css } from 'styled-components';

export const CommentsListStyledComponent = styled.ol`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const CommentBody = styled.div`
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

export const CommentAvatar = styled.div`
  direction: ltr;
  margin-right: 14px;
  overflow: hidden;
  border-radius: 50%;
  img {
    width: 38px;
    height: 38px;
    object-fit: cover;
  }
`;

export const CommentMeta = styled.div`
  direction: ltr;
  margin-right: 12px;
`;

export const CommentAuthor = styled.div`
  font-size: 15px;
  line-height: 17px;
  font-weight: ${(props) => `${props.theme.fontWeight.medium}`};
  margin-top: 3px;
`;

export const CommentDate = styled.div`
  font-size: 13px;
  color: ${(props) => `${props.theme.colors.selectdisabledfontcolor}`};
  margin-top: -1px;
`;

export const CommentReply = styled.div`
  direction: ltr;
  margin-right: 12px;
`;

const Typography = css`
  line-height: 1.625;
`;

export const CommentContent = styled.div`
  width: 100%;
  background: ${(props) =>
    `${props.theme.colors.widgetsearchbuttonhoverbgcolor}`};
  padding: 12px 17px;
  border-radius: 5px;
  margin-top: 12px;
  font-size: 15px;
  position: relative;
  ${Typography}
  &:before {
    position: absolute;
    content: '';
    display: block;
    left: 14px;
    top: -10px;
    border: 5px solid transparent;
    border-bottom-color: ${(props) =>
      `${props.theme.colors.widgetsearchbuttonhoverbgcolor}`};
    pointer-events: none;
  }
`;

export const CommentListChildren = styled.div`
  direction: ltr;
  border-left: 1px solid ${(props) => `${props.theme.colors.blockBrandDivider}`};
  padding-left: 31px;
  margin-left: 18px;
`;
