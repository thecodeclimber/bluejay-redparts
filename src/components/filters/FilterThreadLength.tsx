import React, { useState } from 'react';
// application
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

function FilterThreadLength(props: Props) {
  const { options } = props;
  const [itemsToShow, setItemsToShow] = useState(10);
  const [expend, setExpend] = useState(true);

  const handleItemsToShow = () => {
    if (itemsToShow === options.length.length) {
      setItemsToShow(10);
      setExpend(true);
    } else if (itemsToShow >= 10 && itemsToShow <= options.length.length) {
      setItemsToShow(itemsToShow + 10);
      setExpend(true);
    } else if (itemsToShow >= options.length.length) {
      setItemsToShow(options.length.length);
      setExpend(false);
    }
  };

  return (
    <div>
      <InputRadioLabelList>
        {options.length
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

export default FilterThreadLength;
