/* eslint-disable import/prefer-default-export */

// application
import { anchor } from '~/fake-server/database/products/anchors';
import { IProductAttribute } from '~/interfaces/product';
import { IShopCategory } from '~/interfaces/category';
import { makeIdGenerator, nameToSlug } from '~/fake-server/utils';
import { prepareCategory } from '~/fake-server/endpoints/categories';
import { IProductAttributesDef } from '~/fake-server/interfaces/product-def';
import { shopCategoriesList } from '~/fake-server/database/categories';

const getNextId = makeIdGenerator();

function resolveProductAttributesDef(
  attributesDef: IProductAttributesDef
): IProductAttribute[] {
  const attributes: IProductAttribute[] = [];
  const keys = Object.keys(attributesDef);

  for (let i = 0; i < keys.length; i += 1) {
    const attributeName = keys[i];

    const attribute: any = {
      name: attributeName,
      slug: nameToSlug(attributeName),
      featured: false,
      values: [],
    };

    const valuesDef = attributesDef[attributeName];
    let valueNames: string[] = [];

    if (typeof valuesDef === 'string') {
      valueNames = [valuesDef];
    } else {
      if (valuesDef[0] === true) {
        attribute.featured = true;
        valuesDef.splice(0, 1);
      }

      valueNames = valuesDef as string[];
    }
    valueNames.forEach((valueName) => {
      attribute.values.push({
        name: valueName,
        slug: nameToSlug(valueName),
      });
    });
    if (attribute.values.length > 0) {
      attributes.push(attribute);
    }
  }
  attributes.forEach((value) => {});

  return attributes;
}

const fetchImages = (def: any) => {
  const checkAttribute = (def: any) => {
    if (def?.color && def?.color !== 'n/a') return `__${def.color}__`;
    else if (def?.finish && def?.finish !== 'n/a') return `__${def.finish}__`;
    else if (def?.head_type && def?.head_type !== 'n/a')
      return `__${def.head_type}__`;
    else if (def?.material && def?.material !== 'n/a')
      return `__${def.material}__`;
    else return false;
  };
  let value = checkAttribute(def);

  return [
    `/images/${def?.superCategory.toLowerCase()}/${def?.Type.trim()
      .toLowerCase()
      .replace(/ /g, '_')}/fasteners__${def?.Type.trim()
      .toLowerCase()
      .replace(/ /g, '_')}__${def?.Category.trim()
      .toLowerCase()
      .replace(/ /g, '_')}${
      value ? value.toLowerCase().replace(/ /g, '_') : '__'
    }800x800 (1).png`,
    '/images/products/product-2-1.jpg',
  ];
};

const handleNotAvailable = (item: any) => {
  if (item && item !== 'n/a') return `${item.toLowerCase().replace(/ /g, '_')}`;
  return '';
};

const handelDiameter = (diameter: any) => {
  if (diameter && diameter !== 'n/a') {
    return `,  ` + diameter;
  }
  return '';
};

const createProductName = (def: any) => {
  return (
    `${def.Category.charAt(0).toUpperCase() + def.Category.slice(1)}` +
    ` ` +
    handleNotAvailable(def?.material).charAt(0).toUpperCase() +
    def?.material.slice(1) +
    ` ` +
    `${def?.Type.charAt(0).toUpperCase() + def?.Type.slice(1)}` +
    handelDiameter(def?.diameter)
  );
};

const createProductSlug = (def: any) => {
  return (
    `${def.Category.toLowerCase().replace(/ /g, '_')}` +
    `_` +
    handleNotAvailable(def?.material) +
    `_` +
    `${def.Type.toLowerCase().replace(/ /g, '_')}` +
    `_` +
    `${def.diameter}`
  );
};

const makeProducts = (defs: any[]): any[] => {
  return defs.map((def) => {
    const categorySlugs: string[] = def.categories || ['anchor'];
    const categories = categorySlugs
      .map((categorySlug) =>
        shopCategoriesList.find((x) => x.slug === categorySlug)
      )
      .map((x) => (x ? prepareCategory(x) : null))
      .filter((x) => x !== null) as IShopCategory[];

    return {
      id: getNextId(),
      name: createProductName(def),
      slug: createProductSlug(def),
      excerpt: `
                Many philosophical debates that began in ancient times are still debated today. In one general sense,
                philosophy is associated with wisdom, intellectual culture and a search for knowledge.
            `,
      description: def.description,
      sku: def.sku,
      partNumber: 'BDX-750Z370-S',
      stock: 'in-stock',
      price: Number(def?.list_price) || '',
      images: fetchImages(def),
      type: {
        slug: 'default',
        name: 'Default',
        attributeGroups: [
          {
            name: 'General',
            slug: 'general',
            attributes: [
              'length',
              'diameter',
              'head_type',
              'drive',
              'grade',
              'material',
              'finish',
              'qty_per_box',
            ],
          },
          {
            name: 'Dimensions',
            slug: 'dimensions',
            attributes: ['length', 'diameter'],
          },
        ],
      },
      attributes: resolveProductAttributesDef({
        length: [true, `${def?.length}` || ''],
        diameter: [true, `${def?.diameter} ` || ''],
        head_type: [true, `${def?.head_type}` || ''],
        drive: [true, `${def?.drive}` || ''],
        grade: [true, `${def?.grade}` || ''],
        Material: [true, `${def?.material}` || ''],
        finish: [true, `${def?.finish}` || ''],
        qty_per_box: [true, `${Number(def?.qty_per_box)}` || ''],
      }),
      options: [
        {
          type: 'default',
          slug: 'material',
          name: 'Material',
          values: [
            { slug: 'steel', name: 'Steel' },
            { slug: 'aluminium', name: 'Aluminium' },
            { slug: 'thorium', name: 'Thorium' },
          ],
        },
      ],
      subCategory: def.Category,
    };
  });
};

const TotalProducts = [];

TotalProducts.push(...anchor);

export const products: any[] = makeProducts(TotalProducts);
