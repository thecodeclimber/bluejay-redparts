import styled from 'styled-components';

export const ProfileCard = styled.div``;

export const ProfileCardBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ProfileCardAvatar = styled.div`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  margin-bottom: 16px;

  img {
    border-radius: 50%;
    max-width: 100%;
  }
`;

export const ProfileCardName = styled.div`
  font-weight: ${(props) => `${props.theme.fontWeight.medium}`};
  line-height: 20px;
`;

export const ProfileCardEmail = styled.div`
  font-size: 15px;
  margin-bottom: 24px;
`;
