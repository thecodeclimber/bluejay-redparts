const dbConnect = require('../../../../../utils/dbConnect');
const { SubCategory, Section } = require('../../../../../models');
const { addAttributes } = require('../../../../../utils/productKeys');

export default dbConnect(async (req, res) => {
  switch (req.method) {
    case 'GET':
      let data = await SubCategory.find({ category: req.query.id })
        .populate('category', 'name section')
        .populate({ path: 'attributes.attribute', select: 'values' });

      if (data && data.length > 0) {
        let newProducts = [];
        await Promise.all(
          data.map(async (newData) => {
            let section = await Section.find({ _id: newData.category.section });
            let items = [];
            if (newData.attributes && newData.attributes.length > 0) {
              newData.attributes.forEach((attribute) => {
                let attrData = attribute.values.map((val) => {
                  return attribute.attribute.values.find((attr) =>
                    val.equals(attr._id)
                  ).value;
                });
                items.push(attrData);
              });

              if (newData && newData.category?.name) {
                let images = newData.images.map(
                  (img) =>
                    `${section[0].name}__${
                      newData.category.name
                    }__${newData.name.toLowerCase().replace(/ /g, '_')}__${img}`
                );
                let products = getCombn({
                  items,
                  category: newData.category?.name,
                  sub_category: newData.name,
                });

                newProducts.push(
                  products.map((product) => {
                    return addAttributes(product, images);
                  })
                );
              }
            }

            return newProducts;
          })
        );
        newProducts = newProducts.reduce((arr, item) => {
          return arr.concat(item);
        });
        res.send(newProducts);
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
