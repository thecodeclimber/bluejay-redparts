import styled from 'styled-components';

export const NotFound = styled.div`
  text-align: center;
  padding: 36px 0;
`;

export const NotFound404 = styled.div`
  font-size: 80px;
  font-weight: ${(props) => `${props.theme.fontWeight.bolder}`};
  color: ${(props) => `${props.theme.colors.bordercolor}`};
  padding: 20px 0 4px;
  @media (max-width: ${(props) => `${props.theme.breakPoints.sm}`}px) {
    font-size: 50px;
    line-height: 54px;
    padding: 40px 0 32px;
  }
  @media (max-width: ${(props) => `${props.theme.breakPoints.md}`}px) {
    font-size: 60px;
  }
`;

export const NotFoundContent = styled.div`
  width: 480px;
  max-width: 100%;
  margin: 0 auto;
`;

export const NotFoundTitle = styled.div`
  margin-bottom: 24px;
  font-weight: ${(props) => `${props.theme.fontWeight.bolder}`};
  @media (max-width: ${(props) => `${props.theme.breakPoints.sm}`}px) {
    margin-bottom: 20px;
  }
`;

export const NotFoundText = styled.div`
  margin-bottom: 20px;
`;

export const NotFoundSearch = styled.div`
  display: flex;
  margin-bottom: 30px;
`;

export const NotFoundSearchInput = styled.div`
  direction: ltr;
  margin-right: 10px;
  width: 1px;
  flex-grow: 1;
`;
