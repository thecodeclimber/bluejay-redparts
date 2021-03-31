/* eslint-disable import/prefer-default-export */

// application
import { IBrand } from '~/interfaces/brand';
import { anchor } from '~/fake-server/database/products/anchors';
import { bolts } from '~/fake-server/database/products/bolts';
import { nuts } from '~/fake-server/database/products/nuts';
import { pins } from '~/fake-server/database/products/pins';
import { hexHeadCapScrews } from '~/fake-server/database/products/hex_head_cap_screws';
import { screws } from '~/fake-server/database/products/screws';
import { washers } from '~/fake-server/database/products/washers';
import { IProduct, IProductAttribute } from '~/interfaces/product';
import { IShopCategory } from '~/interfaces/category';
import { makeIdGenerator, nameToSlug } from '~/fake-server/utils';
import { prepareCategory } from '~/fake-server/endpoints/categories';
import {
  IProductAttributesDef,
  IProductDef,
} from '~/fake-server/interfaces/product-def';
import { shopCategoriesList } from '~/fake-server/database/categories';

const getNextId = makeIdGenerator();

function resolveProductAttributesDef(
  attributesDef: IProductAttributesDef
): IProductAttribute[] {
  const attributes: IProductAttribute[] = [];
  const keys = Object.keys(attributesDef);

  for (let i = 0; i < keys.length; i += 1) {
    const attributeName = keys[i];
    const attribute: IProductAttribute = {
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

  return attributes;
}

function makeProducts(defs: any[]): IProduct[] {
  return defs.map((def) => {
    let badges: string[] = [];

    // if (def.badges) {
    //   if (typeof def.badges === 'string') {
    //     badges = [def.badges];
    //   } else {
    //     badges = def.badges.slice(0);
    //   }
    // }

    let brand: IBrand = {
      slug: 'brandix',
      name: 'Brandix',
      image: '',
      country: 'JP',
    };

    // if (def.brand) {
    //   brand = brands.find((x) => x.slug === def.brand) || brand;
    // }

    const categorySlugs: string[] = def.categories || ['anchor'];
    const categories = categorySlugs
      .map((categorySlug) =>
        shopCategoriesList.find((x) => x.slug === categorySlug)
      )
      .map((x) => (x ? prepareCategory(x) : null))
      .filter((x) => x !== null) as IShopCategory[];

    const attributesDef: IProductAttributesDef = {
      Speed: [true, '750 RPM'],
      'Power Source': [true, 'Cordless-Electric'],
      'Battery Cell Type': [true, 'Lithium'],
      Voltage: [true, '20 Volts'],
      'Battery Capacity': [true, '2 Ah'],
      Material: [
        'Aluminium',
        'Plastic',
        'Metal',
        'Nylon',
        'Steel',
        'Stainless Steel',
      ],
      'Engine Type': 'Brushless',
      Length: '99 mm',
      Width: '207 mm',
      Height: '208 mm',
    };

    return {
      id: getNextId(),
      name: def.name,
      excerpt: `
                Many philosophical debates that began in ancient times are still debated today. In one general sense,
                philosophy is associated with wisdom, intellectual culture and a search for knowledge.
            `,
      description: def.description,
      slug: def.slug,
      sku: def.sku,
      partNumber: 'BDX-750Z370-S',
      stock: 'in-stock',
      price: def.list_price,
      compareAtPrice: def.compareAtPrice || null,
      images: def.images.slice(0),
      badges,
      rating: def.rating,
      reviews: def.reviews,
      availability: def.availability,
      compatibility: def.compatibility || 'all',
      brand,
      type: {
        slug: 'default',
        name: 'Default',
        attributeGroups: [
          {
            name: 'General',
            slug: 'general',
            attributes: [
              'speed',
              'power-source',
              'battery-cell-type',
              'voltage',
              'battery-capacity',
              'material',
              'engine-type',
            ],
          },
          {
            name: 'Dimensions',
            slug: 'dimensions',
            attributes: ['length', 'width', 'height'],
          },
        ],
      },
      attributes: resolveProductAttributesDef({
        ...attributesDef,
        ...def.attributes,
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
        {
          type: 'color',
          slug: 'color',
          name: 'Color',
          values: [
            { slug: 'white', name: 'White', color: '#fff' },
            { slug: 'yellow', name: 'Yellow', color: '#ffd333' },
            { slug: 'red', name: 'Red', color: '#ff4040' },
            { slug: 'blue', name: 'Blue', color: '#4080ff' },
          ],
        },
      ],
      tags: [
        'Brake Kit',
        'Brandix',
        'Filter',
        'Bumper',
        'Transmission',
        'Hood',
      ],
      categories,
      customFields: {},
    };
  });
}

const TotalProducts = [];

TotalProducts.push(
  ...anchor,
  ...bolts,
  ...nuts,
  ...pins,
  ...screws,
  ...washers,
  ...hexHeadCapScrews
);

export const products: any[] = makeProducts(TotalProducts);
