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
    <MegaMenuLinks {...rootProps}>
      {links.map((link: any, linkIndex) => {
        const subLinks = link.links || [];
        const hasSubLinks = subLinks.length > 0;
        return (
          <MegaMenuLinkItem key={linkIndex}>
            <MegaMenuItemLinksItemLink
              hasSubLinks={hasSubLinks}
              href={`/catalog/${link.name
                .toLowerCase()
                .replace(/ /g, '-')}/products`}
              onClick={() => onItemClick && onItemClick(link)}
              {...link.customFields?.anchorProps}
            >
              {link.name.charAt(0).toUpperCase() + link.name.slice(1)}
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
