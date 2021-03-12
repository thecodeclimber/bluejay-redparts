import styled, { css } from 'styled-components';
export const SocialLinksList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: -4px;
`;

export const SocialLinksItem = styled.li`
  margin: 4px;
`;

const rssLink = css`
  background-color: ${(props) => `${props.theme.colors.rss}`};
`;
const youtubeLink = css`
  color: ${(props) => `${props.theme.colors.white}`};
  background-color: ${(props) => `${props.theme.colors.youtube}`};
`;
const facebookLink = css`
  color: ${(props) => `${props.theme.colors.white}`};
  background-color: ${(props) => `${props.theme.colors.facebook}`};
`;
const twitterLink = css`
  color: ${(props) => `${props.theme.colors.white}`};
  background-color: ${(props) => `${props.theme.colors.twitter}`};
`;
const instagramLink = css`
  color: ${(props) => `${props.theme.colors.white}`};
  background-color: ${(props) => `${props.theme.colors.instagram}`};
`;

const socialLink = (props: any) => {
  if (props.linkName === 'rss') {
    return rssLink;
  }
  if (props.linkName === 'youtube') {
    return youtubeLink;
  }
  if (props.linkName === 'facebook') {
    return facebookLink;
  }
  if (props.linkName === 'twitter') {
    return twitterLink;
  }
  if (props.linkName === 'instagram') {
    return instagramLink;
  }
};

export const SocialLinkItem = styled.div`
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  ${(props: { linkName?: string }) =>
    props.linkName &&
    css`
      border-radius: 50%;
      margin: 4px;
      ${socialLink}
      &:hover {
        opacity: 0.8;
      }
    `};
`;

export const SocialIcon = styled.i`
  font-size: 16px;
  color: ${(props) => `${props.theme.colors.white}`};
`;
