const dbConnect = require('../../../../../utils/dbConnect');
dbConnect();
const { SubCategory, Section } = require('../../../../../models');
export default async (req, res) => {
  switch (req.method) {
    case 'GET':
      let data = await SubCategory.findById(req.query.id)
        .populate('category', 'name section')
        .populate({ path: 'attributes.attribute', select: 'values' });
      let section = await Section.findById(data.category.section, 'name');
      let items = [];

      data.attributes.forEach((attribute) => {
        let attrData = attribute.values.map((val) => {
          return attribute.attribute.values.find((attr) => val.equals(attr._id))
            .value;
        });
        items.push(attrData);
      });

      let images = data.images.map(
        (img) => `${section.name}__${data.category.name}__${data.name}__${img}`
      );
      let products = getCombn({
        items,
        category: data.category.name,
        sub_category: data.name,
      });
      res.send({ _id: data._id, name: data.name, images, products });
      break;
    default:
      res.send({ status: false, message: 'Not found!' });
  }
};

function getCombn({ items, category, sub_category }) {
  if (items.length == 1)
    return items[0].map((item) => `${sub_category} ${category} ${item}`);
  return getAllCombinations(items).map(
    (item) => `${sub_category} ${category} ${item.join(' ')}`
  );
}

const getAllCombinations = function (arraysToCombine) {
  let divisors = [];
  for (let i = arraysToCombine.length - 1; i >= 0; i--) {
    divisors[i] = divisors[i + 1]
      ? divisors[i + 1] * arraysToCombine[i + 1].length
      : 1;
  }
  function getPermutation(n, arraysToCombine) {
    let result = [],
      curArray;
    for (let i = 0; i < arraysToCombine.length; i++) {
      curArray = arraysToCombine[i];
      result.push(curArray[Math.floor(n / divisors[i]) % curArray.length]);
    }
    return result;
  }
  let numPerms = arraysToCombine[0].length;
  for (let i = 1; i < arraysToCombine.length; i++) {
    numPerms *= arraysToCombine[i].length;
  }
  let combinations = [];
  for (let i = 0; i < numPerms; i++) {
    combinations.push(getPermutation(i, arraysToCombine));
  }
  return combinations;
};
