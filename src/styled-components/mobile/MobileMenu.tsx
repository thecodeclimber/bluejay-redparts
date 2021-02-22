import styled, { css } from 'styled-components';

export const MobileMenuBase = styled.div`
  visibility: hidden;
  transition: translateX(0) 0s 0.25s;

  ${(props: { isOpen?: boolean }) =>
    props.isOpen &&
    css`
      visibility: visible;
      transition-duration: 0s;

      ${MobileMenuBackdrop} {
        opacity: 1;
      }
      ${MobileMenuBody} {
        transform: translateX(0);
      }
    `}
`;

export const MobileMenuBackdrop = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  background-color: rgba(51, 51, 51, 0.8);
  opacity: 0;
  will-change: opacity;
  transition: opacity 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94);
`;

export const MobileMenuBody = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  z-index: 1000;
  width: 300px;
  overflow: hidden;
  transform: translateX(-100%);
  transition: transform 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94);
`;

export const MobileMenuClose = styled.button`
    position: absolute;
    top: 0;
    right: 0;
    width: 48px;
    height: 50px;
    display: -moz-box;
    display: flex;
    -moz-box-align: center;
    align-items: center;
    -moz-box-pack: center;
    justify-content: center;
    z-index: 2;
    border: none;
    padding: 0;
    fill: currentColor;
    transition: background-color 0.15s, color 0.15s;
    background-color: #fff;
    color: #ccc;
    cursor: pointer

    &:hover {
      background-color: #ebebeb;
      color: #4d4d4d;
    }
    &:active{
        background-color: #ebebeb;
        color: #4d4d4d;
    }
    &:focus {
      outline: none;
    }   
`;

export const MobileMenuDivider = styled.div`
  flex-shrink: 0;
  height: 1px;
  background: #ebebeb;
`;

export const MobileMenuContactsTitle = styled.div`
  font-size: 18px;
  font-weight: $font-weight-medium;
`;

export const MobileMenuContactsSubTitle = styled.div`
  font-size: 13px;
  color: #999;
`;

export const MobileMenuSpring = styled.div`
  flex-grow: 1;
`;

export const MobileMenuContacts = styled.a`
  text-align: center;
  padding: 16px 20px 14px;
  transition: background 0.2s;
  color: #262626;
  &:hover {
    background: #f2f2f2;
    color: #262626;
  }
`;
