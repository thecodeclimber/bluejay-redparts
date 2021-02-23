/* eslint-disable jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */

// react
import React, { useRef } from 'react';
// third-party
import { FormattedMessage } from 'react-intl';
// application
import AppLink from '~/components/shared/AppLink';
import MobileMenuConveyor, { IMobileMenuConveyorController } from '~/components/mobile/MobileMenuConveyor';
import MobileMenuIndicators from '~/components/mobile/MobileMenuIndicators';
import MobileMenuLinks from '~/components/mobile/MobileMenuLinks';
import MobileMenuPanel from '~/components/mobile/MobileMenuPanel';
import MobileMenuSettings from '~/components/mobile/MobileMenuSettings';
import url from '~/services/url';
import { Cross12Svg } from '~/svg';
import { useMobileMenu, useMobileMenuClose } from '~/store/mobile-menu/mobileMenuHooks';
import {
  MobileMenuBase,
  MobileMenuBackdrop,
  MobileMenuBody,
  MobileMenuDivider,
  MobileMenuClose,
  MobileMenuContactsTitle,
  MobileMenuContactsSubTitle,
  MobileMenuSpring,
  MobileMenuContacts,
} from '~/styled-components/mobile/MobileMenu';

// data
import dataMobileMenuLinks from '~/data/mobileMenuLinks';

function MobileMenu() {
  const mobileMenu = useMobileMenu();
  const mobileMenuClose = useMobileMenuClose();
  const bodyRef = useRef<HTMLDivElement>(null);
  const conveyorRef = useRef<IMobileMenuConveyorController>(null);
  const isMobileMenuOpen = mobileMenu.open;

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
    <MobileMenuBase isOpen={isMobileMenuOpen}>
      <MobileMenuBackdrop onClick={mobileMenuClose} />
      <MobileMenuBody ref={bodyRef} onTransitionEnd={onTransitionEnd}>
        <MobileMenuClose type="button" onClick={mobileMenuClose}>
          <Cross12Svg />
        </MobileMenuClose>

        <MobileMenuConveyor controllerRef={conveyorRef}>
          <MobileMenuPanel label="Menu">
            <MobileMenuSettings />
            <MobileMenuDivider />
            <MobileMenuIndicators />
            <MobileMenuDivider />
            <MobileMenuLinks items={dataMobileMenuLinks} />

            <MobileMenuSpring />
            <MobileMenuDivider />
            <MobileMenuContacts as={AppLink} href={url.pageContactUs()}>
              <MobileMenuContactsSubTitle>
                <FormattedMessage id="TEXT_MOBILE_MENU_PHONE_TITLE" />
              </MobileMenuContactsSubTitle>
              <MobileMenuContactsTitle>800 060-0730</MobileMenuContactsTitle>
            </MobileMenuContacts>
          </MobileMenuPanel>
        </MobileMenuConveyor>
      </MobileMenuBody>
    </MobileMenuBase>
  );
}

export default React.memo(MobileMenu);
