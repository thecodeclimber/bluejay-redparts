import styled, { css } from 'styled-components';

export const FooterNewsLetter = styled.div`
  display: block;
  @media (max-width: 767.98px) {
    text-align: center;
    margin-top: 28px;
  }
`;

export const FooterNewsLetterTitle = styled.h5`
  font-size: 20px;
  color: #fff;
  margin-bottom: 26px;
  font-weight: 400;
  @media (max-width: 767.98px) {
    font-size: 24px;
    margin-bottom: 16px;
  }
`;

export const FooterNewsLetterText = styled.div`
  font-size: 15px;
  line-height: 22px;
  margin-bottom: 14px;
`;

export const FooterNewsLetterForm = styled.form`
  display: flex;
  max-width: 380px;
  @media (max-width: 767.98px) {
    margin: 0 auto;
  }
`;

export const FooterNewsLetterFormInput = styled.input`
  flex-shrink: 1;
  border-radius: 2px;
  font-size: 15px;
  height: 38px;
  padding: 0 12px;
  flex-basis: 0;
  min-width: 0;
  flex-grow: 1;
  font-family: inherit;
  border-width: 2px;
  border-style: solid;
  background-clip: padding-box;
  transition: border 0.2s, background 0.2s;
  color: #fff;
  background-color: #4c4c4c;
  border-color: #4c4c4c;
  &:hover {
    background-color: rgba(255, 255, 255, 0.16);
    border-color: rgba(24, 11, 11, 0.16);
  }
  &:focus {
    outline: none;
    background-color: transparent;
    border-color: rgba(255, 255, 255, 0.16);
  }
`;

export const FooterNewsLetterFormButton = styled.button`
  flex-shrink: 0;
  border-radius: 2px;
  border: none;
  padding: 0 20px;
  font-family: inherit;
  font-size: 15px;
  transition: background 0.2s, color 0.2s;
  background-color: #1e74df;
  color: #fff;
  margin-left: 8px;
  &:hover {
    background-color: rgba(255, 255, 255, 0.16);
    border-color: rgba(255, 255, 255, 0.16);
  }
  &:active {
    transition-duration: 0.1s, 0.1s;
    background-color: #4c4c4c;
    color: #fff;
  }
  &:focus {
    outline: none;
  }
`;

export const FooterNewsLetterSocialLinks = styled.div`
  margin-top: 8px;
  @media (max-width: 767.98px) {
    margin-top: 12px;
    display: flex;
    justify-content: center;
  }
`;

export const SocialLinksList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: -4px;
`;

export const FooterNewsLetterTextSocial = styled.div`
  margin-top: 20px;
  margin-bottom: 0;
  font-size: 15px;
  line-height: 22px;
`;

export const SocialLinksItems = styled.li`
  margin: 4px;
  ${(props: { link?: string }) => {
    if (props.link === 'facebook') {
      return css`
        background: #3c5a99;
        color: #fff;
        border-radius: 50%;
      `;
    }
    if (props.link === 'twitter') {
      return css`
        background: #00a2e8;
        color: #fff;
        border-radius: 50%;
      `;
    }

    if (props.link === 'youtube') {
      return css`
        background: #e52e2e;
        color: #fff;
        border-radius: 50%;
      `;
    }

    if (props.link === 'instagram') {
      return css`
        background: #815dc7;
        color: #fff;
        border-radius: 50%;
      `;
    }

    if (props.link === 'rss') {
      return css`
        background: #ffc338;
        color: #664729;
        border-radius: 50%;
      `;
    }
  }}

  > a {
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: inherit;
    width: 36px;
    height: 36px;
    transition: all 0.2s;
  }
  &:hover {
    opacity: 0.8;
  }
`;
