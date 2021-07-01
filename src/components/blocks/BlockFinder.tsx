// application
import {
  BlockFinderBody,
  BlockFinderDecor,
  BlockFinderImage,
  BlockFinderStyledComponent,
  BlockFinderSubtitle,
  BlockFinderTitle,
} from '~/styled-components/blocks/BlockFinder2';

// third-party
import { FormattedMessage } from 'react-intl';
import React from 'react';
import VehicleSelect from '~/components/shared/VehicleSelect';
import { baseUrl } from '~/services/utils';
import { useAppRouter } from '~/services/router';

function BlockFinder() {
  const router = useAppRouter();

  return (
    <BlockFinderStyledComponent className="block">
      <BlockFinderDecor type="bottom" />
      <BlockFinderImage
        style={{ backgroundImage: `url(${baseUrl('/images/finder.jpg')})` }}
      />
      <BlockFinderBody className="container container--max--xl">
        <BlockFinderTitle>
          <FormattedMessage id="TEXT_BLOCK_FINDER_TITLE" />
        </BlockFinderTitle>
        <BlockFinderSubtitle>
          <FormattedMessage id="TEXT_BLOCK_FINDER_SUBTITLE" />
        </BlockFinderSubtitle>
        <VehicleSelect />
      </BlockFinderBody>
    </BlockFinderStyledComponent>
  );
}

export default React.memo(BlockFinder);
