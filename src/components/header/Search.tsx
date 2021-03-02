// react
import React, { useRef, useState } from 'react';
// third-party
import { FormattedMessage, useIntl } from 'react-intl';
import classNames from 'classnames';
// application
import {
  SearchBody,
  SearchShadow,
  SearchInput,
  SearchButtonStart,
  SearchButtonIcon,
  SearchButtonTitle,
  SearchButtonEnd,
  SearchDropdown,
  SuggestionsGroup,
  SuggestionsGroupTitle,
  SuggestionsAppLink,
  SuggestionsProductImage,
  SuggestionsProductInfo,
  SuggestionsProductPrice,
  SuggestionsProductName,
  SuggestionsProductRating,
  SuggestionsProductRatingStars,
  SuggestionsProductRatingLabel,
  SuggestionsCategoryAppLink,
  SearchDropdownArrow,
  VehiclePickerPanelActive,
  VehiclePickerPanelBody,
  VehiclePickerText,
  VehiclesListBody,
  VehiclesListItem,
  VehiclesListItemRadio,
  VehiclesListItemInfo,
  VehiclesListItemName,
  VehiclesListItemDetails,
  VehiclesListItemRemove,
  VehiclePickerActions,
  SearchCarSelectorLink,
} from '~/styled-components/header/Search';
import AppImage from '~/components/shared/AppImage';
import AppLink from '~/components/shared/AppLink';
import AsyncAction from '~/components/shared/AsyncAction';
import CurrencyFormat from '~/components/shared/CurrencyFormat';
import Rating from '~/components/shared/Rating';
import url from '~/services/url';
import VehicleForm from '~/components/shared/VehicleForm';
import { Car20Svg, RecycleBin16Svg, Search20Svg } from '~/svg';
import { IProduct } from '~/interfaces/product';
import { IShopCategory } from '~/interfaces/category';
import { IVehicle } from '~/interfaces/vehicle';
import { shopApi } from '~/api';
import { useGlobalMousedown } from '~/services/hooks';
import {
  useGarageAddItem,
  useGarageCurrent,
  useGarageRemoveItem,
  useGarageSetCurrent,
  useUserVehicles,
} from '~/store/garage/garageHooks';

