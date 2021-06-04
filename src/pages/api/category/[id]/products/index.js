const dbConnect = require('../../../../../../utils/dbConnect');
const { generateProducts } = require('../../../../../../utils/helper');

const { Attribute, Product } = require('../../../../../../models');
const { addAttributes } = require('../../../../../../utils/productKeys');
export default dbConnect(async (req, res) => {
  switch (req.method) {
    case 'GET':
      const getAllProducts = async () => {
        let Data = await Product.find({ category: req.query.id })
          .populate({ path: 'category' })
          .populate({ path: 'section' })
          .populate({ path: 'sub_category' })
          .populate({ path: 'attributes' });

        if (Data.status === 500) {
          res.status(500);
          res.json([]);
        }
        return Data;
      };
      if (req.query.diameter) {
        let productsData = await getAllProducts();
        const attribute = 'diameter';
        let searchedValues = Object.values(req.query);
        searchedValues = searchedValues[0].split(',');
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
        productsData.forEach((product) => {
          product.attributes.forEach((att) => {
            if (searchedAttributeIds.includes(`${att.value}`)) {
              searchedProducts.push(product);
            }
          });
        });
        res.json(searchedProducts);
      }
      let productsData = await getAllProducts();
      res.json(productsData);
      break;
    // create products
    case 'POST': {
      await generateProducts(res, req.query.id, null);
      return;
    }
    default:
      res.send({ status: false, message: 'Not found!' });
  }
});
