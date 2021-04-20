import styled from 'styled-components';

export const Dashboard = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const DashboardOrders = styled.div`
  margin-top: 24px;
  width: 100%;
`;

export const DashboardProfile = styled.div`
  @media (min-width: 768px) {
    width: calc(50% - 12px);
  }
  @media (max-width: 767.98px) {
    width: 100%;
  }
`;

export const DashboardAddress = styled.div`
  @media (min-width: 768px) {
    width: calc(50% - 12px);
  }
  @media (max-width: 767.98px) {
    margin-top: 24px;
    width: 100%;
  }
`;
