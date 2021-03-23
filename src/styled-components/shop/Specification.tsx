import styled from 'styled-components';

export const Spec = styled.div`
  font-size: 14px;
  line-height: 18px;
`;
export const SpecSection = styled.div`
  & + & {
    margin-top: 40px;
  }
`;

export const SpecSectionTitle = styled.h4`
  font-weight: ${(props) => `${props.theme.fontWeight.medium}`};
  font-size: 17px;
  letter-spacing: -0.03em;
  line-height: 20px;
  margin: 0 0 12px;
`;

export const SpecRow = styled.div`
  padding: 8px 0;
  display: flex;
  border-bottom: 1px solid ${(props) => `${props.theme.colors.bordercolor}`};
  &:first-of-type {
    border-top: 1px solid ${(props) => `${props.theme.colors.bordercolor}`};
  }
  @media (max-width: 575.98px) {
    display: block;
    padding: 8px 0;
  }
`;

export const SpecName = styled.div`
  width: 230px;
  flex-shrink: 0;
  color: ${(props) => `${props.theme.colors.subtitilecolor}`};
  padding-right: 30px;
  @media (max-width: 575.98px) {
    width: auto;
    margin-bottom: 2px;
    text-transform: uppercase;
    font-size: 11px;
    line-height: 15px;
  }
`;

export const SpecValue = styled.div``;

export const SpecDisclaimer = styled.div`
  margin-top: 40px;
  font-size: 13px;
  line-height: 20px;
  color: ${(props) => `${props.theme.colors.subtitilecolor}`};
  @media (max-width: 575.98px) {
    margin-top: 28px;
  }
`;