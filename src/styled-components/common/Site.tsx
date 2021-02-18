import styled from 'styled-components';

export const Site = styled.div`
  height: 100%;
`;

export const SiteContainer = styled.div`
min-height: 100%;
display: flex;
flex-direction: column;
overflow: hidden;
`;

export const SiteBody = styled.div`
flex-grow: 1;
`;

export const SiteFooter = styled.footer`
flex-shrink: 0;
`;

export const SiteHeader = styled.header`
flex-shrink: ${(props: { mobile?: boolean }) => (props.mobile ? '' : 0)};
`;
