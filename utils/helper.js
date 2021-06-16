const { SubCategory, Product, Attribute } = require('../models');
exports.getCombn = ({ items, category, sub_category }) => {
  if (items.length == 1)
    return items[0].map((item) => `${sub_category} ${category} ${item}`);
  return this.getAllCombinations(items).map(
    (item) =>
      `${sub_category} ${category} ${item.join(' ').replace(/ /g, ', ')}`
  );
};

exports.getAllCombinations = (arraysToCombine) => {
  var divisors = [];

  if ([0, 1].includes(arraysToCombine.length)) return arraysToCombine;

  for (var i = arraysToCombine.length - 1; i >= 0; i--) {
    divisors[i] = divisors[i + 1]
      ? divisors[i + 1] * arraysToCombine[i + 1].length
      : 1;
  }
  function getPermutation(n, arraysToCombine) {
    var result = [],
      curArray;
    for (var i = 0; i < arraysToCombine.length; i++) {
      curArray = arraysToCombine[i];
      result.push(curArray[Math.floor(n / divisors[i]) % curArray.length]);
    }
    return result.length ? result : [];
  }
  var numPerms = arraysToCombine[0].length;
  for (var i = 1; i < arraysToCombine.length; i++) {
    numPerms *= arraysToCombine[i].length;
  }
  var combinations = [];
  for (var i = 0; i < numPerms; i++) {
    combinations.push(getPermutation(i, arraysToCombine));
  }
  return combinations;
};

const createProductSlug = (def) => {
  const words = def.split(' ');

  let slugName = words
    .map((word) => {
      return word[0].toUpperCase() + word.substring(1);
    })
    .join(' ');

  return `${slugName.toLowerCase().replace(/ /g, '_')}`;
};

const fetchImages = (images) => {
  if (images && images.length > 0) {
    let TotalImage = [];
    images.forEach((image) => {
      TotalImage.push(`/images/fasteners/anchors/${image}.png`);
    });
    return TotalImage;
  }
  return ['/images/products/product-2-1.jpg'];
};

exports.filterProducts = async (req, allProductsData, limit, skipItems) => {
  let searchedValues = Object.values(req.query);
  searchedValues = searchedValues[0].split(',');
  const data = await Attribute.findOne({ name: 'diameter' });

  let searchedAttributeIds = data.values.filter(({ value }) => {
    console.log(searchedValues.includes(value));
    return searchedValues.includes(value);
  });

  searchedAttributeIds = await Promise.all(
    searchedAttributeIds.map(async ({ _id }) => _id.toString())
  );
  let searchedProducts = allProductsData.products.filter((product) => {
    let attribute = product.attributes.find(({ value }) =>
      searchedAttributeIds.includes(value.toString())
    );
    if (attribute) return true;
    return false;
  });
  let total = searchedProducts.length;
  return {
    ...allProductsData,
    products: searchedProducts,
    total,
    from: total ? allProductsData.from : 0,
    to: total < limit + skipItems ? total : limit + skipItems,
  };
};

exports.generateProducts = async (res, category_id, sub_category_id) => {
  if (!category_id && !sub_category_id) {
    res.status(400).send({
      status: 'validation error',
      message: '[category_id | sub_category_id] is required!',
    });
  }
  let cond = category_id ? { category: category_id } : { _id: sub_category_id };
  let subCategoryData = await SubCategory.find(cond)
    .populate({ path: 'category', populate: { path: 'section' } })
    .populate('attributes.attribute');

  let updateRespWithAttr = subCategoryData.map((data) => {
    let attributes = [];

    if (data.attributes && data.attributes.length > 0) {
      attributes = data.attributes.map((attribute) => {
        let values = attribute.values.map((val) => {
          return attribute.attribute.values.find((attr) =>
            val.equals(attr._id)
          );
        });
        let attrObj = { ...attribute.toObject() };
        return {
          ...attrObj.attribute,
          values,
        };
      });
    }

    attributes = attributes.map(({ values, _id, shortName }) => {
      return values.map((item) => ({
        ...item.toObject(),
        attribute_id: _id,
        shortName:
          shortName + item?.shortName === true ? item.shortName : item.value,
        value: item.value,
      }));
    });

    if (attributes.length > 1) {
      attributes = this.getAllCombinations(attributes);
    }

    return {
      ...data.toObject(),
      attributes,
    };
  });

  let finalResp = [];
  updateRespWithAttr.forEach((items) => {
    let {
      _id: sub_category,
      shortName,
      category,
      name: subCatName,
      images,
      attributes,
    } = items;
    let sku = `${category.section.shortName}-${category.shortName}-${shortName}`;
    let name = `${subCatName} ${category.name}`;
    images = items.images.map(
      (img) =>
        `${items.category.section.name}__${
          items.category.name
        }__${items.name.toLowerCase().replace(/ /g, '_')}__${img}`
    );
    let skuList = [];
    const finalRespFunc = (productSku, productName, values) => {
      return finalResp.push({
        sku: sku + '-' + productSku,
        name: productName,
        slug: createProductSlug(productName),
        images: fetchImages(images),
        attributes: values,
        sub_category,
        category: category._id,
        section: category.section._id,
        excerpt: `
        Many philosophical debates that began in ancient times are still debated today. In one general sense,
        philosophy is associated with wisdom, intellectual culture and a search for knowledge.
        `,
        description: `--${productName}`,
        partNumber: 'BDX-750Z370-S',
        stock: 'in-stock',
        price: 25,
        isFeatured: false,
        compareAtPrice: 45,
        rating: 4,
        reviews: 21,
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
      });
    };
    if (attributes.length > 1) {
      attributes.forEach((attribute) => {
        let attributeList = [];
        let values = attribute.map(({ _id, attribute_id }) => ({
          attribute: attribute_id,
          value: _id,
        }));
        attribute.forEach((attr) => {
          attributeList.push(attr.shortName);
        });
        let productSku = attributeList.reduce((arr, attr) => {
          return arr + '-' + attr;
        });
        skuList.push(sku + '-' + productSku);
        let productName = attribute.reduce((acc, attr) => {
          return acc + ' ' + attr.value;
        }, name);

        finalRespFunc(productSku, productName, values);
      });
    } else {
      attributes.forEach((attribute) => {
        attribute.forEach((att) => {
          let values = {
            attribute: att.attribute_id,
            value: att._id,
          };
          let productSku = att.shortName;
          let productName = name + ' ' + att.value;
          finalRespFunc(productSku, productName, values);
        });
      });
    }
  });

  Product.bulkWrite(
    finalResp.map((item) => {
      return {
        updateOne: {
          filter: { sku: item.sku },
          update: item,
          upsert: true,
        },
      };
    })
  )
    .then((data) => {
      res.send({
        status: true,
        newCreatedProducts: data.nUpserted,
        message: 'products created successfully.',
      });
    })
    .catch((err) => {
      throw err;
    });
};
