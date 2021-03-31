/* eslint-disable jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */

// react
import React, { useContext, useEffect, useMemo, useState } from 'react';
// third-party
import { FormattedMessage } from 'react-intl';
// application
import WidgetFilters from '~/components/widgets/WidgetFilters';
import WidgetProducts from '~/components/widgets/WidgetProducts';
import { Cross12Svg } from '~/svg';
import { IProduct } from '~/interfaces/product';
import { shopApi } from '~/api';
import { SidebarContext } from '~/services/sidebar';
import { useMedia } from '~/store/hooks';
import { IShopPageOffCanvasSidebar } from '~/interfaces/pages';
import {
  Sidebar,
  SideBarBackDrop,
  SideBarBody,
  SideBarHeader,
  SideBarTitle,
  SideBarClose,
  SideBarContent,
} from '~/styled-components/components/SideBar';
interface Props {
  offcanvas: IShopPageOffCanvasSidebar;
}

function ShopSidebar(props: Props) {
  const { offcanvas } = props;
  const [isOpen, setIsOpen] = useContext(SidebarContext);
  const [latestProducts, setLatestProducts] = useState<IProduct[]>([]);
  const isMobile = useMedia('(max-width: 991px)');

  const close = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      const bodyWidth = document.body.offsetWidth;

      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${
        document.body.offsetWidth - bodyWidth
      }px`;
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }
  }, [isOpen]);

  useEffect(() => {
    if (offcanvas === 'mobile' && isOpen && !isMobile) {
      setIsOpen(false);
    }
  }, [offcanvas, isOpen, setIsOpen, isMobile]);

  useEffect(() => {
    let canceled = false;

    if (offcanvas === 'mobile') {
      shopApi.getLatestProducts(5).then((products) => {
        if (canceled) {
          return;
        }

        setLatestProducts(products);
      });
    }

    return () => {
      canceled = true;
    };
  }, [offcanvas, setLatestProducts]);

  const latestProductsTitle = useMemo(
    () => <FormattedMessage id="HEADER_LATEST_PRODUCTS" />,
    []
  );

  return (
    <Sidebar isOpen={isOpen} offCanvas={offcanvas}>
      <SideBarBackDrop onClick={close} />
      <SideBarBody>
        <SideBarHeader>
          <SideBarTitle>
            <FormattedMessage id="HEADER_FILTERS" />
          </SideBarTitle>
          <SideBarClose type="button" onClick={close}>
            <Cross12Svg />
          </SideBarClose>
        </SideBarHeader>
        <SideBarContent>
          <WidgetFilters offcanvasSidebar={offcanvas} />

          {offcanvas !== 'always' && (
            <WidgetProducts
              className="d-none d-lg-block"
              widgetTitle={latestProductsTitle}
              products={latestProducts}
            />
          )}
        </SideBarContent>
      </SideBarBody>
    </Sidebar>
  );
}

export default React.memo(ShopSidebar);
