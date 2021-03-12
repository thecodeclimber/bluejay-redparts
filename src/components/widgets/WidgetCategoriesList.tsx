import React, { useState } from 'react';
// third-party
import classNames from 'classnames';
// application
import {
  WidgetCategoriesListRootItem,
  WidgetCategoriesListRootLink,
  WidgetCategoriesListShowMoreButton,
  WidgetCategoriesListChildItem,
  WidgetCategoriesListBody,
  WidgetCategoriesListRoot,
  WidgetCategoriesListChild,
  ShowMoreIcon,
  WidgetCategoriesListShowMoreArrow,
  WidgetCategoriesListShowMoreCollapseText,
  WidgetCategoriesListShowMoreExpandText,
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
              isOpen={isOpen}
            >
              <WidgetCategoriesListShowMoreCollapseText>
                Show Less
              </WidgetCategoriesListShowMoreCollapseText>

              <WidgetCategoriesListShowMoreExpandText>
                Show More
              </WidgetCategoriesListShowMoreExpandText>

              <ShowMoreIcon >
                <WidgetCategoriesListShowMoreArrow isOpen={isOpen}/>
              </ShowMoreIcon>
            </WidgetCategoriesListShowMoreButton>
          </React.Fragment>
        )}
      </WidgetCategoriesListRootItem>
    );
  };

  return (
    <div className="card">
      <WidgetCategoriesListBody>
        <WidgetCategoriesListRoot>
          {categories.map((category, categoryIdx) => (
            <Collapse<HTMLLIElement, HTMLUListElement>
              key={categoryIdx}
              toggleClass=""
              render={(args) => renderCategory(args, category)}
            />
          ))}
        </WidgetCategoriesListRoot>
      </WidgetCategoriesListBody>
    </div>
  );
}

export default WidgetCategoriesList;
