import React, { useState } from 'react';
// third-party
import classNames from 'classnames';
// application
import {
  WidgetCategoriesListRootItem,
  WidgetCategoriesListRootLink,
  WidgetCategoriesListShowMoreButton,
  WidgetCategoriesListChildItem,
  WidgetCategoriesListChild,
} from '~/styled-components/widget/WidgetCategoriesList';
import AppLink from '~/components/shared/AppLink';
import Collapse, { ICollapseRenderFnData } from '~/components/shared/Collapse';
import url from '~/services/url';
import { ArrowDown9x6Svg } from '~/svg';
import { ICategory } from '~/interfaces/category';

type RenderFnData = ICollapseRenderFnData<HTMLLIElement, HTMLUListElement>;
type RenderFn = (data: RenderFnData, category: ICategory) => React.ReactNode;

interface Props {
  categories: ICategory[];
}

function WidgetCategoriesList(props: Props) {
  const { categories } = props;
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prevCheck) => !prevCheck);
  };

  const renderCategory: RenderFn = (
    { setItemRef, setContentRef },
    category: ICategory
  ) => {
    const subs: ICategory[] = category.children || [];

    return (
      <WidgetCategoriesListRootItem
        ref={setItemRef}
        hasChild={category.children?.length}
      >
        <WidgetCategoriesListRootLink href={url.category(category)}>
          {category.name}
        </WidgetCategoriesListRootLink>

        {subs.length > 0 && (
          <WidgetCategoriesListChild isOpen={true}>
            {subs.slice(0, subs.length > 6 ? 5 : 6).map((sub, subIdx) => (
              <WidgetCategoriesListChildItem key={subIdx}>
                <AppLink href={url.category(sub)}>{sub.name}</AppLink>
              </WidgetCategoriesListChildItem>
            ))}
          </WidgetCategoriesListChild>
        )}

        {subs.length > 6 && (
          <React.Fragment>
            <WidgetCategoriesListChild ref={setContentRef} isOpen={isOpen}>
              {subs.slice(5).map((sub, subIdx) => (
                <WidgetCategoriesListChildItem key={subIdx}>
                  <AppLink href={url.category(sub)}>{sub.name}</AppLink>
                </WidgetCategoriesListChildItem>
              ))}
            </WidgetCategoriesListChild>
            <WidgetCategoriesListShowMoreButton
              type="button"
              onClick={handleToggle}
            >
              <span className="widget-categories-list__show-more-expand-text">
                Show More
              </span>
              <span className="widget-categories-list__show-more-collapse-text">
                Show Less
              </span>
              <span className="widget-categories-list__show-more-arrow">
                <ArrowDown9x6Svg />
              </span>
            </WidgetCategoriesListShowMoreButton>
          </React.Fragment>
        )}
      </WidgetCategoriesListRootItem>
    );
  };

  return (
    <div className="card widget widget-categories-list">
      <div className="widget-categories-list__body">
        <ul className="widget-categories-list__root">
          {categories.map((category, categoryIdx) => (
            <Collapse<HTMLLIElement, HTMLUListElement>
              key={categoryIdx}
              toggleClass="widget-categories-list--open"
              render={(args) => renderCategory(args, category)}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default WidgetCategoriesList;
