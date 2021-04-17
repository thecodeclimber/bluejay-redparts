import React, { useState } from 'react';
// application
import {
  InputRadioLabelItem,
  InputRadioLabelInput,
  InputRadioLabelTitle,
  InputRadioLabelList,
} from '~/styled-components/shop/ProductForm';
import AppLink from '~/components/shared/AppLink';
import { Tags, TagList } from '~/styled-components/components/Tag';
import { WidgetCategoriesListShowMoreButton } from '~/styled-components/widget/WidgetCategoriesList';
interface Props {
  options: any;
}

function FilterThreadLength(props: Props) {
  const { options } = props;
  const [itemsToShow, setItemsToShow] = useState(10);
  const [metricToShow, setMetricToShow] = useState(10);
  const [selectedItem, setSelectedItem] = useState<any[]>([]);
  const [expend, setExpend] = useState(true);
  const [expendMetric, setExpendMetric] = useState(true);

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

  const handleMetricToShow = () => {
    if (metricToShow === options.metric.length) {
      setMetricToShow(10);
      setExpendMetric(true);
    } else if (metricToShow >= 10 && metricToShow <= options.metric.length) {
      setMetricToShow(metricToShow + 10);
      setExpendMetric(true);
    } else if (metricToShow >= options.metric.length) {
      setMetricToShow(options.metric.length);
      setExpendMetric(false);
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

  return (
    <div>
      <p>Length</p>
      <InputRadioLabelList>
        {options.length
          .filter((item: any, idx: any) => idx < itemsToShow)
          .map((item: any, index: number) => (
            <InputRadioLabelItem key={index}>
              <InputRadioLabelInput onClick={() => handleSelect(index)} />
              <InputRadioLabelTitle selected={selectedItem.includes(index)}>
                {item}
              </InputRadioLabelTitle>
            </InputRadioLabelItem>
          ))}
        <div>
          {options.length?.length > 10 && (
            <WidgetCategoriesListShowMoreButton
              onClick={() => {
                handleItemsToShow();
              }}
            >
              {expend ? <p>Show more</p> : <p>Show less</p>}
            </WidgetCategoriesListShowMoreButton>
          )}
        </div>
      </InputRadioLabelList>
      <p>Metric</p>
      <Tags>
        <TagList>
          {options.metric
            .filter((item: any, idx: any) => idx < metricToShow)
            .map((item: any, index: number) => (
              <AppLink href="#!" key={index}>
                {item}
              </AppLink>
            ))}
        </TagList>
        <div>
          {options.metric?.length > 10 && (
            <WidgetCategoriesListShowMoreButton
              onClick={() => {
                handleMetricToShow();
              }}
            >
              {expendMetric ? <p>Show more</p> : <p>Show less</p>}
            </WidgetCategoriesListShowMoreButton>
          )}
        </div>
      </Tags>
    </div>
  );
}

export default FilterThreadLength;
