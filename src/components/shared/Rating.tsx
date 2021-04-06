// react
import React from 'react';
// third-party
import {
  RatingStyledComponent,
  RatingBody,
  RatingStar,
} from '~/styled-components/components/Rating';
import classNames from 'classnames';

interface Props extends React.HTMLAttributes<HTMLElement> {
  value: number;
}

function Rating(props: Props) {
  const { value, className } = props;

  return (
    <RatingStyledComponent>
      <RatingBody>
        {[1, 2, 3, 4, 5].map((i) => {
          return <RatingStar key={i} isActive={value >= i} />;
        })}
      </RatingBody>
    </RatingStyledComponent>
  );
}

export default Rating;
