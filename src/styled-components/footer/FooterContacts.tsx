import styled from 'styled-components';

export const FooterContactsStyledComponent = styled.div`
  display: block;
`;

export const FooterContactsTitle = styled.h5`
  font-size: 20px;
  color: #fff;
  margin-bottom: 26px;
  font-weight: 500;
  @media (-webkit-max-device-pixel-ratio: 1), (max-resolution: 1dppx) {
    font-weight: 400;
  }
`;

export const FooterContactsText = styled.div`
  line-height: 22px;
  list-style: none;
  margin: 0;
  font-size: 15px;
`;

export const FooterAddress = styled.address`
  font-size: 14px;
  line-height: 20px;
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  line-height: 20px;
  @media (min-width: 1200px) {
    margin: 24px -15px 0;
  }
`;

export const FooterAddressDescriptionList = styled.dl`
  @media (min-width: 1200px) {
    width: calc(100% / 2 - 30px - 1px);
    margin: 0 15px;
    margin-bottom: 18px;
  }
`;

export const FooterAddressDefinitionList = styled.dt`
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  margin-bottom: 2px;
`;

export const FooterAddressDefinitionDescription = styled.dd`
  color: #fff;
  margin: 0;
  font-weight: 500;
  display: block;
 
  @media (-webkit-max-device-pixel-ratio: 1), (max-resolution: 1dppx) {
    font-weight: 400;
  }
`;
