// react
import React, { useRef } from 'react';
// third-party
import { UncontrolledTooltip } from 'reactstrap';
// application
import {
  StatusBadgeStyledComponent,
  StatusBadgeBody,
  StatusBadgeText,
  StatusBadgeIcon,
  StatusBadgeTooltip,
} from '~/styled-components/components/StatusBadge';
import { FitSvg, NoFitSvg } from '~/svg';

export type IStatusBadgeType = 'success' | 'failure' | 'warning' | 'unknown';

export type IStatusBadgeIcon = 'success' | 'failure';

interface Props extends React.HTMLAttributes<HTMLElement> {
  type: IStatusBadgeType;
  icon?: IStatusBadgeIcon;
  text?: React.ReactNode;
  tooltip?: string;
}

function StatusBadge(props: Props) {
  const { type, icon, text, tooltip, className } = props;
  const tooltipRef = useRef<HTMLDivElement>(null);

  return (
    <StatusBadgeStyledComponent
      className={className}
      type={type}
      hasText={text !== undefined}
      hasIcon={icon !== undefined}
    >
      <StatusBadgeBody>
        {icon !== undefined && (
          <StatusBadgeIcon>
            {
              {
                success: <FitSvg />,
                failure: <NoFitSvg />,
              }[icon]
            }
          </StatusBadgeIcon>
        )}
        {text !== undefined && <StatusBadgeText>{text}</StatusBadgeText>}
        {tooltip !== undefined && (
          <React.Fragment>
            {/* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex */}
            <StatusBadgeTooltip tabIndex={0} ref={tooltipRef} />

            <UncontrolledTooltip
              target={tooltipRef}
              fade={false}
              delay={{ show: 0, hide: 0 }}
            >
              {tooltip}
            </UncontrolledTooltip>
          </React.Fragment>
        )}
      </StatusBadgeBody>
    </StatusBadgeStyledComponent>
  );
}

export default StatusBadge;
