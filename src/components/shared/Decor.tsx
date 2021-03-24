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
type Type = 'center' | 'bottom';

interface Props extends React.HTMLAttributes<HTMLElement> {
  type: Type;
}

function Decor(props: Props) {
  const { type, className } = props;

  return (
    <DecorStyledComponent className={className} type={type}>
      <DecorBody>
        <DecorStart />
        <DecorEnd />
        <DecorCenter />
      </DecorBody>
    </DecorStyledComponent>
  );
}

export default Decor;