export function Search() {
  const intl = useIntl();
  const [query, setQuery] = useState('');
  const [suggestionsIsOpen, setSuggestionsIsOpen] = useState(false);
  const [hasSuggestions, setHasSuggestions] = useState(false);
  const [products, setProducts] = useState<IProduct[]>([]);
  const [categories, setCategories] = useState<IShopCategory[]>([]);
  const [vehiclePickerIsOpen, setVehiclePickerIsOpen] = useState(false);
  const [vehiclePanel, setVehiclePanel] = useState('list');
  const [addVehicle, setAddVehicle] = useState<IVehicle | null>(null);
  const vehicles = useUserVehicles();
  const garageAddItem = useGarageAddItem();
  const garageRemoveItem = useGarageRemoveItem();
  const hasVehicles = vehicles.length > 0;
  const selectVehicleButtonRef = useRef<HTMLButtonElement>(null);
  const vehiclePickerDropdownRef = useRef<HTMLDivElement>(null);

  const currentVehicle = useGarageCurrent();
  const garageSetCurrent = useGarageSetCurrent();

  const searchCancelFnRef = useRef(() => {});
  const rootRef = useRef<HTMLDivElement>(null);

  const search = (value: string) => {
    searchCancelFnRef.current();

    let canceled = false;

    searchCancelFnRef.current = () => {
      canceled = true;
    };

    shopApi
      .getSearchSuggestions(value, {
        limitProducts: 3,
        limitCategories: 4,
      })
      .then((result) => {
        if (canceled) {
          return;
        }

        if (result.products.length === 0 && result.categories.length === 0) {
          setHasSuggestions(false);
          return;
        }

        setHasSuggestions(true);
        setProducts(result.products);
        setCategories(result.categories);
      });

    setQuery(value);
  };

  const toggleSuggestions = (force?: boolean) => {
    setSuggestionsIsOpen((prevState) => {
      const newState = force !== undefined ? force : !prevState;

      if (newState) {
        setVehiclePickerIsOpen(false);
      }

      return newState;
    });
  };

  const toggleVehiclePicker = (force?: boolean): void => {
    setVehiclePickerIsOpen((prevState) => {
      const newState = force !== undefined ? force : !prevState;

      if (newState) {
        setSuggestionsIsOpen(false);
      }

      return newState;
    });
  };

  const handleInputFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    const input = event.currentTarget;

    toggleSuggestions(true);
    search(input.value);
  };

  const handleInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    const input = event.currentTarget;

    search(input.value);
  };

  const handleButtonClick = () => {
    toggleVehiclePicker();
  };

  const handleChangeCurrentVehicle = (
    event: React.FormEvent<HTMLInputElement>
  ) => {
    const vehicleId =
      event.currentTarget.value === ''
        ? null
        : parseFloat(event.currentTarget.value);

    garageSetCurrent(vehicleId);
  };

  const handleVehicleChange = (vehicle: IVehicle | null) => {
    setAddVehicle(vehicle);
  };

  const handleRootBlur = () => {
    setTimeout(() => {
      if (document.activeElement === document.body) {
        return;
      }

      // Close suggestions if the focus received an external element.
      if (
        document.activeElement &&
        document.activeElement.closest('.search') !== rootRef.current
      ) {
        toggleSuggestions(false);
      }
    }, 10);
  };

  useGlobalMousedown(
    (event) => {
      const outsideButton =
        selectVehicleButtonRef.current &&
        !selectVehicleButtonRef.current.contains(event.target as HTMLElement);
      const outsideDropdown =
        vehiclePickerDropdownRef.current &&
        !vehiclePickerDropdownRef.current.contains(event.target as HTMLElement);

      if (outsideButton && outsideDropdown) {
        setVehiclePickerIsOpen(false);
      }
    },
    [setVehiclePickerIsOpen, selectVehicleButtonRef]
  );

  useGlobalMousedown(
    (event) => {
      const outside =
        rootRef.current &&
        !rootRef.current.contains(event.target as HTMLElement);

      if (outside && suggestionsIsOpen) {
        setHasSuggestions(false);
      }
    },
    [rootRef, suggestionsIsOpen, setHasSuggestions]
  );

  const searchPlaceholder = currentVehicle
    ? intl.formatMessage(
        { id: 'INPUT_SEARCH_PLACEHOLDER_VEHICLE' },
        currentVehicle as Enumerable<IVehicle>
      )
    : intl.formatMessage({ id: 'INPUT_SEARCH_PLACEHOLDER' });

  return (
    <div ref={rootRef} onBlur={handleRootBlur}>
      <SearchBody>
        <SearchShadow />

        <label className="sr-only" htmlFor="site-search">
          <FormattedMessage id="INPUT_SEARCH_LABEL" />
        </label>

        <SearchInput
          type="text"
          id="site-search"
          autoCapitalize="off"
          autoComplete="off"
          spellCheck="false"
          name="search"
          value={query}
          placeholder={searchPlaceholder}
          onFocus={handleInputFocus}
          onChange={handleInputChange}
        />

        <SearchButtonStart
          type="button"
          as="button"
          className={classNames({
            'search__button--hover': vehiclePickerIsOpen,
          })}
          onClick={handleButtonClick}
          ref={selectVehicleButtonRef}
        >
          <SearchButtonIcon>
            <Car20Svg />
          </SearchButtonIcon>
          <SearchButtonTitle>
            <FormattedMessage id="BUTTON_SEARCH_SELECT_VEHICLE_DESKTOP" />
          </SearchButtonTitle>
        </SearchButtonStart>

        <SearchButtonEnd as="button" type="submit">
          <SearchButtonIcon>
            <Search20Svg />
          </SearchButtonIcon>
        </SearchButtonEnd>

        <div className="search__box" />
        <div className="search__decor">
          <div className="search__decor-start" />
          <div className="search__decor-end" />
        </div>

        <SearchDropdown isOpen={suggestionsIsOpen && hasSuggestions}>
          {products.length > 0 && (
            <SuggestionsGroup>
              <SuggestionsGroupTitle>
                <FormattedMessage id="TEXT_PRODUCTS" />
              </SuggestionsGroupTitle>
              <div>
                {products.map((product) => (
                  <SuggestionsAppLink
                    key={product.id}
                    href={url.product(product)}
                    onClick={() => toggleSuggestions(false)}
                  >
                    <SuggestionsProductImage>
                      <AppImage src={product.images && product.images[0]} />
                    </SuggestionsProductImage>
                    <SuggestionsProductInfo>
                      <SuggestionsProductName>
                        {product.name}
                      </SuggestionsProductName>
                      <SuggestionsProductRating>
                        <SuggestionsProductRatingStars>
                          <Rating value={product.rating || 0} />
                        </SuggestionsProductRatingStars>
                        <SuggestionsProductRatingLabel>
                          <FormattedMessage
                            id="TEXT_RATING_LABEL"
                            values={{
                              rating: product.rating,
                              reviews: product.reviews,
                            }}
                          />
                        </SuggestionsProductRatingLabel>
                      </SuggestionsProductRating>
                    </SuggestionsProductInfo>
                    <SuggestionsProductPrice>
                      <CurrencyFormat value={product.price} />
                    </SuggestionsProductPrice>
                  </SuggestionsAppLink>
                ))}
              </div>
            </SuggestionsGroup>
          )}
          {categories.length > 0 && (
            <SuggestionsGroup>
              <SuggestionsGroupTitle>
                <FormattedMessage id="TEXT_CATEGORIES" />
              </SuggestionsGroupTitle>
              <div>
                {categories.map((category) => (
                  <SuggestionsCategoryAppLink
                    key={category.id}
                    href={url.category(category)}
                    onClick={() => toggleSuggestions(false)}
                  >
                    {category.name}
                  </SuggestionsCategoryAppLink>
                ))}
              </div>
            </SuggestionsGroup>
          )}
        </SearchDropdown>

        <SearchDropdown
          isOpen={vehiclePickerIsOpen}
          ref={vehiclePickerDropdownRef}
        >
          <SearchDropdownArrow />

          <VehiclePickerPanelActive
            isActive={vehiclePanel === 'list' && hasVehicles}
          >
            <VehiclePickerPanelBody>
              <VehiclePickerText>
                <FormattedMessage id="TEXT_SELECT_VEHICLE_TO_FIND_EXACT_FIT_PARTS" />
              </VehiclePickerText>

              <div>
                <VehiclesListBody>
                  {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                  <VehiclesListItem>
                    <VehiclesListItemRadio
                      name="header-current-vehicle"
                      defaultValue=""
                      checked={currentVehicle === null}
                      onChange={handleChangeCurrentVehicle}
                    />
                    <VehiclesListItemInfo>
                      <VehiclesListItemName>
                        <FormattedMessage id="TEXT_ALL_VEHICLES" />
                      </VehiclesListItemName>
                    </VehiclesListItemInfo>
                  </VehiclesListItem>
                  {vehicles.map((vehicle, index) => (
                    <React.Fragment key={index}>
                      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                      <VehiclesListItem>
                        <VehiclesListItemRadio
                          name="header-current-vehicle"
                          defaultValue={vehicle.id}
                          checked={currentVehicle?.id === vehicle.id}
                          onChange={handleChangeCurrentVehicle}
                        />
                        <VehiclesListItemInfo>
                          <VehiclesListItemName>
                            {`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
                          </VehiclesListItemName>
                          <VehiclesListItemDetails>
                            <FormattedMessage
                              id="TEXT_VEHICLE_ENGINE"
                              values={{ engine: vehicle.engine }}
                            />
                          </VehiclesListItemDetails>
                        </VehiclesListItemInfo>
                        <AsyncAction
                          action={() => garageRemoveItem(vehicle.id)}
                          render={({ run, loading }) => (
                            <VehiclesListItemRemove
                              as="button"
                              type="button"
                              className={classNames('', {
                                'vehicles-list__item-remove--loading': loading,
                              })}
                              onClick={run}
                            >
                              <RecycleBin16Svg />
                            </VehiclesListItemRemove>
                          )}
                        />
                      </VehiclesListItem>
                    </React.Fragment>
                  ))}
                </VehiclesListBody>
              </div>

              <VehiclePickerActions>
                <button
                  type="button"
                  className="btn btn-primary btn-sm"
                  onClick={() => setVehiclePanel('form')}
                >
                  <FormattedMessage id="BUTTON_ADD_VEHICLE" />
                </button>
              </VehiclePickerActions>
            </VehiclePickerPanelBody>
          </VehiclePickerPanelActive>

          <VehiclePickerPanelActive
            isActive={vehiclePanel === 'form' || !hasVehicles}
          >
            <VehiclePickerPanelBody>
              <VehicleForm
                location="search"
                onVehicleChange={handleVehicleChange}
              />
              <VehiclePickerActions>
                {hasVehicles && (
                  <SearchCarSelectorLink>
                    {/* eslint-disable-next-line */}
                    <AppLink
                      anchor
                      onClick={(event) => {
                        event.preventDefault();

                        setVehiclePanel('list');
                      }}
                    >
                      <FormattedMessage id="BUTTON_BACK_TO_LIST" />
                    </AppLink>
                  </SearchCarSelectorLink>
                )}

                <AsyncAction
                  action={() =>
                    addVehicle
                      ? garageAddItem(addVehicle.id)
                      : Promise.resolve()
                  }
                  render={({ run, loading }) => (
                    <button
                      type="button"
                      className={classNames('btn', 'btn-primary', 'btn-sm', {
                        'btn-loading': loading,
                      })}
                      disabled={addVehicle === null}
                      onClick={run}
                    >
                      <FormattedMessage id="BUTTON_ADD_VEHICLE" />
                    </button>
                  )}
                />
              </VehiclePickerActions>
            </VehiclePickerPanelBody>
          </VehiclePickerPanelActive>
        </SearchDropdown>
      </SearchBody>
    </div>
  );
}

export default Search;
