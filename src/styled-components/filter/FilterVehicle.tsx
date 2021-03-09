import styled from 'styled-components';
import Checkbox from '~/components/shared/Checkbox';

export const FilterVehicleList = styled.ul`
  margin: -8px 0;
  padding: 0;
  list-style: none;
`;

export const FilterVehicleItemLabel = styled.label`
  padding: 1px 0;
  cursor: pointer;
  display: flex;
  margin: 8px 0;
`;

export const FilterVehicleCheckbox = styled(Checkbox)`
  direction: ltr;
  margin-right: 7px;
`;

export const FilterVehicleEmpty = styled.ul`
  font-size: 15px;
  line-height: 19px;
`;

export const FilterVehicleButton = styled.div`
  padding-top: 14px;
`;

export const FilterVehicleItemTitle = styled.div`
  padding: 1px 0;
  font-size: 14px;
  line-height: 16px;
  flex-grow: 1;
  transition: color 0.2s;
`;

export const FilterVehicleVehicle = styled.li`
  border: 1px solid #ebebeb;
  border-radius: 2px;
  padding: 6px 9px;
  line-height: 1.375;
  margin-bottom: 6px;
`;

export const FilterVehicleVehicleTitle = styled.div`
  font-size: 14px;
  font-weight: 500;
`;

export const FilterVehicleVehicleSubTitle = styled.div`
  font-size: 13px;
  color: #999;
`;

export const FilterVehicleDiv = styled.div``;
