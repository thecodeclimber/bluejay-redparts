// react
import React from 'react';
import {
  BlockMapStyledComponent,
  BlockMapBody,
} from '~/styled-components/block/BlockMap';

function BlockMap() {
  return (
    <BlockMapStyledComponent>
      <BlockMapBody>
        <iframe
          title="Google Map"
          src="https://maps.google.com/maps?q=Holbrook-Palmer%20Park&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
          frameBorder="0"
          scrolling="no"
          marginHeight={0}
          marginWidth={0}
        />
      </BlockMapBody>
    </BlockMapStyledComponent>
  );
}

export default BlockMap;
