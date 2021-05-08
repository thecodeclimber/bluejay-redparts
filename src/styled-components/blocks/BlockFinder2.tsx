import styled from 'styled-components';
import Decor from '~/components/shared/Decor';
import VehicleSelect from '~/components/shared/VehicleSelect';

export const BlockFinderStyledComponent = styled.div`
  position: relative;
  height: 500px;
  overflow: hidden;
  padding-top: 24px;
  padding-bottom: 60px;
  display: flex;
  align-items: center;
  background: ${(props) => `${props.theme.colors.blockFinderBgColor}`};
`;

export const BlockFinderImage = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-size: cover;
  background-position: center center;
  z-index: 1;
  opacity: 0.22;
`;

export const BlockFinderDecor = styled(Decor)`
  position: absolute;
  bottom: -1px;
  z-index: 2;
`;

export const BlockFinderBody = styled.div`
  color: ${(props) => `${props.theme.colors.white}`};
  text-align: center;
  z-index: 2;
`;

export const BlockFinderTitle = styled.div`
  font-size: 48px;
  font-weight: ${(props) => `${props.theme.fontWeight.medium}`};
  text-shadow: ${(props) => `${props.theme.boxShadow.blockFinderTextShadow}`};
  margin: 0;
`;

export const BlockFinderSubtitle = styled.div`
  margin: 0 0 60px;
  font-size: 18px;
  text-shadow: ${(props) => `${props.theme.boxShadow.blockFinderTextShadow}`};
`;

export const BlockFinderForm = styled.form`
  display: flex;
  align-items: center;
  margin: -7px;
`;

export const BlockFinderSelect = styled(VehicleSelect)`
  width: 100%;
  margin: 7px;
`;

export const BlockFinderButton = styled.button`
  height: 44px;
  min-height: 44px;
  border-radius: 2px;
  border: none;
  padding: 0 40px;
  transition: background 0.2s, color 0.2s;
  background-color: ${(props) => `${props.theme.colors.primary}`};
  color: ${(props) => `${props.theme.colors.white}`};
  &:hover {
    background-color: ${(props) => `${props.theme.colors.grey}`};
    color: ${(props) => `${props.theme.colors.white}`};
  }
`;
