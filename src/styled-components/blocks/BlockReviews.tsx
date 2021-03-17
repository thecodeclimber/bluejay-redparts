import styled from 'styled-components';

export const BlockBlockReviews = styled.div``;

export const BlockReviewsTitle = styled.div`
  font-size: 32px;
  font-weight: ${(props) => `${props.theme.fontWeight.bolder}`};
  text-align: center;
  margin-bottom: 28px;
`;

export const BlockReviewsSubTitle = styled.div`
  color: ${(props) => `${props.theme.colors.subtitlecolor}`};
  text-align: center;
  margin-bottom: 28px;
  font-size: 15px;
  margin-top: -24px;
`;

export const BlockReviewsList = styled.div`
  img {
    width: 100%;
  }
`;

export const BlockReviewsItem = styled.div`
  background-color: ${(props) => `${props.theme.colors.white}`};
  box-shadow: 0 1px 3px ${(props) => `${props.theme.colors.boxshadowcolor}`};
  max-width: 690px;
  margin: 0 auto;
  display: flex;
  @media (max-width: ${(props) => `${props.theme.breakPoints.sm}`}px) {
    flex-direction: column;
  }
`;

export const BlockReviewsItemAvatar = styled.div`
  width: 190px;
  flex-shrink: 0;
  margin-left: 12px;
  margin-right: -12px;
  img {
    max-width: 100%;
  }
  @media (max-width: ${(props) => `${props.theme.breakPoints.sm}`}px) {
    margin: 36px 36px 0;
    overflow: hidden;
    align-self: center;
    width: 140px;
    border-radius: 70px;
    margin-left: 0;
    margin-right: 0;
  }
`;

export const BlockReviewsItemContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px 32px;
  @media (max-width: ${(props) => `${props.theme.breakPoints.sm}`}px) {
    text-align: center;
  }
`;

export const BlockReviewsItemText = styled.div`
  font-size: 15px;
  font-style: italic;
  line-height: 24px;
`;

export const BlockReviewsItemMeta = styled.div`
  margin-top: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: ${(props) => `${props.theme.breakPoints.sm}`}px) {
    flex-direction: column;
    margin-top: 0;
    padding: 28px 0 20px;
  }
`;

export const BlockReviewsItemRating = styled.div`
  padding-bottom: 4px;
  @media (max-width: ${(props) => `${props.theme.breakPoints.sm}`}px) {
    order: 1;
    padding-top: 8px;
    padding-bottom: 0;
  }
`;

export const BlockReviewsItemAuthor = styled.div`
  color: ${(props) => `${props.theme.colors.subtitlecolor}`};
  font-size: 14px;
  position: relative;
  line-height: 20px;
  &:before {
    display: inline-block;
    height: 1px;
    width: 18px;
    background: currentColor;
    content: '';
    opacity: 0.8;
    position: relative;
    vertical-align: middle;
    left: 0;
    margin-right: 4px;
  }
`;