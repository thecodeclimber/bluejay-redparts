// react
import React from 'react';
// third-party
import classNames from 'classnames';
// application
import {
  MegaMenuLinks,
  MegaMenuItemLinksItemLink,
  MegaMenuLinkItem,
} from '~/styled-components/header/MegamenuLinks';
import { ILink, INestedLink } from '~/interfaces/link';

interface Props extends React.HTMLAttributes<HTMLElement> {
  links: INestedLink[];
  level?: number;
  onItemClick?: (item: ILink) => void;
}

function MegamenuLinks(props: Props) {
  const { links, level = 0, onItemClick, className, ...rootProps } = props;

  return (
    <MegaMenuLinks  {...rootProps}>
      {links.map((link, linkIndex) => {
        const subLinks = link.links || [];
        const hasSubLinks = subLinks.length > 0;

        return (
          <MegaMenuLinkItem key={linkIndex}>
            <MegaMenuItemLinksItemLink
              hasSubLinks={hasSubLinks}
              href={link.url}
              onClick={() => onItemClick && onItemClick(link)}
              {...link.customFields?.anchorProps}
            >
              {link.title}
            </MegaMenuItemLinksItemLink>
            {hasSubLinks && (
              <MegamenuLinks links={subLinks} level={level + 1} />
            )}
          </MegaMenuLinkItem>
        );
      })}
    </MegaMenuLinks>
  );
}

export default React.memo(MegamenuLinks);
