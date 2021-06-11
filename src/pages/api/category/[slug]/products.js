const dbConnect = require('../../../../../utils/dbConnect');
const { generateProducts } = require('../../../../../utils/helper');
const { Attribute, Product, Category } = require('../../../../../models');
export default dbConnect(async (req, res) => {
  switch (req.method) {
    case 'GET':
      const getAllProducts = async () => {
        const categoryData = await Category.find({
          name: req.query.slug.replace(/_/g, ' '),
        });
        if (categoryData.status === 500) {
          res.status(500);
          res.json([]);
        }
        let categoryProducts = await Product.find({
          category: categoryData[0]._id,
        })
          .populate({ path: 'category' })
          .populate({ path: 'section' })
          .populate({ path: 'sub_category' })
          .populate({ path: 'attributes' });

        if (categoryProducts.status === 500) {
          res.status(500);
          res.json([]);
        }
        return categoryProducts || [];
      };
      if (req.query?.diameter) {
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
      await generateProducts(res, req.query.slug, null);
      return;
    }
    default:
      res.send({ status: false, message: 'Not found!' });
  }
});
