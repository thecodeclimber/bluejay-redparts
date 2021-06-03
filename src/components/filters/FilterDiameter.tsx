import React, { useState, useEffect } from 'react';
// application
import { useRouter } from 'next/router';
import AppLink from '~/components/shared/AppLink';
import {
  InputRadioLabelItem,
  InputRadioLabelInput,
  InputRadioLabelTitle,
  InputRadioLabelList,
} from '~/styled-components/shop/ProductForm';
import { WidgetCategoriesListShowMoreButton } from '~/styled-components/widget/WidgetCategoriesList';

function FilterDiameter(props: any) {
  const { options } = props;
  const router = useRouter();
  const [itemsToShow, setItemsToShow] = useState(10);
  const [selectedItem, setSelectedItem] = useState<any[]>([]);
  const [expend, setExpend] = useState(true);

  const handleItemsToShow = () => {
    if (itemsToShow === options.values.length) {
      setItemsToShow(10);
      setExpend(true);
    } else if (itemsToShow >= 10 && itemsToShow <= options.values.length) {
      setItemsToShow(itemsToShow + 10);
      setExpend(true);
    } else if (itemsToShow >= options.values.length) {
      setItemsToShow(options.values.length);
      setExpend(false);
    }
  };

  const handleSelect = (index: number) => {
    const items = [...selectedItem];
    const isSelected: boolean = items.includes(index);
    if (isSelected) {
      const result = items.filter((id) => id !== index);
      return setSelectedItem(result);
    }
    return setSelectedItem([...items, index]);
  };

  useEffect(() => {
    let queryArray: any = [];
    selectedItem.forEach((index) => {
      queryArray.push(options.values[index].value);
    });
    router.push({ query: { diameter: `${queryArray}` } }, undefined, {
      shallow: true,
    });
  }, [selectedItem.length]);

  return (
    <div>
      <InputRadioLabelList>
        {options.values
          .filter((item: any, idx: any) => idx < itemsToShow)
          .map((item: any, index: any) => (
            <InputRadioLabelItem key={index}>
              <InputRadioLabelInput
                onClick={() => {
                  handleSelect(index);
                }}
              />
              <InputRadioLabelTitle selected={selectedItem.includes(index)}>
                {item.value}
              </InputRadioLabelTitle>
            </InputRadioLabelItem>
          ))}
        <div>
          <WidgetCategoriesListShowMoreButton
            onClick={() => {
              handleItemsToShow();
            }}
          >
            {expend ? <p>Show more</p> : <p>Show less</p>}
          </WidgetCategoriesListShowMoreButton>
        </div>
      </InputRadioLabelList>
    </div>
  );
}

export default FilterDiameter;
