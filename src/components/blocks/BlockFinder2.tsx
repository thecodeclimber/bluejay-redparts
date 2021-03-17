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
} from '~/styled-components/blocks/BlockFinder2';
import url from '~/services/url';
import VehicleSelect from '~/components/shared/VehicleSelect';
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
        {/* <form className="block-finder__form" onSubmit={onSubmit}>
          <VehicleSelect className="block-finder__select" onVehicleChange={setVehicle} />

          <button className="block-finder__button" type="submit">
            <FormattedMessage id="BUTTON_BLOCK_FINDER_SEARCH" />
          </button>
        </form> */}
      </BlockFinderBody>
    </BlockFinderStyledComponent>
  );
}

export default React.memo(BlockFinder);
