import styled from 'styled-components';

export const About = styled.div``;

export const AboutBody = styled.div`
  display: grid;
  z-index: 0;
  @media (min-width: ${(props) => `${props.theme.breakPoints.lg}`}px) {
    grid-template-columns: 1fr 380px 730px 1fr;
    grid-template-rows: 100px auto auto;
  }
  @media (min-width: ${(props) =>
      `${props.theme.breakPoints.sm}`}px) and (max-width: ${(props) =>
      `${props.theme.breakPoints.lg}`}px) {
    grid-template-columns: 1fr 690px 1fr;
    grid-template-rows: 80px auto 60px auto;
  }
  @media (max-width: ${(props) => `${props.theme.breakPoints.xs}`}px) {
    grid-template-columns: 20px calc(100% - 40px) 20px;
    grid-template-rows: 20px auto 60px auto;
  }
`;

export const AboutImage = styled.div`
  position: relative;
  overflow: hidden;
  z-index: -1;
  @media (min-width: ${(props) => `${props.theme.breakPoints.lg}`}px) {
    grid-column: 1/5;
    grid-row: 1/3;
  }
  @media (max-width: ${(props) => `${props.theme.breakPoints.lg}`}px) {
    grid-column: 1/4;
    grid-row: 1/3;
  }
`;

export const AboutImageBg = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-size: cover;
  background-position: center center;
  z-index: -1;
  &:before {
    display: block;
    content: '';
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      rgba(51, 51, 51, 0.7),
      rgba(51, 51, 51, 0.4)
    );
  }
`;

export const AboutImageDecor = styled.div`
  position: absolute;
  bottom: -1px;
`;

export const AboutCard = styled.div`
  background-color: ${(props) => `${props.theme.colors.white}`};
  box-shadow: 0 1px 3px rgb(0 0 0 / 9%);
  border-radius: 2px;
  padding: 32px 36px;
  display: flex;
  flex-direction: column;
  @media (min-width: ${(props) => `${props.theme.breakPoints.lg}`}px) {
    min-height: 530px;
    grid-column: 2;
    grid-row: 2/4;
  }
  @media (max-width: ${(props) => `${props.theme.breakPoints.lg}`}px) {
    padding: 32px 64px;
    margin: 0 auto;
    max-width: 510px;
    grid-column: 2;
    grid-row: 2/4;
  }
  @media (max-width: ${(props) => `${props.theme.breakPoints.sm}`}px) {
    padding: 32px 36px;
  }
  @media (max-width: ${(props) => `${props.theme.breakPoints.xs}`}px) {
    padding: 24px 28px;
    font-size: 15px;
  }
`;

export const AboutCardTitle = styled.div`
  font-size: 40px;
  font-weight: ${(props) => `${props.theme.fontWeight.bolder}`};
  padding: 16px 0 40px;
  text-align: center;
  margin-bottom: 0;
  @media (max-width: ${(props) => `${props.theme.breakPoints.xs}`}px) {
    padding: 8px 0 24px;
    font-size: 32px;
  }
`;

export const AboutCardText = styled.div`
  text-align: center;
  line-height: 1.75;
`;

export const AboutCardAuthor = styled.div`
  direction: ltr;
  padding-left: 28px;
  color: ${(props) => `${props.theme.colors.listcolor}`};
  font-size: 14px;
  position: relative;
  align-self: center;
  margin-top: 16px;
`;

export const AboutCardSignature = styled.div`
  padding: 40px 0 12px;
  margin-top: auto;
  align-self: center;
`;

export const AboutIndicators = styled.div`
  align-self: center;
  @media (min-width: ${(props) => `${props.theme.breakPoints.lg}`}px) {
    direction: ltr;
    margin-left: 52px;
    margin-top: 40px;
    margin-bottom: 40px;
    grid-column: 3;
    grid-row: 3;
  }
  @media (max-width: ${(props) => `${props.theme.breakPoints.lg}`}px) {
    text-align: center;
    margin-top: 48px;
    width: 100%;
    grid-column: 2;
    grid-row: 4;
  }
  @media (max-width: ${(props) => `${props.theme.breakPoints.sm}`}px) {
    margin-top: 40px;
  }
`;

export const AboutIndicatorsBody = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -12px;
  @media (max-width: ${(props) => `${props.theme.breakPoints.xs}`}px) {
    margin: -16px;
  }
`;

export const AboutIndicatorsItem = styled.div`
  margin: 12px;
  width: calc(100% / 3 - 24px);
  @media (max-width: ${(props) => `${props.theme.breakPoints.xs}`}px) {
    margin: 16px;
    width: calc(100% / 1 - 32px);
  }
`;

export const AboutIndicatorsItemValue = styled.div`
  font-size: 48px;
  font-weight: bold;
  line-height: 1;
  @media (max-width: ${(props) => `${props.theme.breakPoints.sm}`}px) {
    font-size: 36px;
  }
`;

export const AboutIndicatorsItemTitle = styled.div`
  color: ${(props) => `${props.theme.colors.listcolor}`};
  font-size: 15px;
  margin-top: 6px;
  line-height: 18px;
`;
