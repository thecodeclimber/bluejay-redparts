import styled from 'styled-components';

export const HeaderStyledComponent = styled.div`
  background: #1e74df;
  color: #fff;
  box-shadow: 0 1px 3px rgb(0 0 0 / 9%);
  position: relative;
  z-index: 10;
  display: grid;
  grid-template-columns: calc(100% / 2 - 1350px / 2) min-content auto max-content calc(100% / 2 - 1350px / 2);
  grid-template-rows: 34px auto auto;
  @media (min-width: 1200px) and (max-width: 1399.98px) {
    grid-template-columns: calc(100% / 2 - 1110px / 2) min-content auto max-content calc(100% / 2 - 1110px / 2);
  }
  @media (max-width: 1199.9px) {
    display: none;
  }
`;

export const HeaderSearch = styled.div`
  margin-right: 24px;
  align-self: center;
  grid-column: 3/3;
  grid-row: 2;
`;

export const HeaderIndicator = styled.div`
  align-self: center;
  display: flex;
  justify-content: flex-end;
  padding: 16px 0;
  grid-column: 4;
  grid-row: 2;
`;

export const HeaderLogo = styled.div`
  margin-right: 24px;
  grid-column: 2;
  grid-row: 2;
  @media (min-width: 1200px) and (max-width: 1399.98px) {
    min-width: 210px;
  }
`;

export const HeaderNavbar = styled.div`
  height: 46px;
  padding-top: 0;
  padding-bottom: 0;
  background: #fff;
  color: #262626;
  align-self: center;
  display: flex;
  align-items: center;
  grid-column: 1/6;
  grid-row: 3;
  padding: 7px calc((100% - 1350px) / 2);
  @media (min-width: 1200px) and (max-width: 1399.98px){
    padding: 7px calc((100% - 1110px) / 2);
  }
}
`;

export const HeaderNavbarDepartments = styled.div`
  margin-right: 24px;
  position: relative;
  display: flex;
  height: 100%;
`;

export const HeaderNavbarMenu = styled.div`
  flex-grow: 1;
  height: 100%;
`;

export const HeaderNavbarPhone = styled.div`
  height: 100%;
`;

export const PhoneBody = styled.a`
  border-radius: 0;
  display: flex;
  align-items: center;
  color: #262626;
  line-height: 1;
  height: 100%;
  padding: 4px 11px;
  border-radius: 2px;
  transition: background 0.12s;
  font-size: 17px;
  &:hover {
    background: #f2f2f2;
    color: #262626;
  }
`;

export const PhoneTitle = styled.div`
  font-size: 15px;
  margin-top: 1px;
  margin-right: 5px;
  color: #999;
`;

export const PhoneNumber = styled.div`
  font-weight: 500;
`;

export const HeaderMegamenuArea = styled.div`
  grid-column: 2/5;
  grid-row: 1;
`;

export const HeaderTopbarClassic = styled.div`
  grid-column: 2/5;
  grid-row: 1;
`;

export const HeaderTopbarClassicBg = styled.div`
  background: #333;
  grid-column: 1/6;
  grid-row: 1;
`;

export const HeaderTopbarSpaceshipStart = styled.div`
  grid-column: 2;
  grid-row: 1;
  z-index: 1;
  padding-right: 20px;
`;

export const HeaderTopbarSpaceshipStartBg = styled.div`
  grid-column: 1 / 3;
  grid-row: 1;
  height: 100%;
  overflow: hidden;

  &:before {
    display: block;
    content: '';
    width: 100%;
    height: 100%;
  }
`;

export const HeaderTopbarSpaceshipEnd = styled.div`
  grid-column: 4;
  grid-row: 1;
  z-index: 1;
  padding-left: 20px;
`;

export const HeaderTopbarSpaceshipEndBg = styled.div`
  grid-column: 4 / 6;
  grid-row: 1;
  height: 100%;
  overflow: hidden;

  &:before {
    display: block;
    content: '';
    width: 100%;
    height: 100%;
  }
`;
