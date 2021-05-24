export function makeIdGenerator() {
  let lastId = 0;

  return (() => () => {
    lastId += 1;

    return lastId;
  })();
}

const getNextId = makeIdGenerator();

const fetchImages = (images: any) => {
  if (images && images.length > 0) {
    let TotalImage: any = [];
    images.forEach((image: any) => {
      TotalImage.push(`/images/fasteners/anchors/${image}.png`);
    });
    return TotalImage;
  }
  return ['/images/products/product-2-1.jpg'];
};

export const createProductName = (def: any) => {
  const words = def.split(' ');

  let productName: any = words
    .map((word: any) => {
      return word[0].toUpperCase() + word.substring(1);
    })
    .join(' ');

  return productName;
};

const createProductSlug = (def: any) => {
  return `${def.toLowerCase().replace(/ /g, '_')}`;
};

export const addAttributes = (def: any, image: any) => {
  return {
    id: getNextId(),
    name: createProductName(def),
    slug: createProductSlug(def),
    excerpt: `
                      Many philosophical debates that began in ancient times are still debated today. In one general sense,
                      philosophy is associated with wisdom, intellectual culture and a search for knowledge.
                  `,
    description: def,
    sku: 'HJ55263',
    partNumber: 'BDX-750Z370-S',
    stock: 'in-stock',
    price: 25,
    compareAtPrice: 45,
    images: fetchImages(image),
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
};

// export const makeProduct = (products: any) => {
//   if (
//     products?.data &&
//     products?.data.products &&
//     products.data.products.length > 0
//   ) {
//     return products.data.products.map((def: any) => {
//       return addKeys(def, products);
//     });
//   } else if (products.products && products.products.length > 0) {
//     return products.products.map((def: any) => {
//       return addKeys(def, products);
//     });
//   }
//   return [];
// };
