// react
import React, { useState, useEffect } from 'react';
// third-party
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { useIntl } from 'react-intl';
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
  const intl = useIntl();
  const categories: any = useSelector((state: any) => state.categories);
  const attributes: any = useSelector((state: any) => state.attributes);

  const [category, setCategoryName] = useState({ id: '', name: '' });
  const rootClasses = classNames(className);
  const form = useVehicleForm({
    onChange: onVehicleChange,
  });
  const [itemList, setItemList] = useState<any>([]);
  console.log('categories', categories);
  console.log('attributes', attributes);

  // useEffect(() => {
  //   let data: any = [...categories.categories];
  //   let items: any = [...itemList];

  //   // setItems(data);
  // }, [categories.categories]);

  // console.log('form', form);

  const handleChange = (item: any) => {
    console.log('item', item);
    setCategoryName({ id: item._id, name: item.name });
  };
  console.log('categoryName', category.name);

  return (
    <VehicleVehicleSelect className={rootClasses} {...rootProps}>
      <VehicleSelectList>
        <VehicleSelectItem>
          <VehicleSelectItemControl>
            <option value="none">Select Category</option>
            {categories.categories.map((item: any) => (
              <option key={item._id}>{item.name}</option>
            ))}
          </VehicleSelectItemControl>
          <VehicleSelectItemLoader />
        </VehicleSelectItem>
        <VehicleSelectItem>
          <VehicleSelectItemControl>
            <option value="none">Select Category</option>
            {categories.categories.map((category: any) => {
              return category.sub_categories.map((item: any) => (
                <option key={item._id}>{item.name}</option>
              ));
            })}
          </VehicleSelectItemControl>
          <VehicleSelectItemLoader />
        </VehicleSelectItem>
        <VehicleSelectItem>
          <VehicleSelectItemControl></VehicleSelectItemControl>
          <VehicleSelectItemLoader />
        </VehicleSelectItem>
        <VehicleSelectItem>
          <VehicleSelectItemControl></VehicleSelectItemControl>
          <VehicleSelectItemLoader />
        </VehicleSelectItem>
      </VehicleSelectList>
    </VehicleVehicleSelect>
  );
}

export default VehicleSelect;
