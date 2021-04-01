// react
import React from 'react';
// third-party
import {
  DecorStyledComponent,
  DecorBody,
  DecorStart,
  DecorEnd,
  DecorCenter,
} from '~/styled-components/components/Decor';

function Decor(props: any) {
  const { type, className, sliderdecor } = props;

  return (
    <DecorStyledComponent className={className} type={type}>
      <DecorBody>
        <DecorStart />
        <DecorEnd />
        <DecorCenter slider={sliderdecor} />
      </DecorBody>
    </DecorStyledComponent>
  );
}

export default Decor;
