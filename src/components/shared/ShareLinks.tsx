// react
import React from 'react';
// third-party
import classNames from 'classnames';
// application
import AppLink from '~/components/shared/AppLink';
import {
  ShareLinksList,
  ShareLinksItemTypeLike,
  ShareLinksItemTypeTweet,
  ShareLinksItemTypePin,
  ShareLinksItemTypeCounter,
} from '~/styled-components/components/ShareLinks';
interface Props extends React.HTMLAttributes<HTMLDivElement> {}

function ShareLinks(props: Props) {
  const { className, ...rootProps } = props;

  const rootClasses = classNames(className);

  return (
    <div className={rootClasses} {...rootProps}>
      <ShareLinksList>
        <ShareLinksItemTypeLike>
          <AppLink href="/">Like</AppLink>
        </ShareLinksItemTypeLike>
        <ShareLinksItemTypeTweet>
          <AppLink href="/">Tweet</AppLink>
        </ShareLinksItemTypeTweet>
        <ShareLinksItemTypePin>
          <AppLink href="/">Pin It</AppLink>
        </ShareLinksItemTypePin>
        <ShareLinksItemTypeCounter>
          <AppLink href="/">4K</AppLink>
        </ShareLinksItemTypeCounter>
      </ShareLinksList>
    </div>
  );
}

export default ShareLinks;
