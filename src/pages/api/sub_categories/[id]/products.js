const dbConnect = require('../../../../../utils/dbConnect');
const { addAttributes } = require('../../../../../utils/productKeys');
const { SubCategory, Section } = require('../../../../../models');
export default dbConnect(async (req, res) => {
  switch (req.method) {
    case 'GET':
      let data = await SubCategory.findById(req.query.id)
        .populate('category', 'name section')
        .populate({ path: 'attributes.attribute', select: 'values' });

      let section = await Section.findById(data.category.section, 'name');

      let items = [];

      if (data.attributes && data.attributes.length > 0) {
        data.attributes.forEach((attribute) => {
          let attrData = attribute.values.map((val) => {
            return attribute.attribute.values.find((attr) =>
              val.equals(attr._id)
            ).value;
          });
          items.push(attrData);
        });

        let images = data.images.map(
          (img) =>
            `${section.name}__${
              data.category.name
            }__${data.name.toLowerCase().replace(/ /g, '_')}__${img}`
        );
        let products = getCombn({
          items,
          category: data.category.name,
          sub_category: data.name,
        });

        products = products.map((product) => {
          return addAttributes(product, images);
        });

        if (res.status === 500) {
          res.status(500);
          res.send([]);
          return;
        }
        res.send({ _id: data._id, name: data.name, products });
      }
      res.send([]);
      break;
    default:
      res.send({ status: false, message: 'Not found!' });
  }
});

function getCombn({ items, category, sub_category }) {
  if (items.length == 1)
    return items[0].map((item) => `${sub_category} ${category} ${item}`);
  return getAllCombinations(items).map(
    (item) =>
      `${sub_category} ${category} ${item.join(' ').replace(/ /g, ', ')}`
  );
}

var getAllCombinations = function (arraysToCombine) {
  var divisors = [];
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
