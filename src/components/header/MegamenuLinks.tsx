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
import { shopFetchProducts } from '../../store/shop/shopActions';
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
    const products = await axios.get(`/sub_categories/${item._id}/products`);
    dispatch(shopFetchProducts(products.data));
    router.push(
      `/catalog/${item.name.toLowerCase().replace(/ /g, '-')}/products`
    );
  };

  return (
    <MegaMenuLinks {...rootProps}>
      {links.map((link: any, linkIndex) => {
        const subLinks = link.links || [];
        const hasSubLinks = subLinks.length > 0;
        return (
          <MegaMenuLinkItem key={linkIndex}>
            <MegaMenuItemLinksItemLink
              hasSubLinks={hasSubLinks}
              onClick={() => handleProducts(link)}
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
