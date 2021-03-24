import styled, { css } from 'styled-components';

export const RatingStyledComponent = styled.div``;

export const RatingBody = styled.div`
  display: flex;
`;

export const RatingStar = styled.div`
  margin-left: 2px;
  width: 13px;
  height: 12px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23d0d5d9' width='13' height='12'%3E%3Cpath d='M6.5,1.5l1.6,3L8.4,5H9h2.4l-2,1.6L8.9,7L9,7.6l0.7,3L7,9.1L6.5,8.9L6,9.1l-2.8,1.5l0.7-3L4.1,7L3.6,6.6L1.6,5 H4h0.6l0.3-0.5L6.5,1.5 M6.5,0C6.3,0,6.1,0.1,6,0.3L4,4H0.5C0,4.1-0.2,4.8,0.2,5.1L3,7.4l-1,4C1.9,11.7,2.2,12,2.5,12 c0.1,0,0.2,0,0.3-0.1L6.5,10l3.7,1.9c0.1,0,0.2,0.1,0.3,0.1c0.3,0,0.6-0.3,0.5-0.6l-1-4l2.8-2.3c0.3-0.3,0.1-1-0.3-1.1H9L7,0.3 C6.9,0.1,6.7,0,6.5,0L6.5,0z'/%3E%3C/svg%3E"),
    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='rgba(0, 0, 0, 0.08)' width='13' height='12'%3E%3Cpath d='M7,0.3L9,4h3.5c0.4,0.1,0.6,0.8,0.3,1.1L10,7.4l1,4c0.1,0.4-0.4,0.8-0.8,0.6L6.5,10l-3.7,1.9c-0.4,0.2-0.9-0.1-0.8-0.6l1-4 L0.2,5.1C-0.2,4.8,0,4.1,0.5,4H4l2-3.7C6.2-0.1,6.8-0.1,7,0.3z'/%3E%3C/svg%3E");
  ${(props: { isActive?: any; key?: number }) =>
    props.isActive &&
    css`
      width: 13px;
      height: 12px;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='rgba(0, 0, 0, 0.08)' width='13' height='12'%3E%3Cpath d='M6.5,1.5l1.6,3L8.4,5H9h2.4l-2,1.6L8.9,7L9,7.6l0.7,3L7,9.1L6.5,8.9L6,9.1l-2.8,1.5l0.7-3L4.1,7L3.6,6.6L1.6,5 H4h0.6l0.3-0.5L6.5,1.5 M6.5,0C6.3,0,6.1,0.1,6,0.3L4,4H0.5C0,4.1-0.2,4.8,0.2,5.1L3,7.4l-1,4C1.9,11.7,2.2,12,2.5,12 c0.1,0,0.2,0,0.3-0.1L6.5,10l3.7,1.9c0.1,0,0.2,0.1,0.3,0.1c0.3,0,0.6-0.3,0.5-0.6l-1-4l2.8-2.3c0.3-0.3,0.1-1-0.3-1.1H9L7,0.3 C6.9,0.1,6.7,0,6.5,0L6.5,0z'/%3E%3C/svg%3E"),
        url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23ffd333' width='13' height='12'%3E%3Cpath d='M7,0.3L9,4h3.5c0.4,0.1,0.6,0.8,0.3,1.1L10,7.4l1,4c0.1,0.4-0.4,0.8-0.8,0.6L6.5,10l-3.7,1.9c-0.4,0.2-0.9-0.1-0.8-0.6l1-4 L0.2,5.1C-0.2,4.8,0,4.1,0.5,4H4l2-3.7C6.2-0.1,6.8-0.1,7,0.3z'/%3E%3C/svg%3E");
    `}
`;
