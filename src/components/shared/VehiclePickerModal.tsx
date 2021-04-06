// react
import React, { useCallback, useEffect, useState } from 'react';
// third-party
import classNames from 'classnames';
import { FormattedMessage } from 'react-intl';
import { Modal } from 'reactstrap';
// application
import AsyncAction from '~/components/shared/AsyncAction';
import VehicleForm from '~/components/shared/VehicleForm';
import { Cross12Svg, RecycleBin16Svg } from '~/svg';
import { IVehicle } from '~/interfaces/vehicle';
import {
  useGarageAddItem,
  useGarageRemoveItem,
  useUserVehicles,
} from '~/store/garage/garageHooks';
import {
  VehiclePickerModalClose,
  VehiclePickerModalPanel,
  VehiclePickerModalTitle,
  VehiclePickerModalText,
  VehiclePickerModalAddButton,
  VehiclePickerModalAction,
} from '~/styled-components/shop/VehiclePickerModal';
import {
  VehiclesList,
  VehiclesListBody,
  VehiclesListItem,
  VehiclesListItemRadio,
  VehicleListItemInfo,
  VehiclesListItemName,
  VehiclesListItemDetails,
  VehiclesListItemRemove,
} from '~/styled-components/components/VehiclesList';
interface Props {
  value?: IVehicle | null;
  isOpen?: boolean;
  onClose?: () => void;
  onSelect?: (vehicle: IVehicle | null) => void;
}

function VehiclePickerModal(props: Props) {
  const { value = null, isOpen = false, onClose, onSelect } = props;
  const vehicles = useUserVehicles();
  const garageRemoveItem = useGarageRemoveItem();
  const garageAddItem = useGarageAddItem();
  const [currentPanel, setCurrentPanel] = useState('list');
  const [innerValue, setInnerValue] = useState<IVehicle | null>(null);
  const [controlValue, setControlValue] = useState<IVehicle | null>(null);

  const onSelectClick = () => {
    if (onSelect) {
      onSelect(innerValue);
    }
    if (onClose) {
      onClose();
    }
  };

  const toggle = useCallback(() => {
    if (isOpen && onClose) {
      onClose();
    }
  }, [isOpen, onClose]);

  const onAddVehicleClick = async () => {
    if (!controlValue) {
      return;
    }

    await garageAddItem(controlValue.id);

    setCurrentPanel('list');
    setInnerValue(controlValue);
  };

  useEffect(() => {
    if (isOpen) {
      setCurrentPanel('list');
      setInnerValue(value);
    }
  }, [isOpen, value]);

  return (
    <Modal isOpen={isOpen} toggle={toggle} centered>
      <VehiclePickerModalClose type="button" onClick={onClose}>
        <Cross12Svg />
      </VehiclePickerModalClose>

      <VehiclePickerModalPanel
        active={currentPanel === 'list' && vehicles.length !== 0}
      >
        <VehiclePickerModalTitle>
          <FormattedMessage id="HEADER_SELECT_VEHICLE" />
        </VehiclePickerModalTitle>

        <VehiclePickerModalText>
          <FormattedMessage id="TEXT_SELECT_VEHICLE_TO_FIND_EXACT_FIT_PARTS" />
        </VehiclePickerModalText>

        <VehiclesList>
          <VehiclesListBody>
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <VehiclesListItem>
              <VehiclesListItemRadio
                checked={innerValue === null}
                onChange={() => setInnerValue(null)}
              />
              <VehicleListItemInfo>
                <VehiclesListItemName>
                  <FormattedMessage id="TEXT_ALL_VEHICLES" />
                </VehiclesListItemName>
              </VehicleListItemInfo>
            </VehiclesListItem>
            {vehicles.map((vehicle, vehicleIdx) => (
              // eslint-disable-next-line jsx-a11y/label-has-associated-control
              <VehiclesListItem key={vehicleIdx}>
                <VehiclesListItemRadio
                  checked={innerValue !== null && innerValue.id === vehicle.id}
                  onChange={() => setInnerValue(vehicle)}
                />
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
                </VehicleListItemInfo>

                <AsyncAction
                  action={() => garageRemoveItem(vehicle.id)}
                  render={({ run, loading }) => (
                    <VehiclesListItemRemove
                      loading={loading ? 1 : 0}
                      type="button"
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

        <VehiclePickerModalAddButton
          type="button"
          className="btn btn-sm btn-secondary btn-block mt-2"
          onClick={() => setCurrentPanel('form')}
        >
          <FormattedMessage id="BUTTON_ADD_VEHICLE_LONG" />
        </VehiclePickerModalAddButton>

        <VehiclePickerModalAction>
          <button
            type="button"
            className="btn btn-sm btn-secondary"
            onClick={onClose}
          >
            <FormattedMessage id="BUTTON_CANCEL" />
          </button>
          <button
            type="button"
            className="btn btn-sm btn-primary"
            onClick={onSelectClick}
          >
            <FormattedMessage id="BUTTON_SELECT_VEHICLE" />
          </button>
        </VehiclePickerModalAction>
      </VehiclePickerModalPanel>

      <VehiclePickerModalPanel
        active={currentPanel === 'form' || vehicles.length === 0}
      >
        <VehiclePickerModalTitle>
          <FormattedMessage id="HEADER_ADD_VEHICLE" />
        </VehiclePickerModalTitle>
        <VehicleForm location="modal" onVehicleChange={setControlValue} />
        <VehiclePickerModalAction>
          {vehicles.length !== 0 && (
            <button
              type="button"
              className="btn btn-sm btn-secondary"
              onClick={() => setCurrentPanel('list')}
            >
              <FormattedMessage id="BUTTON_BACK_TO_LIST" />
            </button>
          )}

          <AsyncAction
            action={onAddVehicleClick}
            render={({ run, loading }) => (
              <button
                type="button"
                className={classNames('btn', 'btn-sm', 'btn-primary', {
                  'btn-loading': loading,
                })}
                disabled={controlValue === null}
                onClick={run}
              >
                <FormattedMessage id="BUTTON_ADD_VEHICLE" />
              </button>
            )}
          />
        </VehiclePickerModalAction>
      </VehiclePickerModalPanel>
    </Modal>
  );
}

export default VehiclePickerModal;
