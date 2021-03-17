// react
import React from 'react';
// third-party
import { FormattedMessage } from 'react-intl';
// application
import AppImage from '~/components/shared/AppImage';
import AppLink from '~/components/shared/AppLink';
import Decor from '~/components/shared/Decor';
import url from '~/services/url';
import { ICategory } from '~/interfaces/category';
import {
  BlockBlockCategories,
  BlockCategoriesHeader,
  BlockCategoriesTitle,
  BlockCategoriesBody,
  BlockCategoriesList,
  BlockCategoriesItem,
  BlockCardBody,
  BlockCardContent,
  CategoryCardImage,
  CategoryCardInfo,
  CategoryCardName,
  CategoryCardChildren,
  CategoryCardActions,
  CategoryCardLink,
} from '~/styled-components/blocks/BlockCategories';
interface Props {
  blockTitle?: React.ReactNode;
  categories: ICategory[];
}

function BlockCategories(props: Props) {
  const { blockTitle, categories } = props;

  const categoriesTemplate = categories.map((category) => {
    const children: ICategory[] = (category.children || []).slice(0, 5);

    return (
      <BlockCategoriesItem key={category.id}>
        <BlockCardBody>
          <BlockCardContent>
            {category.image && (
              <CategoryCardImage>
                <AppLink href={url.category(category)}>
                  <AppImage src={category.image} />
                </AppLink>
              </CategoryCardImage>
            )}
            <CategoryCardInfo>
              <CategoryCardName>
                <AppLink href={url.category(category)}>{category.name}</AppLink>
              </CategoryCardName>
              <CategoryCardChildren>
                {children.map((child) => (
                  <li key={child.id}>
                    <AppLink href={url.category(child)}>{child.name}</AppLink>
                  </li>
                ))}
              </CategoryCardChildren>
              <CategoryCardActions>
                <CategoryCardLink href={url.category(category)}>
                  <FormattedMessage id="LINK_SHOP_ALL" />
                </CategoryCardLink>
              </CategoryCardActions>
            </CategoryCardInfo>
          </BlockCardContent>
        </BlockCardBody>
      </BlockCategoriesItem>
    );
  });

  return (
    <BlockBlockCategories>
      {blockTitle && (
        <div className="container">
          <BlockCategoriesHeader>
            <BlockCategoriesTitle>
              {blockTitle}
              <Decor type="center" className="block-categories__title-decor" />
            </BlockCategoriesTitle>
          </BlockCategoriesHeader>
        </div>
      )}
      <BlockCategoriesBody>
        <Decor type="bottom" className="block-categories__body-decor" />
        <div className="container">
          <BlockCategoriesList>{categoriesTemplate}</BlockCategoriesList>
        </div>
      </BlockCategoriesBody>
    </BlockBlockCategories>
  );
}

export default React.memo(BlockCategories);
