import styled from 'styled-components';

export const BlockEmpty = styled.div``;
export const BlockEmptyBody = styled.div`
  text-align: center;
`;

export const BlockEmptyTitle = styled.div`
  margin-top: 12px;
  font-size: 36px;
  font-weight: ${(props) => `${props.theme.fontWeight.medium}`};
`;

export const BlockEmptyMessage = styled.div`
  margin-top: 16px;
`;

export const BlockEmptyAction = styled.div`
  margin-top: 32px;
`;
