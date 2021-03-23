import styled from 'styled-components';

export const ReviewsReviewsList = styled.div``;

export const ReviewsListContent = styled.ol`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const ReviewsListItem = styled.li`
  & + & {
    margin-top: 18px;
    padding-top: 24px;
    border-top: 1px solid ${(props) => `${props.theme.colors.bordercolor}`};
  }
`;

export const Review = styled.div``;

export const ReviewBody = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

export const ReviewAvatar = styled.div`
  overflow: hidden;
  border-radius: 1.5px;
  width: 42px;
  margin-right: 12px;
  img {
    max-width: 100%;
    height: auto;
  }
`;

export const ReviewMeta = styled.div`
  flex-grow: 1;
  margin-right: 20px;
`;

export const ReviewAuthor = styled.div`
  font-size: 15px;
  line-height: 18px;
  font-weight: ${(props) => `${props.theme.fontWeight.bolder}`};
  margin-top: 2px;
`;

export const ReviewDate = styled.div`
  font-size: 13px;
  color: ${(props) => `${props.theme.colors.selectdisabledfontcolor}`};
`;

export const ReviewRating = styled.div`
  @media (max-width: 474px) {
    width: 100%;
    margin-top: 12px;
    margin-bottom: -3px;
  }
`;

export const ReviewContentTypography = styled.div`
  width: 100%;
  font-size: 15px;
  line-height: 1.5;
  margin-top: 12px;
`;

export const ReviewsListPagination = styled.div`
  margin-top: 18px;
  padding-top: 18px;
  border-top: 1px solid ${(props) => `${props.theme.colors.bordercolor}`};
`;