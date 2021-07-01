const dbConnect = require('../../../../utils/dbConnect');
const { Product, Attribute } = require('../../../../models');

export default dbConnect(async (req, res) => {
  const attribute = Object.keys(req.query);
  let searchedValues = Object.values(req.query);
  searchedValues = searchedValues[0].split(',');
  switch (req.method) {
    case 'GET':
      const data = await Attribute.find({});
      if (data.status === 500) {
        res.status(500);
        res.json([]);
      }
      const searchedAttributeIds = [];
      if (data) {
        data.forEach((item) => {
          if (attribute.includes(item.name)) {
            item.values.forEach((att) => {
              if (searchedValues.includes(att.value)) {
                searchedAttributeIds.push(`${att._id}`);
              }
            });
          }
        });
      }
      const searchedProducts = [];
      const products = await Product.find({}).populate({ path: 'attributes' });
      products.forEach((product) => {
        product.attributes.forEach((att) => {
          if (searchedAttributeIds.includes(`${att.value}`)) {
            searchedProducts.push(product);
          }
        });
      });
      res.json(searchedProducts);
      break;
    default:
      res.send({ status: false, message: 'Not found!' });
  }
});
