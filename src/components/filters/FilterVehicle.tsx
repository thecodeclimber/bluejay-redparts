// react
import React, { useEffect, useState } from 'react';
// third-party
import { FormattedMessage } from 'react-intl';
// application
import {
  FilterVehicleEmpty,
  FilterVehicleButton,
  FilterVehicleList,
  FilterVehicleItemLabel,
  FilterVehicleCheckbox ,
  FilterVehicleItemTitle ,
  FilterVehicleVehicle ,
  FilterVehicleVehicleTitle ,
  FilterVehicleVehicleSubTitle ,
  FilterVehicleDiv
} from '~/styled-components/filter/FilterVehicle';
import Checkbox from '~/components/shared/Checkbox';
import VehiclePickerModal from '~/components/shared/VehiclePickerModal';
import { IVehicle } from '~/interfaces/vehicle';
import { IVehicleFilter, IVehicleFilterValue } from '~/interfaces/filter';
import { useCurrentVehicle } from '~/services/current-vehicle';

interface Props {
  options: IVehicleFilter;
  value: IVehicleFilterValue;
  onChangeValue?: (event: {
    filter: IVehicleFilter;
    value: IVehicleFilterValue;
  }) => void;
}

function FilterVehicle(props: Props) {
  const { options, value, onChangeValue } = props;
  const [currentVehicle, setCurrentVehicle] = useCurrentVehicle();
  const [vehiclePickerIsOpen, setVehiclePickerIsOpen] = useState(false);
  const [initialVehicle] = useState(options.vehicle);

  const updateValue = (newValue: IVehicleFilterValue) => {
    if (onChangeValue) {
      onChangeValue({ filter: options, value: newValue });
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked && currentVehicle) {
      updateValue(currentVehicle.id);
    } else {
      updateValue(null);
    }
  };

  const showVehiclePicker = () => {
    setVehiclePickerIsOpen(true);
  };

  const onVehiclePickerClose = () => {
    setVehiclePickerIsOpen(false);
  };

  const onVehiclePickerSelect = (selectedVehicle: IVehicle | null) => {
    setCurrentVehicle(selectedVehicle || null);

    if (value !== null) {
      updateValue(selectedVehicle?.id || null);
    }
  };

  useEffect(() => {
    if (initialVehicle === null) {
      return;
    }

    setTimeout(() => {
      setCurrentVehicle(initialVehicle || null);
    }, 0);
  }, [setCurrentVehicle, initialVehicle]);

  return (
    <FilterVehicleDiv >
      <VehiclePickerModal
        value={currentVehicle}
        isOpen={vehiclePickerIsOpen}
        onClose={onVehiclePickerClose}
        onSelect={onVehiclePickerSelect}
      />

      {currentVehicle !== null && (
        <FilterVehicleList>
          <li>
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <FilterVehicleItemLabel>
              <FilterVehicleCheckbox
                checked={value !== null}
                onChange={handleChange}
              />
              <FilterVehicleItemTitle >
                <FormattedMessage id="INPUT_ONLY_EXACT_FIT_PARTS_LABEL" />
              </FilterVehicleItemTitle>
            </FilterVehicleItemLabel>
          </li>
          <FilterVehicleVehicle >
            <FilterVehicleVehicleTitle >
              {`${currentVehicle.year} ${currentVehicle.make} ${currentVehicle.model}`}
            </FilterVehicleVehicleTitle>
            <FilterVehicleVehicleSubTitle >
              {currentVehicle.engine}
            </FilterVehicleVehicleSubTitle>
          </FilterVehicleVehicle>
        </FilterVehicleList>
      )}
      {currentVehicle === null && (
        <FilterVehicleEmpty>
          <FormattedMessage id="TEXT_VEHICLE_FILTER_HELP" />
        </FilterVehicleEmpty>
      )}

      <FilterVehicleButton>
        <button
          type="button"
          className="btn btn-xs btn-secondary"
          onClick={showVehiclePicker}
        >
          <FormattedMessage id="BUTTON_SELECT_VEHICLE" />
        </button>
      </FilterVehicleButton>
    </FilterVehicleDiv>
  );
}

export default FilterVehicle;
