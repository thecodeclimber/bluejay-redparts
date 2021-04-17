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

function FilterThreadSize(props: Props) {
  const { options } = props;
  const [selectedItem, setSelectedItem] = useState<any[]>([]);
  const [sizeToShow, setSizeToShow] = useState(10);
  const [metricToShow, setMetricToShow] = useState(10);
  const [expend, setExpend] = useState(true);
  const [expendMetric, setExpendMetric] = useState(true);

  const handleSizeToShow = () => {
    if (sizeToShow === options.size.length) {
      setSizeToShow(10);
      setExpend(true);
    } else if (sizeToShow >= 10 && sizeToShow <= options.size.length) {
      setSizeToShow(sizeToShow + 10);
      setExpend(true);
    } else if (sizeToShow >= options.size.length) {
      setSizeToShow(options.size.length);
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
      <p>Size</p>
      <InputRadioLabelList>
        {options.size
          .filter((item: any, idx: any) => idx < sizeToShow)
          .map((item: any, index: number) => (
            <InputRadioLabelItem key={index}>
              <InputRadioLabelInput onClick={() => handleSelect(index)} />
              <InputRadioLabelTitle selected={selectedItem.includes(index)}>
                {item}
              </InputRadioLabelTitle>
            </InputRadioLabelItem>
          ))}
        <div>
          {options.size?.length > 10 && (
            <WidgetCategoriesListShowMoreButton
              onClick={() => {
                handleSizeToShow();
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

export default FilterThreadSize;
