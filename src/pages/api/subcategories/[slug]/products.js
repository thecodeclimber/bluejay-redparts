const dbConnect = require('../../../../../utils/dbConnect');
const { Product, SubCategory, Attribute } = require('../../../../../models');
const {
  generateProducts,
  getProducts,
} = require('../../../../../utils/helper');

export default dbConnect(async (req, res) => {
  switch (req.method) {
    case 'GET':
      try {
        const defaultLimit = 8;
        let { page, limit, sort, length } = req.query;
        page = parseInt(page);
        const skipItems = page
          ? page == 1
            ? 0
            : (parseInt(page) - 1) * limit
          : 0;
        limit = limit ? parseInt(limit) : defaultLimit;
        sort = sort != 'default' ? (sort == 'name_asc' ? 1 : -1) : 0;
        const getAllProducts = async () => {
          const subcategoryData = await SubCategory.findOne({
            name: { $regex: new RegExp(req.query.slug, 'i') },
          });
          if (length)
            length = await Attribute.findOne(
              {
                name: 'length',
                values: { $elemMatch: { value: req.query.length } },
              },
              'values.$'
            );

          if (req.query.length && !length)
            return {
              products: [],
              page,
              total: 0,
              from: 0,
              to: 0,
              pages: 1,
            };

          let subcategoryId = subcategoryData._id;
          let match = length
            ? { value: length.values[0]._id }
            : { $ne: { value: '' } };
          const total = await Product.find({
            sub_category: subcategoryId,
          }).count();
          let subcategoryProducts = await Product.find({
            sub_category: subcategoryId,
          })
            .populate({ path: 'category' })
            .populate({ path: 'section' })
            .populate({ path: 'sub_category' })
            .populate({ path: 'attributes', match: match })
            .skip(skipItems)
            .limit(limit)
            .sort({ name: sort })
            .exec();
          return {
            products: subcategoryProducts,
            page,
            total,
            from: total ? skipItems + 1 : 0,
            to: total < limit + skipItems ? total : limit + skipItems,
            pages: Math.ceil(total / limit),
          };
        };
        let allProductsData = await getAllProducts();

        if (req.query.diameter) {
          let products = await getProducts(
            req,
            allProductsData,
            limit,
            skipItems
          );
          res.send(products);
          return;
        }
        res.json({ ...allProductsData });
      } catch (error) {
        console.log(error);
      }
      break;
    case 'POST': {
      await generateProducts(res, null, req.query.id);
      return;
    }
    default:
      res.send({ status: false, message: 'Not found!' });
  }
});
