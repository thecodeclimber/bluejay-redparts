const dbConnect = require('../../../../../utils/dbConnect');
const { Product, SubCategory, Attribute } = require('../../../../../models');
const { generateProducts } = require('../../../../../utils/helper');

export default dbConnect(async (req, res) => {
  switch (req.method) {
    case 'GET':
      const getAllProducts = async () => {
        const subcategoryData = await SubCategory.find({});
        if (subcategoryData.status === 500) {
          res.status(500);
          res.json([]);
        }
        let subcategoryId = '';
        subcategoryData.map((subcategory) => {
          if (
            subcategory.name.toLowerCase().replace(/ /g, '_') === req.query.slug
          ) {
            subcategoryId = subcategory._id;
          }
        });

        let subcategoryProducts = await Product.find({
          sub_category: subcategoryId,
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
        res.json(searchedProducts || []);
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
