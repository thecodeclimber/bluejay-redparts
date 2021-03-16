// react
import React, { useState } from 'react';
// third-party
import { FormattedMessage } from 'react-intl';
// application
import {
  BlockFinderStyledComponent,
  BlockFinderDecor,
  BlockFinderImage,
  BlockFinderBody,
  BlockFinderTitle,
  BlockFinderSubtitle,
  BlockFinderForm,
  BlockFinderSelect,
  BlockFinderButton,
} from '~/styled-components/blocks/BlockFinder';
import url from '~/services/url';

import { baseUrl } from '~/services/utils';
import { hrefToRouterArgs, useAppRouter } from '~/services/router';
import { IVehicle } from '~/interfaces/vehicle';

function BlockFinder() {
  const router = useAppRouter();
  const [vehicle, setVehicle] = useState<IVehicle | null>(null);

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!vehicle) {
      return;
    }

    router
      .push(
        ...hrefToRouterArgs(
          url.products({
            filters: {
              filter_vehicle: vehicle.id.toString(),
            },
          })
        )
      )
      .then();
  };

  return (
    <BlockFinderStyledComponent>
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
        <BlockFinderForm onSubmit={onSubmit}>
          <BlockFinderSelect onVehicleChange={setVehicle} />

          <BlockFinderButton type="submit">
            <FormattedMessage id="BUTTON_BLOCK_FINDER_SEARCH" />
          </BlockFinderButton>
        </BlockFinderForm>
      </BlockFinderBody>
    </BlockFinderStyledComponent>
  );
}

export default React.memo(BlockFinder);
