/* eslint-disable jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */

// react
import React, { useRef } from 'react';
// third-party
import classNames from 'classnames';
import { FormattedMessage } from 'react-intl';
// application
import AppLink from '~/components/shared/AppLink';
import {
  MobileMenuDivider,
  MobileMenuSpring,
  MobileMenuContactsTitle,
  MobileMenuContactsSubtitle,
  MobileMenuContacts,
  MobileMenuBackdrop
} from '~/styled-components/mobile/MobileMenu';
import MobileMenuConveyor, { IMobileMenuConveyorController } from '~/components/mobile/MobileMenuConveyor';
import MobileMenuIndicators from '~/components/mobile/MobileMenuIndicators';
import MobileMenuLinks from '~/components/mobile/MobileMenuLinks';
import MobileMenuPanel from '~/components/mobile/MobileMenuPanel';
import MobileMenuSettings from '~/components/mobile/MobileMenuSettings';
import url from '~/services/url';
import { Cross12Svg } from '~/svg';
import { useMobileMenu, useMobileMenuClose } from '~/store/mobile-menu/mobileMenuHooks';
// data
import dataMobileMenuLinks from '~/data/mobileMenuLinks';

function MobileMenu() {
  const mobileMenu = useMobileMenu();
  const mobileMenuClose = useMobileMenuClose();
  const bodyRef = useRef<HTMLDivElement>(null);
  const conveyorRef = useRef<IMobileMenuConveyorController>(null);

  const rootClasses = classNames('mobile-menu', {
    'mobile-menu--open': mobileMenu.open,
  });

  const onMenuClosed = () => {
    if (conveyorRef.current) {
      conveyorRef.current.reset();
    }
  };

  const onTransitionEnd = (event: React.TransitionEvent) => {
    if (event.target === bodyRef.current && event.propertyName === 'transform' && !mobileMenu.open) {
      onMenuClosed();
    }
  };

  return (
    <div className={rootClasses}>
      <MobileMenuBackdrop onClick={mobileMenuClose} />
      <div className="mobile-menu__body" ref={bodyRef} onTransitionEnd={onTransitionEnd}>
        <button className="mobile-menu__close" type="button" onClick={mobileMenuClose}>
          <Cross12Svg />
        </button>

        <MobileMenuConveyor controllerRef={conveyorRef}>
          <MobileMenuPanel label="Menu">
            <MobileMenuSettings />
            <MobileMenuDivider />
            <MobileMenuIndicators />
            <MobileMenuDivider />
            <MobileMenuLinks items={dataMobileMenuLinks} />

            <MobileMenuSpring />
            <MobileMenuDivider />
            <MobileMenuContacts href={url.pageContactUs()} >
              <MobileMenuContactsSubtitle>
                <FormattedMessage id="TEXT_MOBILE_MENU_PHONE_TITLE" />
              </MobileMenuContactsSubtitle>
              <MobileMenuContactsTitle>800 060-0730</MobileMenuContactsTitle>
            </MobileMenuContacts>
          </MobileMenuPanel>
        </MobileMenuConveyor>
      </div>
    </div>
  );
}

export default React.memo(MobileMenu);
