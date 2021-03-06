// react
import React ,{useState} from 'react';
// third-party
import classNames from 'classnames';
// application
import AppLink from '~/components/shared/AppLink';
import Collapse, { ICollapseRenderFnData } from '~/components/shared/Collapse';
import url from '~/services/url';
import { ArrowDown9x6Svg } from '~/svg';
import { ICategory } from '~/interfaces/category';
import {
    WidgetWidgetCategoriesList ,
    WidgetCategoriesListBody ,
    WidgetCategoriesListRoot ,
    WidgetCategoriesListRootItem ,
    WidgetCategoriesListRootLink ,
    WidgetCategoriesListChild ,
    WidgetCategoriesListChildItem ,
    WidgetCategoriesListShowMore ,
    WidgetCategoriesListShowMoreExpanText ,
    WidgetCategoriesListShowMoreCollapseText ,
    WidgetCategoriesListShowMoreArrow 
}
 from '~/styled-components/widget/WidgetCategoriesList';
type RenderFnData = ICollapseRenderFnData<HTMLLIElement, HTMLUListElement>;
type RenderFn = (data: RenderFnData, category: ICategory) => React.ReactNode;

interface Props {
    categories: ICategory[];
}

function WidgetCategoriesList(props: Props) {
    const { categories } = props;
    const [isOpen , setIsOpen] = useState(false);
       console.log(isOpen);
    const handleOpen = () => {
        setIsOpen(!isOpen);
    }
    const renderCategory: RenderFn = ({ toggle, setItemRef, setContentRef }, category: ICategory) => {
        const subs: ICategory[] = category.children || [];
        return (
            <WidgetCategoriesListRootItem
                length ={category.children?.length}
                ref={setItemRef}
            >
                <WidgetCategoriesListRootLink
                    href={url.category(category)}
                >
                    {category.name}
                </WidgetCategoriesListRootLink>

                {subs.length > 0 && (
                    < WidgetCategoriesListChild isOpen={isOpen} className="widget-categories-list__child">
                        {subs.slice(0, subs.length > 6 ? 5 : 6).map((sub, subIdx) => (
                            < WidgetCategoriesListChildItem key={subIdx} >
                                <AppLink
                                    href={url.category(sub)}
                                >
                                    {sub.name}
                                </AppLink>
                            </ WidgetCategoriesListChildItem>
                        ))}
                    </ WidgetCategoriesListChild>
                )}

                {subs.length > 6 && (
                    <React.Fragment>
                        < WidgetCategoriesListChild className="widget-categories-list__child" ref={setContentRef}>
                            {subs.slice(5).map((sub, subIdx) => (
                                <WidgetCategoriesListChildItem
                                    key={subIdx}
                                   
                                >
                                    <AppLink
                                        href={url.category(sub)}
                                    >
                                        {sub.name}
                                    </AppLink>
                                </WidgetCategoriesListChildItem>
                            ))}
                        </WidgetCategoriesListChild>
                        <WidgetCategoriesListShowMore
                           isOpen = {isOpen}
                            type="button"
                            onClick={() => {toggle() , handleOpen()}}
                        >
                            <WidgetCategoriesListShowMoreExpanText >Show More</WidgetCategoriesListShowMoreExpanText>
                            <WidgetCategoriesListShowMoreCollapseText >Show Less</WidgetCategoriesListShowMoreCollapseText>
                            <WidgetCategoriesListShowMoreArrow ><ArrowDown9x6Svg /></WidgetCategoriesListShowMoreArrow>
                        </WidgetCategoriesListShowMore>
                    </React.Fragment>
                )}
            </WidgetCategoriesListRootItem>
        );
    };

    return (
        <WidgetWidgetCategoriesList>
            <WidgetCategoriesListBody >
                <WidgetCategoriesListRoot >
                    {categories.map((category, categoryIdx) => (
                        <Collapse<HTMLLIElement, HTMLUListElement>
                            key={categoryIdx}
                            toggleClass="widget-categories-list--open"
                            render={(args) => renderCategory(args, category)}
                        />
                    ))}
                </WidgetCategoriesListRoot>
            </WidgetCategoriesListBody>
        </WidgetWidgetCategoriesList>
    );
}

export default WidgetCategoriesList;
