import styled from 'styled-components';

const SiteHeader = styled.header`
  flex-shrink: ${(props: { mobile?: boolean }) => (props.mobile ? '' : 0)};
`;

export default SiteHeader;
