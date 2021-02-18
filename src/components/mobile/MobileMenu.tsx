/* eslint-disable jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */

// react
import React, { useRef } from 'react';
// third-party
import classNames from 'classnames';
import { FormattedMessage } from 'react-intl';
// application
import {
  MobileMenuStyledComponent as Menu,
  MobileMenuBackdrop as Backdrop,
  MobileMenuDivider as Divider,
  MobileMenuClose as CloseButton,
  MobileMenuContactsTitle as ContactsTitle,
  MobileMenuContactsSubTitle as ContactsSubTitle,
  MobileMenuSpring as Spring,
  MobileMenuContacts as Contacts,
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

  const rootClasses = classNames('', {
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
    <Menu className={rootClasses}>
      <Backdrop onClick={mobileMenuClose} />
      <div className="mobile-menu__body" ref={bodyRef} onTransitionEnd={onTransitionEnd}>
        <CloseButton type="button" onClick={mobileMenuClose}>
          <Cross12Svg />
        </CloseButton>

        <MobileMenuConveyor controllerRef={conveyorRef}>
          <MobileMenuPanel label="Menu">
            <MobileMenuSettings />
            <Divider />
            <MobileMenuIndicators />
            <Divider />
            <MobileMenuLinks items={dataMobileMenuLinks} />

            <Spring />
            <Divider />
            <Contacts href={url.pageContactUs()}>
              <ContactsSubTitle>
                <FormattedMessage id="TEXT_MOBILE_MENU_PHONE_TITLE" />
              </ContactsSubTitle>
              <ContactsTitle>800 060-0730</ContactsTitle>
            </Contacts>
          </MobileMenuPanel>
        </MobileMenuConveyor>
      </div>
    </Menu>
  );
}

export default React.memo(MobileMenu);
