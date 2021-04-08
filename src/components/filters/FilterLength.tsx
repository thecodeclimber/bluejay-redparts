import React from 'react';
// application
import AppLink from '~/components/shared/AppLink';
import { Tags, TagList } from '~/styled-components/components/Tag';
interface Props {
  options: any;
}

function FilterLength(props: Props) {
  const { options } = props;

  return (
    <div>
      <Tags>
        <TagList>
          {options.items.map((item: any, index: number) => (
            <AppLink href="#" key={index}>
              {item}
            </AppLink>
          ))}
        </TagList>
      </Tags>
    </div>
  );
}

export default FilterLength;
