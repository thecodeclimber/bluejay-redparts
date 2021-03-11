// react
import React from 'react';
// application
import { Search20Svg } from '~/svg';
import {
  WidgetSearchForm,
  WidgetSearchInput,
  WidgetSearchButton,
  WidgetSearchFiled,
  WidgetWidgetSearch,
} from '~/styled-components/widget/WidgetSeach';

function WidgetSearch() {
  return (
    <WidgetWidgetSearch>
      <WidgetSearchForm action="">
        <WidgetSearchInput type="search" placeholder="Blog search..." />
        <WidgetSearchButton type="submit">
          <Search20Svg />
        </WidgetSearchButton>
        <WidgetSearchFiled />
      </WidgetSearchForm>
    </WidgetWidgetSearch>
  );
}

export default WidgetSearch;
