// react
import React, { useState } from 'react';
// application
import Collapse, { ICollapseRenderFn } from '~/components/shared/Collapse';
import url from '~/services/url';
import { ICategory } from '~/interfaces/category';
import {
  WidgetWidgetCategories,
  WidgetHeader,
  WidgetCategoriesListRoot,
  WidgetCategoriesItem,
  WidgetCategoriesLink,
  WidgetCategoriesContainer,
  WidgetCategoriesListChild,
  WidgetCategoriesExpander,
} from '~/styled-components/widgets/WidgetCategories';
interface Props {
  widgetTitle?: React.ReactNode;
  categories: ICategory[];
}

type RenderFilterFn = ICollapseRenderFn<HTMLLIElement, HTMLDivElement>;

function WidgetCategories(props: Props) {
  const { widgetTitle, categories } = props;
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prevCheck) => !prevCheck);
  };
  return (
    <WidgetWidgetCategories>
      {widgetTitle && (
        <WidgetHeader>
          <h4>{widgetTitle}</h4>
        </WidgetHeader>
      )}
      <WidgetCategoriesListRoot>
        {categories.map((category, index) => {
          const children: ICategory[] = category.children || [];

          const render: RenderFilterFn = ({
            toggle,
            setItemRef,
            setContentRef,
          }) => (
            <WidgetCategoriesItem ref={setItemRef}>
              <WidgetCategoriesLink href={url.category(category)}>
                {category.name}
              </WidgetCategoriesLink>
              {children.length > 0 && (
                <React.Fragment>
                  <WidgetCategoriesExpander
                    isOpen={isOpen}
                    type="button"
                    aria-label="Toggle"
                    onClick={() => handleToggle()}
                  />
                  <WidgetCategoriesContainer
                    isOpen={isOpen}
                    ref={setContentRef}
                  >
                    <WidgetCategoriesListChild>
                      {children.map((child, childIndex) => (
                        <WidgetCategoriesItem key={childIndex}>
                          <WidgetCategoriesLink href={url.category(child)}>
                            {child.name}
                          </WidgetCategoriesLink>
                        </WidgetCategoriesItem>
                      ))}
                    </WidgetCategoriesListChild>
                  </WidgetCategoriesContainer>
                </React.Fragment>
              )}
            </WidgetCategoriesItem>
          );

          return (
            <Collapse
              key={index}
              toggleClass="widget-categories__item--open"
              render={render}
            />
          );
        })}
      </WidgetCategoriesListRoot>
    </WidgetWidgetCategories>
  );
}

export default WidgetCategories;
