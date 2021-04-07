import styled from 'styled-components';

export const Faq = styled.div``;

export const FaqHeader = styled.div`
  padding: 44px 0 52px;
  text-align: center;
  @media (max-width: ${(props) => `${props.theme.breakPoints.lg}`}px) {
    padding: 48px 0 48px;
  }
  @media (max-width: ${(props) => `${props.theme.breakPoints.xs}`}px) {
    padding: 32px 0 28px;
  }
`;

export const FaqHeaderTitle = styled.div`
  font-weight: ${(props) => `${props.theme.fontWeight.bolder}`};
  margin: 0;
  @media (max-width: ${(props) => `${props.theme.breakPoints.sm}`}px) {
    font-size: 32px;
  }
`;

export const FaqSection = styled.div`
  background-color: ${(props) => `${props.theme.colors.white}`};
  box-shadow: 0 1px 3px rgb(0 0 0 / 9%);
  padding: 48px;
  margin-top: 30px;
  @media (max-width: ${(props) => `${props.theme.breakPoints.lg}`}px) {
    padding: 40px;
  }
  @media (max-width: ${(props) => `${props.theme.breakPoints.sm}`}px) {
    padding: 32px;
  }
  @media (max-width: ${(props) => `${props.theme.breakPoints.xs}`}px) {
    padding: 24px;
  }
`;

export const FaqSectionTitle = styled.div`
  font-size: 24px;
  font-weight: ${(props) => `${props.theme.fontWeight.bolder}`};
  padding-bottom: 8px;
  border-bottom: 1px solid
    ${(props) => `${props.theme.colors.blockBrandDivider}`};
  margin-bottom: 2.5rem;
  margin-top: -4px;
  @media (max-width: ${(props) => `${props.theme.breakPoints.sm}`}px) {
    margin-bottom: 32px;
  }
  @media (max-width: ${(props) => `${props.theme.breakPoints.xs}`}px) {
    margin-bottom: 28px;
  }
`;

export const FaqSectionBody = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -20px;
  @media (max-width: ${(props) => `${props.theme.breakPoints.md}`}px) {
    margin: -12px;
  }
`;

export const FaqQuestion = styled.div`
  margin: 20px;
  width: calc(50% - 40px);
  @media (max-width: ${(props) => `${props.theme.breakPoints.md}`}px) {
    margin: 12px;
    width: calc(100% - 24px);
  }
`;

export const FaqQuestionTitle = styled.div`
  margin-bottom: 14px;
  @media (max-width: ${(props) => `${props.theme.breakPoints.xs}`}px) {
    font-size: 18px;
    margin-bottom: 12px;
  }
`;

export const FaqQuestionAnswer = styled.div``;

export const Typography = styled.div`
  line-height: 1.625;
  @media (max-width: ${(props) => `${props.theme.breakPoints.xs}`}px) {
    font-size: 15px;
    line-height: 1.75;
  }
`;

export const FaqFooter = styled.div`
  margin-top: 56px;
  text-align: center;
  @media (max-width: ${(props) => `${props.theme.breakPoints.sm}`}px) {
    margin-top: 40px;
  }
`;

export const FaqFooterTitle = styled.div`
  font-size: 28px;
  margin-bottom: 8px;
  @media (max-width: ${(props) => `${props.theme.breakPoints.sm}`}px) {
    font-size: 24px;
  }
`;

export const FaqFooterSubtitle = styled.div`
  margin-bottom: 36px;
  color: ${(props) => `${props.theme.colors.listcolor}`};
  @media (max-width: ${(props) => `${props.theme.breakPoints.xs}`}px) {
    margin-bottom: 20px;
    font-size: 15px;
  }
`;
