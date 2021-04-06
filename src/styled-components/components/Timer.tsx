import styled from 'styled-components';

export const OfferTimer = styled.div`
  display: flex;
`;

export const TimerPart = styled.div`
  border-radius: 2px;
  width: 50px;
  line-height: 1;
  padding: 8px 0;
  text-align: center;
  background: ${(props) => `${props.theme.colors.OfferBg}`};
  color: ${(props) => `${props.theme.colors.selectfontcolor}`};
  @media (max-width: ${(props) => `${props.theme.breakPoints.sm}`}px) {
    width: 40px;
    padding: 5px 0 6px;
  }
`;

export const TimerPartValue = styled.div`
  font-size: 24px;
  font-weight: ${(props) => `${props.theme.fontWeight.bolder}`};
  letter-spacing: 0.04em;
  @media (max-width: ${(props) => `${props.theme.breakPoints.sm}`}px) {
    font-size: 20px;
  }
`;

export const TimerPartValueDays = styled(TimerPartValue)``;

export const TimerPartValueHours = styled(TimerPartValue)``;

export const TimerPartValueMinutes = styled(TimerPartValue)``;

export const TimerPartValueSeconds = styled(TimerPartValue)``;

export const TimerPartLabel = styled.div`
  font-size: 10px;
  text-transform: uppercase;
  margin-top: 4px;
  color: ${(props) => `${props.theme.colors.timerlabelcolor}`};
  @media (max-width: ${(props) => `${props.theme.breakPoints.sm}`}px) {
    font-size: 9px;
    margin-top: 3px;
  }
`;

export const TimerDots = styled.div`
  width: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &:before,
  &:after {
    display: block;
    content: '';
    width: 4px;
    height: 4px;
    background: ${(props) => `${props.theme.colors.btnafterbgcolor}`};
    border-radius: 2px;
    margin: 4px 0;
  }
  @media (max-width: ${(props) => `${props.theme.breakPoints.sm}`}px) {
    font-size: 9px;
    margin-top: 3px;
    width: 18px;
    &:before,
    &:after {
      width: 3px;
      height: 3px;
      border-radius: 1.5px;
    }
  }
`;