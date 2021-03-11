// react
import React, { useEffect, useRef } from 'react';
// third-party
import classNames from 'classnames';
// application
import {
  BlockHeaderBody,
  BlockHeaderTitle,
  BlockHeaderBreadcrumb,
  BlockHeaderStyledComponent
} from '~/styled-components/block/BlockHeader';
import { ILink } from '~/interfaces/link';
import { useMedia } from '~/store/hooks';

interface Props {
  pageTitle?: React.ReactNode;
  breadcrumb?: ILink[];
  afterHeader?: boolean;
}

function BlockHeader(props: Props) {
  const { pageTitle, breadcrumb = [], afterHeader = true } = props;
  const hasPageTitle = !!pageTitle;
  const hasBreadcrumb = breadcrumb.length > 0;
  const elementRef = useRef<HTMLDivElement | null>(null);
  const titleElementRef = useRef<HTMLHeadingElement | null>(null);
  const titleVisible = useMedia('(min-width: 1200px)');

  const calcTitleWidth = () => {
    // So that breadcrumbs correctly flow around the page title, we need to know its width.
    // This code simply conveys the width of the page title in CSS.

    if (!elementRef.current || !titleElementRef.current) {
      return;
    }

    const { width } = titleElementRef.current.getBoundingClientRect();

    elementRef.current.style.setProperty(
      '--block-header-title-width',
      `${width}px`
    );
  };

  useEffect(() => {
    if (titleVisible) {
      calcTitleWidth();
    }
  }, [pageTitle, titleVisible]);

  return (
    <BlockHeaderStyledComponent ref={elementRef}>
      <div className="container">
        <BlockHeaderBody>
          {hasBreadcrumb && (
            <BlockHeaderBreadcrumb
              items={breadcrumb}
              withPageTitle={hasPageTitle}
              afterHeader={afterHeader}
            />
          )}
          {hasPageTitle && (
            <BlockHeaderTitle ref={titleElementRef}>
              {pageTitle}
            </BlockHeaderTitle>
          )}
        </BlockHeaderBody>
      </div>
    </BlockHeaderStyledComponent>
  );
}

export default BlockHeader;
