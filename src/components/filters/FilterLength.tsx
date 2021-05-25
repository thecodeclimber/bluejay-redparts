import React, { useState } from 'react';
// application
import AppLink from '~/components/shared/AppLink';
import { Tags, TagList, TagLink } from '~/styled-components/components/Tag';

function FilterLength(props: any) {
  const { options } = props;

  const [selectedItem, setSelectedItem] = useState<any[]>([]);

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
      <Tags>
        <TagList>
          {options.values.map((item: any, index: any) => (
            <TagLink key={index} selected={selectedItem.includes(index)}>
              <AppLink href="#!" onClick={() => handleSelect(index)}>
                {item.value}
              </AppLink>
            </TagLink>
          ))}
        </TagList>
      </Tags>
    </div>
  );
}

export default FilterLength;
