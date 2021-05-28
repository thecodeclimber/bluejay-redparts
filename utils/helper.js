const { SubCategory, Product } = require('../models')
exports.getCombn = ({ items, category, sub_category }) => {
    if (items.length == 1)
      return items[0].map((item) => `${sub_category} ${category} ${item}`);
    return this.getAllCombinations(items).map(
      (item) =>
        `${sub_category} ${category} ${item.join(' ').replace(/ /g, ', ')}`
    );
  }
  
exports.getAllCombinations = (arraysToCombine) => {
    var divisors = [];
  
    if ([0, 1].includes(arraysToCombine.length))
      return arraysToCombine;
  
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
  
  exports.generateProducts = async (res, category_id, sub_category_id)=>{
    if(!category_id && !sub_category_id)
    {
      res.status(400).send({status: 'validation error', message: "[category_id | sub_category_id] is required!"})
    }
    let cond = category_id ? { category: category_id } :{ _id: sub_category_id };
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
          values
        }
      })
    };
    attributes = this.getAllCombinations(attributes.map(({ values, _id, shortName }) => {
      return values.map(item => ({ ...item.toObject(), attribute_id: _id, shortName: shortName + item.value, value: item.value }));
    }));
    return {
      ...data.toObject(),
      attributes
    }
  })
  
  let finalResp = [];
  updateRespWithAttr.forEach((items) => {
    let { _id: sub_category, shortName, category, name: subCatName, images, attributes } = items;
    let sku = `${category.section.shortName}-${category.shortName}-${shortName}`;
    let name = `${category.section.name} ${category.name} ${subCatName}`;
  
    attributes.forEach(attribute => {
      let values = attribute.map(({ _id, attribute_id }) => ({ attribute: attribute_id, value: _id }));
      let productSku = attribute.reduce((acc, attr) => {
        return acc + "-" + attr.shortName;
      }, sku)
      
      let productName = attribute.reduce((acc, attr) => {
        return acc + " " + attr.value;
      }, name)
  
      finalResp.push({
        sku: productSku,
        name: productName,
        images,
        attributes: values,
        sub_category,
        category: category._id,
        section: category.section._id,
      })
    })
  })
  
  Product.bulkWrite(finalResp.map(item=>({
    updateOne: {
      filter: {sku: item.sku},
      update: item,
      upsert: true
    }
  }))).then(data=>{
    res.send({status: true, newCreatedProducts: data.nUpserted , message: "products created successfully."});
  }).catch(err => { throw err } );
  }