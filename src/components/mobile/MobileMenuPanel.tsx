// react
import React, { PropsWithChildren, useContext } from 'react';
// application
import {
  MobileMenuPanelStyledComponent,
  MobileMenuPanelHeader,
  MobileMenuPanelTitle,
  MobileMenuPanelBody,
  MobileMenuPanelBack,
} from '~/styled-components/mobile/MobileMenu';
import { ArrowRoundedLeft7x11Svg } from '~/svg';
import { MobileMenuLevelContext } from '~/services/mobile-menu';

interface Props extends PropsWithChildren<{}> {
  label: React.ReactNode;
  onCloseCurrentPanel?: () => void;
}

function MobileMenuPanel(props: Props) {
  const { label, onCloseCurrentPanel, children } = props;
  const level = useContext(MobileMenuLevelContext);

  return (
    <MobileMenuPanelStyledComponent
      style={{
        transform: `translateX(${level * 100}%)`,
      }}
    >
      <MobileMenuPanelHeader>
        {level > 0 && (
          <MobileMenuPanelBack as="button" onClick={onCloseCurrentPanel}>
            <ArrowRoundedLeft7x11Svg />
          </MobileMenuPanelBack>
        )}
        <MobileMenuPanelTitle>{label}</MobileMenuPanelTitle>
      </MobileMenuPanelHeader>
      <MobileMenuPanelBody>
        <MobileMenuLevelContext.Provider value={level + 1}>
          {children}
        </MobileMenuLevelContext.Provider>
      </MobileMenuPanelBody>
    </MobileMenuPanelStyledComponent>
  );
}

export default MobileMenuPanel;
