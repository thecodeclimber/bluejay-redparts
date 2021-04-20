// react
import React, { useState } from 'react';
// third-party
import classNames from 'classnames';
import { FormattedMessage, useIntl } from 'react-intl';
// application
import {
  CardHeader,
  CardDivider,
  CardBodyPadding2,
} from '~/styled-components/components/Card';
import {
  VehiclesList,
  VehiclesListBody,
  VehiclesListItem,
  VehicleListItemInfo,
  VehiclesListItemName,
  VehiclesListItemLinks,
  VehiclesListItemDetails,
  VehiclesListItemRemove,
} from '~/styled-components/components/VehiclesList';
import AccountLayout from '~/components/account/AccountLayout';
import AppLink from '~/components/shared/AppLink';
import AsyncAction from '~/components/shared/AsyncAction';
import PageTitle from '~/components/shared/PageTitle';
import url from '~/services/url';
import VehicleForm from '~/components/shared/VehicleForm';
import { IVehicle } from '~/interfaces/vehicle';
import { RecycleBin16Svg } from '~/svg';
import {
  useGarageAddItem,
  useGarageRemoveItem,
  useUserVehicles,
} from '~/store/garage/garageHooks';

function Page() {
  const intl = useIntl();
  const vehicles = useUserVehicles();
  const [vehicle, setVehicle] = useState<IVehicle | null>(null);
  const garageAddItem = useGarageAddItem();
  const garageRemoveItem = useGarageRemoveItem();

  return (
    <div className="card">
      <PageTitle>{intl.formatMessage({ id: 'HEADER_GARAGE' })}</PageTitle>

      {vehicles.length > 0 && (
        <React.Fragment>
          <CardHeader>
            <h5>
              <FormattedMessage id="HEADER_GARAGE" />
            </h5>
          </CardHeader>
          <CardDivider />

          <CardBodyPadding2 className="card-body">
            <VehiclesList className="vehicles-list--layout--account">
              <VehiclesListBody>
                {vehicles.map((vehicle, index) => (
                  <VehiclesListItem key={index}>
                    <VehicleListItemInfo>
                      <VehiclesListItemName>
                        {`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
                      </VehiclesListItemName>
                      <VehiclesListItemDetails>
                        <FormattedMessage
                          id="TEXT_VEHICLE_ENGINE"
                          values={{ engine: vehicle.engine }}
                        />
                      </VehiclesListItemDetails>
                      <VehiclesListItemLinks>
                        <AppLink
                          href={url.products({
                            filters: {
                              filter_vehicle: vehicle.id.toString(),
                            },
                          })}
                        >
                          <FormattedMessage id="LINK_SHOW_PARTS" />
                        </AppLink>
                      </VehiclesListItemLinks>
                    </VehicleListItemInfo>
                    <AsyncAction
                      action={() => garageRemoveItem(vehicle.id)}
                      render={({ run, loading }) => (
                        <VehiclesListItemRemove
                          as="button"
                          type="button"
                          loading={loading}
                          onClick={run}
                        >
                          <RecycleBin16Svg />
                        </VehiclesListItemRemove>
                      )}
                    />
                  </VehiclesListItem>
                ))}
              </VehiclesListBody>
            </VehiclesList>
          </CardBodyPadding2>
          <CardDivider />
        </React.Fragment>
      )}

      <CardHeader>
        <h5>
          <FormattedMessage id="HEADER_ADD_VEHICLE" />
        </h5>
      </CardHeader>
      <CardDivider />

      <CardBodyPadding2 className="card-body">
        <VehicleForm location="account" onVehicleChange={setVehicle} />

        <div className="mt-4 pt-3">
          <AsyncAction
            action={() =>
              vehicle ? garageAddItem(vehicle.id) : Promise.resolve()
            }
            render={({ run, loading }) => (
              <button
                type="button"
                className={classNames('btn', 'btn-primary', {
                  'btn-loading': loading,
                })}
                disabled={vehicle === null}
                onClick={run}
              >
                <FormattedMessage id="BUTTON_ADD_VEHICLE" />
              </button>
            )}
          />
        </div>
      </CardBodyPadding2>
    </div>
  );
}

Page.Layout = AccountLayout;

export default Page;
