import styled from 'styled-components';

export const BlockBlockTeammates = styled.div``;

export const BlockTeammatesTitle = styled.div`
  font-size: 32px;
  font-weight: ${(props) => `${props.theme.fontWeight.bolder}`};
  text-align: center;
  margin-bottom: 40px;
`;

export const BlockTeammatesSubTitle = styled.div`
  color: ${(props) => `${props.theme.colors.subtitlecolor}`};
  text-align: center;
  margin-bottom: 32px;
  font-size: 15px;
  margin-top: -36px;
`;

export const BlockTeammatesItem = styled.div`
  flex-shrink: 0;
  max-width: 240px;
  margin: 0 auto;
  background-color: ${(props) => `${props.theme.colors.white}`};
  box-shadow: 0 1px 3px ${(props) => `${props.theme.colors.shadowcolor}`};
`;

export const BlockmateInfo = styled.div`
  padding: 14px 16px 16px;
  text-align: center;
`;

export const BlockmatePosition = styled.div`
  font-size: 14px;
  color: ${(props) => `${props.theme.colors.subtitlecolor}`};
`;