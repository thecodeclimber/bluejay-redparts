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

exports.getProducts = async (req, allProductsData,limit, skipItems) => {
  let searchedValues = Object.values(req.query);
  searchedValues = searchedValues[0].split(',');
  const data = await Attribute.findOne({name: 'diameter'});

  let searchedAttributeIds =  data.values.filter(({value})=> {
    return searchedValues.includes(String(value))
  })
console.log({searchedAttributeIds, values: data.values});
  searchedAttributeIds = await Promise.all(searchedAttributeIds.map(async ({_id})=>String(_id)));
  let searchedProducts = allProductsData.products.filter(product=>{
    let attribute = product.attributes.find(({value})=>searchedAttributeIds.includes(String(value)));
    if(attribute) return true;
    return false;
  });
  let total = searchedProducts.length
  return ({...allProductsData, products: searchedProducts, total, from: total?allProductsData.from:0, to: total < (limit + skipItems) ? total: limit + skipItems });
};
