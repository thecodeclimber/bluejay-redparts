const dbConnect = require('../../../../../utils/dbConnect');
const { generateProducts, getProducts } = require('../../../../../utils/helper');
const { Attribute, Product, Category } = require('../../../../../models');
export default dbConnect(async (req, res) => {
  switch (req.method) {
    case 'GET':
      let { page, limit, sort } = req.query;
      const skipItems =  page ? (page == 1) ? 0 : (parseInt(page) - 1) * limit : 0;
      limit = limit ? parseInt(limit) : defaultLimit; 
      sort = sort != 'default' ? sort == 'name_asc' ? 1: -1 : 0;

      const getAllProducts = async () => {
        const categoryData = await Category.find({
          name: req.query.slug.replace(/_/g, ' '),
        });
        const total = await Product.find({category: categoryData[0]._id}).count();
        let categoryProducts = await Product.find({
          category: categoryData[0]._id,
        })
          .populate({ path: 'category' })
          .populate({ path: 'section' })
          .populate({ path: 'sub_category' })
          .populate({ path: 'attributes' })
          .skip(skipItems)
          .limit(limit)
          .sort({ name: sort })
          .exec();

          return { 
            products: categoryProducts, 
            page,
            total, 
            from: total ? skipItems + 1 :0 ,
            to: total < (limit + skipItems) ? total: limit + skipItems,
            pages: Math.ceil( total / limit)
           };
      };
      let allProductsData = await getAllProducts();
      if (req.query?.diameter) {
        let products = await getProducts(req, allProductsData, limit, skipItems);
        res.send(products);
        return;
      }
      res.json({...allProductsData});
      break;
    case 'POST': {
      await generateProducts(res, req.query.slug, null);
      return;
    }
    default:
      res.send({ status: false, message: 'Not found!' });
  }
});
