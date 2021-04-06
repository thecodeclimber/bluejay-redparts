// react
import React from 'react';
// third-party
import classNames from 'classnames';
// application
import useVehicleForm from '~/services/forms/vehicle';
import { IVehicle } from '~/interfaces/vehicle';
import {
  VehicleVehicleSelect,
  VehicleSelectList,
  VehicleSelectItem,
  VehicleSelectItemControl,
  VehicleSelectItemLoader,
} from '~/styled-components/components/VehicleSelect';

interface Props extends React.HTMLAttributes<HTMLElement> {
  onVehicleChange?: (event: IVehicle | null) => void;
}

function VehicleSelect(props: Props) {
  const { onVehicleChange, className, ...rootProps } = props;
  const rootClasses = classNames(className);
  const form = useVehicleForm({
    onChange: onVehicleChange,
  });

  return (
    <VehicleVehicleSelect className={rootClasses} {...rootProps}>
      <VehicleSelectList>
        {form.items.map((item, itemIdx) => {
          const options = item.options as Array<number | string | IVehicle>;

          return (
            <VehicleSelectItem loading={item.loading ? 1 : 0} key={itemIdx}>
              <VehicleSelectItemControl
                aria-label={item.label}
                name={item.key}
                value={item.value}
                disabled={item.disabled}
                onChange={(e) =>
                  form.onItemValueChange(itemIdx, e.target.value)
                }
              >
                <option value="none">{item.placeholder}</option>
                {options.map((option, optionIdx) => (
                  <option
                    key={optionIdx}
                    value={form.serializeOption(option, item)}
                  >
                    {form.serializeOption(option, item)}
                  </option>
                ))}
              </VehicleSelectItemControl>
              <VehicleSelectItemLoader />
            </VehicleSelectItem>
          );
        })}
      </VehicleSelectList>
    </VehicleVehicleSelect>
  );
}

export default VehicleSelect;
