// react
import React from 'react';
// application
import AppLink from '~/components/shared/AppLink';
import Collapse, { ICollapseRenderFn } from '~/components/shared/Collapse';
import url from '~/services/url';
import { ICategory } from '~/interfaces/category';
import {
    WidgetWidgetCategories ,
    WidgetHeader ,
    WidgetCategoriesListRoot
} 
from '~/styled-components/widgets/WidgetCategories';
interface Props {
    widgetTitle?: React.ReactNode;
    categories: ICategory[];
}

type RenderFilterFn = ICollapseRenderFn<HTMLLIElement, HTMLDivElement>;

function WidgetCategories(props: Props) {
    const { widgetTitle, categories } = props;

    return (
        < WidgetWidgetCategories >
            {widgetTitle && (
                <WidgetHeader >
                    <h4>{widgetTitle}</h4>
                </WidgetHeader>
            )}
            <ul className="widget-categories__list widget-categories__list--root">
                {categories.map((category, index) => {
                    const children: ICategory[] = category.children || [];

                    const render: RenderFilterFn = ({ toggle, setItemRef, setContentRef }) => (
                        <li className="widget-categories__item" ref={setItemRef}>
                            <AppLink href={url.category(category)} className="widget-categories__link">
                                {category.name}
                            </AppLink>
                            {children.length > 0 && (
                                <React.Fragment>
                                    <button
                                        type="button"
                                        className="widget-categories__expander"
                                        aria-label="Toggle"
                                        onClick={toggle}
                                    />
                                    <div className="widget-categories__container" ref={setContentRef}>
                                        <ul className="widget-categories__list widget-categories__list--child">
                                            {children.map((child, childIndex) => (
                                                <li key={childIndex} className="widget-categories__item">
                                                    <AppLink
                                                        href={url.category(child)}
                                                        className="widget-categories__link"
                                                    >
                                                        {child.name}
                                                    </AppLink>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </React.Fragment>
                            )}
                        </li>
                    );

                    return (
                        <Collapse
                            key={index}
                            toggleClass="widget-categories__item--open"
                            render={render}
                        />
                    );
                })}
            </ul>
        </ WidgetWidgetCategories>
    );
}

export default WidgetCategories;
