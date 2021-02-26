// react
import React, { useState } from 'react';
// third-party
import classNames from 'classnames';
// application
import {
  MenuStyledComponent,
  MenuList,
  MenuLink,
  MenuArrow,
  MenuItem,
  MenuSubmenu,
} from '~/styled-components/header/Menu';
import { ArrowRoundedRight6x9Svg } from '~/svg';
import { INestedLink } from '~/interfaces/link';

interface Props {
  items: INestedLink[];
  onItemClick?: () => void;
}

function Menu(props: Props) {
  const { items, onItemClick } = props;
  return (
    <MenuStyledComponent>
      <MenuList>
        {items.map((item, index) => {
          const submenu = item.links || [];
          const hasSubmenu = submenu.length > 0;

          return (
            <MenuItem submenu={hasSubmenu} key={index}>
              <MenuLink
                as="a"
                href={item.url}
                onClick={onItemClick}
                {...item.customFields?.anchorProps}
              >
                {item.title}
                {hasSubmenu && (
                  <MenuArrow>
                    <ArrowRoundedRight6x9Svg />
                  </MenuArrow>
                )}
              </MenuLink>
              {hasSubmenu && (
                <MenuSubmenu>
                  <Menu items={submenu} onItemClick={onItemClick} />
                </MenuSubmenu>
              )}
            </MenuItem>
          );
        })}
      </MenuList>
    </MenuStyledComponent>
  );
}

export default Menu;
