const dbConnect = require('../../../../../utils/dbConnect');
const { addAttributes } = require('../../../../../utils/productKeys');
const { Product, SubCategory } = require('../../../../../models');
const { getCombn, generateProducts } = require('../../../../../utils/helper');

export default dbConnect(async (req, res) => {
  switch (req.method) {
    case 'GET':
      const getAllProducts = async () => {
        const subcategoryData = await SubCategory.find({
          name: req.query.slug,
        });
        if (subcategoryData.status === 500) {
          res.status(500);
          res.json([]);
        }
        let subcategoryProducts = await Product.find({
          sub_category: subcategoryData[0]._id,
        })
          .populate({ path: 'category' })
          .populate({ path: 'section' })
          .populate({ path: 'sub_category' })
          .populate({ path: 'attributes' });

        if (subcategoryProducts.status === 500) {
          res.status(500);
          res.json([]);
        }
        return subcategoryProducts || [];
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
    case 'POST': {
      await generateProducts(res, null, req.query.id);
      return;
    }
    default:
      res.send({ status: false, message: 'Not found!' });
  }
});
