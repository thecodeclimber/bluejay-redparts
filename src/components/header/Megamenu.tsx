// react
import React from 'react';
// third-party
import classNames from 'classnames';
// application
import AppImage from '~/components/shared/AppImage';
import MegamenuLinks from '~/components/header/MegamenuLinks';
import { ILink } from '~/interfaces/link';
import { IMegamenu } from '~/interfaces/menu';
import { MegaMenuImage, MegaMenu } from '~/styled-components/header/Megamenu';
interface Props extends React.HTMLAttributes<HTMLElement> {
  menu: any;
  onItemClick?: (item: ILink) => void;
}

function Megamenu(props: Props) {
  const { menu, onItemClick, className, ...rootProps } = props;
  const hasImage = !menu.image;

  const rootClasses = classNames(className);

  return (
    <MegaMenu className={rootClasses} {...rootProps}>
      {hasImage && (
        <MegaMenuImage>
          <AppImage className="reflect-rtl" src={menu.image} />
        </MegaMenuImage>
      )}
      <div className="row">
        <div className="col-sm">
          <MegamenuLinks
            className="megamenu__links"
            links={menu}
            onItemClick={onItemClick}
          />
        </div>
      </div>
    </MegaMenu>
  );
}

export default Megamenu;
