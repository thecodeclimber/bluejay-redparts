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
  menu: IMegamenu;
  onItemClick?: (item: ILink) => void;
}

function Megamenu(props: Props) {
  const { menu, onItemClick, className, ...rootProps } = props;
  const hasImage = !!menu.image;

  const rootClasses = classNames(className);

  return (
    <MegaMenu className={rootClasses} {...rootProps}>
      {hasImage && (
        <MegaMenuImage>
          <AppImage className="reflect-rtl" src={menu.image} />
        </MegaMenuImage>
      )}
      <div className="row">
        {menu.columns.map((column, columnIndex) => {
          const columnClasses = classNames(`col-${column.size}`);
          const hasLinks = column.links?.length > 0;

          return (
            <div className={columnClasses} key={columnIndex}>
              {hasLinks && (
                <MegamenuLinks
                  className="megamenu__links"
                  links={column.links}
                  onItemClick={onItemClick}
                />
              )}
            </div>
          );
        })}
      </div>
    </MegaMenu>
  );
}

export default Megamenu;
