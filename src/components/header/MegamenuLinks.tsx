// react
import React from 'react';
// third-party
import classNames from 'classnames';
import { useRouter } from 'next/router';
// application
import {
  MegaMenuLinks,
  MegaMenuItemLinksItemLink,
  MegaMenuLinkItem,
} from '~/styled-components/header/MegamenuLinks';
import AppLink from '~/components/shared/AppLink';
import { createProductName } from '../../store/shop/shopHelpers';
import { shopFetchProductsListSuccess } from '../../store/shop/shopActions';
import { ILink, INestedLink } from '~/interfaces/link';
import { useDispatch } from 'react-redux';
import axios from '../../axios';
import { Router } from 'next/router';

interface Props extends React.HTMLAttributes<HTMLElement> {
  links: INestedLink[];
  level?: number;
  onItemClick?: (item: ILink) => void;
}

function MegamenuLinks(props: Props) {
  const { links, level = 0, onItemClick, className, ...rootProps } = props;
  const dispatch = useDispatch();
  const router = useRouter();

  const handleProducts = async (item: any) => {
    localStorage.setItem('subCategoryId', item._id);
  };

  return (
    <MegaMenuLinks {...rootProps}>
      {links.map((link: any, linkIndex) => {
        const subLinks = link.links || [];
        const hasSubLinks = subLinks.length > 0;
        return (
          <MegaMenuLinkItem key={linkIndex}>
            <MegaMenuItemLinksItemLink
              as={AppLink}
              hassublinks={hasSubLinks ? 1 : 0}
              href={`/catalog/sub_category/${link.name
                .toLowerCase()
                .replace(/ /g, '-')}/products`}
              onClick={() => handleProducts(link)}
            >
              {createProductName(link.name)}
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
