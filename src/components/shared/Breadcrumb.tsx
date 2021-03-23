// react
import React from 'react';
// third-party
import classNames from 'classnames';
// application
import {
  BreadcrumbStyledComponent,
  BreadcrumbList,
  BreadcrumbSpaceshipSafeArea,
  BreadcrumbItemLink,
  BreadcrumbItem,
  BreadcrumbTitleSafeArea,
} from '~/styled-components/components/BreadCrumb';
import AppLink from '~/components/shared/AppLink';
import { ILink } from '~/interfaces/link';

interface Props extends React.HTMLAttributes<HTMLElement> {
  items: ILink[];
  withPageTitle?: boolean;
  afterHeader?: boolean;
}

function Breadcrumb(props: Props) {
  const { className, items, withPageTitle = false, afterHeader = true } = props;

  const rootClasses = classNames('breadcrumb', className);

  return (
    <BreadcrumbStyledComponent aria-label="breadcrumb">
      <BreadcrumbList as="ol">
        {afterHeader && <BreadcrumbSpaceshipSafeArea role="presentation" />}

        {items.map((item, index) => {
          const isFirst = index === 0;
          const isLast = index === items.length - 1;

          return (
            <BreadcrumbItem
              as="li"
              isFirst={isFirst}
              isLast={isLast}
              key={index}
              aria-current={isLast ? 'page' : undefined}
            >
              {isLast && <BreadcrumbItemLink>{item.title}</BreadcrumbItemLink>}
              {!isLast && (
                <BreadcrumbItemLink as={AppLink} href={item.url}>
                  {item.title}
                </BreadcrumbItemLink>
              )}
            </BreadcrumbItem>
          );
        })}

        {withPageTitle && (
          <BreadcrumbTitleSafeArea as="li" role="presentation" />
        )}
      </BreadcrumbList>
    </BreadcrumbStyledComponent>
  );
}

export default Breadcrumb;
