import React, { useState } from 'react';
// application
import AppLink from '~/components/shared/AppLink';
import {
  InputRadioLabelItem,
  InputRadioLabelInput,
  InputRadioLabelTitle,
  InputRadioLabelList,
} from '~/styled-components/shop/ProductForm';
import { WidgetCategoriesListShowMoreButton } from '~/styled-components/widget/WidgetCategoriesList';
interface Props {
  options: any;
}

function FilterDiameter(props: Props) {
  const { options } = props;
  const [itemsToShow, setItemsToShow] = useState(10);
  const [expend, setExpend] = useState(true);

  const handleItemsToShow = () => {
    if (itemsToShow === options.items.length) {
      setItemsToShow(10);
      setExpend(true);
    } else if (itemsToShow >= 10 && itemsToShow <= options.items.length) {
      setItemsToShow(itemsToShow + 10);
      setExpend(true);
    } else if (itemsToShow >= options.items.length) {
      setItemsToShow(options.items.length);
      setExpend(false);
    }
  };

  return (
    <div>
      <InputRadioLabelList>
        {options.items
          .filter((item: any, idx: any) => idx < itemsToShow)
          .map((item: any, index: number) => (
            <InputRadioLabelItem key={index}>
              <InputRadioLabelInput type="radio" />
              <InputRadioLabelTitle>{item}</InputRadioLabelTitle>
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
