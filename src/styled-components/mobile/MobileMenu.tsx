import styled from 'styled-components';

export const MobileMenuDivider = styled.div`
  flex-shrink: 0;
  height: 1px;
  background: #ebebeb;
`;

export const MobileMenuSpring = styled.div`
  flex-grow: 1;
`;

export const MobileMenuContactsTitle = styled.div`
  font-size: 18px;
  font-weight: 500;
`;

export const MobileMenuContactsSubtitle = styled.div`
  font-size: 13px;
  color: #999;
`;

export const MobileMenuContacts = styled.a`
  text-align: center;
  padding: 16px 20px 14px;
  transition: background 0.2s;
  color: #262626;

  &:hover {
    color: #262626;
    background: #f2f2f2;
  }
`;

export const MobileMenuBackdrop = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  background: rgba(51, 51, 51, 0.8);
  opacity: 1;
  will-change: opacity;
  transition: opacity 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94);
`;


