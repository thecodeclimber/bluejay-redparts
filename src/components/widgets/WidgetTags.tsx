// react
import React from 'react';
// application
import {
  WidgetTagStyledComponent,
  WidgetHeader,
  WidgetTagsBody,
  TagList,
} from '~/styled-components/widget/WidgetTags';
import AppLink from '~/components/shared/AppLink';

interface Props {
  widgetTitle?: React.ReactNode;
}

function WidgetTags(props: Props) {
  const { widgetTitle } = props;

  return (
    <WidgetTagStyledComponent className="card widget">
      {widgetTitle && (
        <WidgetHeader>
          <h4>{widgetTitle}</h4>
        </WidgetHeader>
      )}
      <WidgetTagsBody>
        <TagList>
          <AppLink href="/">Promotion</AppLink>
          <AppLink href="/">Power Tool</AppLink>
          <AppLink href="/">New Arrivals</AppLink>
          <AppLink href="/">Screwdriver</AppLink>
          <AppLink href="/">Wrench</AppLink>
          <AppLink href="/">Mounts</AppLink>
          <AppLink href="/">Electrodes</AppLink>
          <AppLink href="/">Chainsaws</AppLink>
          <AppLink href="/">Manometers</AppLink>
          <AppLink href="/">Nails</AppLink>
          <AppLink href="/">Air Guns</AppLink>
          <AppLink href="/">Cutting Discs</AppLink>
        </TagList>
      </WidgetTagsBody>
    </WidgetTagStyledComponent>
  );
}

export default WidgetTags;
