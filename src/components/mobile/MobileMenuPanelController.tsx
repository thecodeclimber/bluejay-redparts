// react
import React, { useContext, useState } from 'react';
import ReactDOM from 'react-dom';
// application
import {
  MobileMenuPanelStyledComponent,
  MobileMenuPanelHeader,
  MobileMenuPanelTitle,
  MobileMenuPanelBody,
  MobileMenuPanelBack,
} from '~/styled-components/mobile/MobileMenu';
import { ArrowRoundedLeft7x11Svg } from '~/svg';
import {
  MobileMenuContext,
  MobileMenuLevelContext,
} from '~/services/mobile-menu';

interface Props {
  label: React.ReactNode;
  content: React.ReactNode;
  children: (open: () => void) => JSX.Element | null | undefined;
}

function MobileMenuPanelController(props: Props) {
  const { label, content, children } = props;
  const level = useContext(MobileMenuLevelContext);
  const conveyor = useContext(MobileMenuContext);
  const [id] = useState(() => {
    conveyor.lastPanelIdRef.current += 1;

    return conveyor.lastPanelIdRef.current;
  });

  const childrenTemplate =
    children(() => {
      conveyor.open(id);
    }) || null;

  const renderPanel = () => {
    if (!conveyor.containerRef || !conveyor.containerRef.current) {
      return null;
    }

    const panel = (
      <MobileMenuPanelStyledComponent
        style={{
          transform: `translateX(${level * 100}%)`,
        }}
      >
        <MobileMenuPanelHeader>
          {level > 0 && (
            <MobileMenuPanelBack
              as="button"
              type="button"
              onClick={conveyor.close}
            >
              <ArrowRoundedLeft7x11Svg />
            </MobileMenuPanelBack>
          )}
          <MobileMenuPanelTitle>{label}</MobileMenuPanelTitle>
        </MobileMenuPanelHeader>
        <MobileMenuPanelBody>
          <MobileMenuLevelContext.Provider value={level + 1}>
            {content}
          </MobileMenuLevelContext.Provider>
        </MobileMenuPanelBody>
      </MobileMenuPanelStyledComponent>
    );

    return ReactDOM.createPortal(panel, conveyor.containerRef.current);
  };

  return (
    <React.Fragment>
      {(conveyor.stack.includes(id) || conveyor.bin.includes(id)) &&
        renderPanel()}
      {childrenTemplate && React.Children.only(childrenTemplate)}
    </React.Fragment>
  );
}

export default MobileMenuPanelController;
