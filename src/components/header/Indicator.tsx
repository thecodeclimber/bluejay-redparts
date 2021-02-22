// react
import React, { PropsWithChildren, useMemo, useRef, useState } from 'react';
// application
import {
  IndicatorButton,
  IndicatorIcon,
  IndicatorCounter,
  IndicatorTitle,
  IndicatorValue,
  IndicatorContentOpen,
  IndicatorStyledComponent,
} from '~/styled-components/header/Indicator';
import { useGlobalMousedown } from '~/services/hooks';

type Trigger = 'none' | 'click' | 'hover';

export interface IIndicatorController {
  close: () => void;
}

interface Props extends PropsWithChildren<{}> {
  icon: React.ReactNode;
  href?: any;
  label?: React.ReactNode;
  value?: React.ReactNode;
  counter?: number;
  trigger?: Trigger;
  controllerRef?: React.MutableRefObject<IIndicatorController | null>;
}

function Indicator(props: Props) {

  const { icon, href, label, value, counter, trigger = 'none', children, controllerRef } = props;
  const hasLabel = label !== undefined && label !== null;
  const hasValue = value !== undefined && value !== null;
  const buttonType = href !== undefined ? 'link' : 'button';
  const showCounter = counter !== undefined && counter !== null;
  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  const controller = useMemo<IIndicatorController>(
    () => ({
      close: () => setIsOpen(false),
    }),
    [setIsOpen]
  );

  if (controllerRef) {
    controllerRef.current = controller;
  }

  useGlobalMousedown(
    (event) => {
      if (rootRef.current && !rootRef.current.contains(event.target as HTMLElement)) {
        setIsOpen(false);
      }
    },
    [setIsOpen, rootRef]
  );

  const handleButtonClick = (event: React.MouseEvent) => {
    if (trigger === 'click') {
      event.preventDefault();

      setIsOpen((prevState) => !prevState);
    }
  };

  const buttonContent = (
    <React.Fragment>
      <IndicatorIcon>
        {icon}
        {showCounter && <IndicatorCounter>{counter}</IndicatorCounter>}
      </IndicatorIcon>

      {hasLabel && <IndicatorTitle>{label}</IndicatorTitle>}
      {hasValue && <IndicatorValue>{value}</IndicatorValue>}
    </React.Fragment>
  );

  return (
    <IndicatorStyledComponent>
      {buttonType === 'button' && (
        <IndicatorButton as="button" type="button" onClick={handleButtonClick}>
          {buttonContent}
        </IndicatorButton>
      )}
      {buttonType === 'link' && (
        <IndicatorButton as="a" href={href} onClick={handleButtonClick}>
          {buttonContent}
        </IndicatorButton>
      )}
      {isOpen && <IndicatorContentOpen>{children}</IndicatorContentOpen>}
    </IndicatorStyledComponent>
  );
}

export default Indicator;
